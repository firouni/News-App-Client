import React from 'react';
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Blog = ({ title, description, cover, isUser, id, userName, update }) => {
    const navigate = useNavigate();
    const handleEdit = (e) => {
        navigate("/editorial")
    }

    const deleteRequest = async () => {
        const res = await axios
            .delete(`http://localhost:5002/api/blogs/dltBlog/${id}`)
            .catch((err) => console.log(err));
        const data = await res.data;
        return data;
    }
    const handleDelete = () => {
        deleteRequest().then((data) => console.log(data));
    }

    return (
        <div>
            {" "}
            <Card
            sx={{
                Width: "35%",
                margin: "auto",
                mt: 2,
                p: 2,
                boxShadow: "5px 5px 10px #ccc",
                "&:hover": {
                boxShadow: "10px 10px 20px #ccc",
                },
            }}
            >
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: "teal" }} aria-label="recipe">
                    {userName.charAt(0)}
                </Avatar>
                }
                title={userName}
                subheader={update}
            />
            <Button variant="contained" startIcon={<EditIcon />}>
                Edit
            </Button>
            <Button variant="outlined" endIcon={<DeleteIcon />}>
                Delete
            </Button>

            {isUser && (
                <Box display="flex">
                <IconButton onClick={handleEdit} sx={{ m: "auto" }}>
                    <ModeEditIcon />
                </IconButton>
                <IconButton onClick={handleDelete} sx={{ m: "auto" }}>
                    <DeleteForeverIcon />
                </IconButton>
                </Box>
            )}

            <CardMedia component="img" height="150" image={cover} alt="" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
        </div>
    );
};

export default Blog