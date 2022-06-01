import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import ProductDataService from "../services/product.services";

const AddProduct = ({ id, setProductId }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [status, setStatus] = useState("Available");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || price === "" || rating === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newProduct = {
      title,
      image,
      price,
      rating,
      status,
    };
    console.log(newProduct);

    try {
      if (id !== undefined && id !== "") {
        await ProductDataService.updateProduct(id, newProduct);
        setProductId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await ProductDataService.addProducts(newProduct);
        setMessage({ error: false, msg: "New Product added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setImage("");
    setPrice("");
    setRating("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await ProductDataService.getProduct(id);
      console.log("the record is :", docSnap.data());
      setTitle(docSnap.data().title);
      setImage(docSnap.data().image);
      setPrice(docSnap.data().price);
      setRating(docSnap.data().rating);
      setStatus(docSnap.data().status);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formProductTitle">
            <InputGroup>
              <InputGroup.Text id="formProductTitle">Product Title</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Product Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formProductPrice">
            <InputGroup>
              <InputGroup.Text id="formProductPrice">Product Image</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Product Image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formProductPrice">
            <InputGroup>
              <InputGroup.Text id="formProductPrice">Product Price</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Product Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formProductPrice">
            <InputGroup>
              <InputGroup.Text id="formProductPrice">Product Rating</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Product Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Available");
                setFlag(true);
              }}
            >
              Available
            </Button>
            <Button className="mx-3"
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Not Available");
                setFlag(false);
              }}
            >
              Not Available
            </Button>
          </ButtonGroup>
          <div className="d-grid gap-2 mx-3">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddProduct;