import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function CreatePost() {
    const navigate = useNavigate();
    const [post, setPost] = useState({
        title: "",
        description: ""
    });
    const handlechange = (event) => {
        const { name, value } = event.target;
        setPost(Prev => {
            return ({
                ...Prev,
                [name]: value,

            })
        })
    }
    useEffect(() => {
        console.log(post);
    }, [post]);

    const handleClick = (event) => {
        event.preventDefault();
        axios
        .post("/create")
        .then(res => console.log(Error))
        .catch((err) => console.log(Error)) ;
    }

    return (
        <div style={{ width: "90%", margin: "auto auto", textAlign: "center" }}>
            <h1>Create a Post</h1>
            <Form>
                <Form.Group>
                    <Form.Control
                        name="title"
                        value={post.title}
                        placeholder="title"
                        style={{ marginBottom: "1rem" }}
                        onChange={handlechange}
                    />
                    <Form.Control
                        name="description"
                        value={post.description}
                        placeholder="description"
                        style={{ marginBottom: "1rem" }}
                        onChange={handlechange}
                    />
                </Form.Group>
                <Button
                    style={{ width: "100%", marginButtom: "1rem" }}
                    variant="outline-success"
                    onClick={handleClick}>CREATE POST
                </Button>
            </Form>
            <Button
                style={{ width: "100%" }}
                variant="outline-dark"
                onClick={() => navigate(-1)}>BACK</Button>
        </div>
    );
}

export default CreatePost;
