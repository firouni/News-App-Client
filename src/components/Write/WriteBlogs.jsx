import React, { useState } from "react";
import "./WriteBlogs.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const WriteBlogs = () => {
    const [value, setValue] = useState("");
    console.log(value, "value");

    const newRequest = async (value) => {
        const alpha = await axios.post("http://localhost:5002/blogs/add", {...value})
        const data = await alpha.data
        return data
    }

    const handleAdd = (e) => {
        e.preventDefault();
        console.log('inputs', value);
        newRequest().then((data) => console.log(data));
    };
    const handleChange = (e) => {
        setValue((preStat) => ({
            ...preStat,
            [e.target.name]: e.target.value,
        }))
    };

    return (
        <div className="lay">
        <div className="add">
            <div className="content">
            <input type="text" placeholder="Title" />
            <div className="editorContainer">
                <ReactQuill
                className="editor"
                theme="snow"
                value={value}
                onChange={setValue}
                />
            </div>
            </div>
            <div className="menu">
            <div className="item">
                <h1>Publish</h1>
                <span>
                <b>Status:</b> Draft
                </span>
                <span>
                <b>Visibility:</b> Public
                </span>
                <input style={{ display: "none" }} type="file" name="" id="file" />
                <label className="file" htmlFor="file">
                Upload Image
                </label>
                <div className="buttons">
                <button onClick={handleAdd} >Save as a Draft</button>
                <button onClick={handleChange} >Update</button>
                </div>
            </div>
            <div className="item">
                <h1>Category</h1>
                <div className="cat">
                <input type="radio" name="cat" value="national" id="national" />
                <label htmlFor="national">National</label>
                </div>
                <div className="cat">
                <input type="radio" name="cat" value="politics" id="politics" />
                <label htmlFor="politics">Politics</label>
                </div>
                <div className="cat">
                <input type="radio" name="cat" value="Economics" id="Economics" />
                <label htmlFor="economy">Economics</label>
                </div>
                <div className="cat">
                <input
                    type="radio"
                    name="cat"
                    value="international"
                    id="international"
                />
                <label htmlFor="international">International</label>
                </div>
                <div className="cat">
                <input type="radio" name="cat" value="sports" id="sports" />
                <label htmlFor="sport">Sports</label>
                </div>
                <div className="cat">
                <input type="radio" name="cat" value="art" id="art" />
                <label htmlFor="art">Arts</label>
                </div>
                <div className="cat">
                <input type="radio" name="cat" value="fitness" id="fitness" />
                <label htmlFor="fitness">Health & Fitness</label>
                </div>
                <div className="cat">
                <input type="radio" name="cat" value="tech" id="tech" />
                <label htmlFor="tech">High-Tech</label>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default WriteBlogs;
