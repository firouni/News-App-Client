import React, { useState } from "react";
import "./WriteBlogs.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const WriteBlogs = () => {
    const [value, setValue] = useState("");
        console.log(value, "value");
    const [title, setTitle] = useState("");
    const [cover, setCover] = useState(null);
    const [cat, setCat] = useState("");

    const newRequest = async (value) => {
        const alpha = await axios.post("http://localhost:5002/blogs/add", {...value})
        const data = await alpha.data
        return data
    }

    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append('file', cover);
            const res = await axios.post("/upload", formData);
            return res.data
        } catch (err) {
            console.log(err)
        }
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
                <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
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
                <input
                    style={{ display: "none" }}
                    type="file"
                    name=""
                    id="file"
                    onChange={(e) => setCover(e.target.value)}
                />
                <label className="file" htmlFor="file">
                    Upload Image
                </label>
                <div className="buttons">
                    <button onClick={handleAdd}>Save as a Draft</button>
                    <button onClick={handleChange}>Publish</button>
                </div>
                </div>
                <div className="item">
                <h1>Category</h1>
                <div className="cat">
                    <input
                    type="radio"
                    checked={cat === "national"}
                    name="cat"
                    value="national"
                    id="national"
                    onChange={(e) => setCat(e.target.value)}
                    />
                    <label htmlFor="national">National</label>
                </div>
                <div className="cat">
                    <input
                    type="radio"
                    checked={cat === "art"}
                    name="cat"
                    value="politics"
                    id="politics"
                    onChange={(e) => setCat(e.target.value)}
                    />
                    <label htmlFor="politics">Politics</label>
                </div>
                <div className="cat">
                    <input
                    type="radio"
                    checked={cat === "Economics"}
                    name="cat"
                    value="Economics"
                    id="Economics"
                    onChange={(e) => setCat(e.target.value)}
                    />
                    <label htmlFor="economy">Economics</label>
                </div>
                <div className="cat">
                    <input
                    type="radio"
                    checked={cat === "international"}
                    name="cat"
                    value="international"
                    id="international"
                    onChange={(e) => setCat(e.target.value)}
                    />
                    <label htmlFor="international">International</label>
                </div>
                <div className="cat">
                    <input
                    type="radio"
                    checked={cat === "sports"}
                    name="cat"
                    value="sports"
                    id="sports"
                    onChange={(e) => setCat(e.target.value)}
                    />
                    <label htmlFor="sport">Sports</label>
                </div>
                <div className="cat">
                    <input
                    type="radio"
                    checked={cat === "art"}
                    name="cat"
                    value="art"
                    id="art"
                    onChange={(e) => setCat(e.target.value)}
                    />
                    <label htmlFor="art">Arts</label>
                </div>
                <div className="cat">
                    <input
                    type="radio"
                    checked={cat === "fitness"}
                    name="cat"
                    value="fitness"
                    id="fitness"
                    onChange={(e) => setCat(e.target.value)}
                    />
                    <label htmlFor="fitness">Health & Fitness</label>
                </div>
                <div className="cat">
                    <input
                    type="radio"
                    checked={cat === "tech"}
                    name="cat"
                    value="tech"
                    id="tech"
                    onChange={(e) => setCat(e.target.value)}
                    />
                    <label htmlFor="tech">High-Tech</label>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default WriteBlogs;
