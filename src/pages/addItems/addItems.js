import { React, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";

import { db } from "../../firebase.config";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebase from "../../firebase";

import "./addItems.css";

const initialState = {
  name: "",
  price: "",
  category: "",
  inStock: false,
  image: "",
};
function AddItems() {
  const [data, setData] = useState(initialState);
  const [inStock, setinStock] = useState(false);

  useEffect(() => {}, []);

  const handleChange = (event) => {
    if (event)
      if (typeof event === "string" || !event) {
        setData({ ...data, [event.target.name]: event.target.value });
      } else {
        const { name, type, value } = event.target;
        console.log({ type });
        if (type == "file") {
          // console.log(event.target.files[0])
          setData({
            ...data,
            image: event.target.files[0],
          });
        } else if (type === "checkbox") {
          setinStock(!inStock);
          setData({
            ...data,
            [event.target.name]: !inStock,
          });
        } else {
          setData({
            ...data,
            [event.target.name]: event.target.value,
          });
        }
      }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
  };

  // setData(initialState);
  return (
    <div className="container">
      <div className="AddItemsForm">
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="$XX"
              name="price"
              value={data.price}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Select
              aria-label="Default select example"
              name="category"
              onChange={handleChange}
              value={data.category}
            >
              <option>Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              checked={data.inStock}
              type="checkbox"
              label="Instock"
              name="inStock"
              //   value={data.inStock}
              //   onClick={() => setinStock(!inStock)}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Image Upload</Form.Label>
            <Form.Control
              type="file"
              name="image"
              onChange={handleChange}
              accept=".jpg,.png,.jpeg"
              required
              //   value={data.image}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default AddItems;
