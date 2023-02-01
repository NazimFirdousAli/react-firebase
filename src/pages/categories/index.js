import React, { useEffect, useState } from "react";
import Wave from "../../assests/wave.png";
import "./index.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import { db } from "../../firebase.config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useHistory } from "react-router-dom";


function Food() {
  const { category } = useParams()
  const [data, setData] = useState([])


  async function GetData() {
    const docSnap = await getDocs(collection(db, category));
    const Product = [...data];
    docSnap.forEach((doc) => {
      if (Product.filter((a) => a?.id == doc?.id).length == 0) {
        Product.push({ id: doc?.id, ...doc.data() })
      }
      console.log(Product, "Product")
      console.log(doc?.id, "doc?.id")
    });
    setData(Product)
  }

  useEffect(() => {
    GetData()
  }, {})

  const history = useHistory();

  return (
    <div>
      <div className="foodDivBackground">
        <h1>{category} List</h1>
      </div>
      <div className="mainDivWave">
        <img src={Wave} alt="wave" />
      </div>
      <div className="cardMainClass">
        <Container>
          <Row>
            {data?.length > 0 ? data.map((a) => {
              return (
                <Col sm={4} key={a?.id} onClick={() => history.push(`/update-items/${category}/${a?.id}`)}>
                  {" "}
                  <div className="cardClass">
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={`https://firebasestorage.googleapis.com/v0/b/dragons-staking-frontend.appspot.com/o/images%2F${a?.image}?alt=media`} />
                      <Card.Body>
                        <Card.Title>{a?.name}</Card.Title>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item>Category: {a?.category}</ListGroup.Item>
                        <ListGroup.Item>{a?.inStock ? "In " : "Out of "} Stock</ListGroup.Item>
                      </ListGroup>
                      <button onClick={() => history.push(`/update-items/${category}/${a?.id}`)}>Update</button>
                    </Card>
                  </div>
                </Col>
              )
            }) : <h1>No Data Found For This Category</h1>}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Food;
