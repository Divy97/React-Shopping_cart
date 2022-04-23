import React from "react";
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardHeader,
    Card, 
    CardFooter,
    CardBody,
    Col,
    Row
} from "reactstrap";
 
const Cart = ({cartItem, removeItem, buyNow}) => {

    let amount = 0;
    cartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice);
    });
    return(
       <Container fluid>
           <h1 className="text-success"> Your Cart </h1>
           <ListGroup>
               {cartItem.map(item => (
                   <ListGroupItem key={item.id}>
                       <Row>
                           <Col>
                            <img
                            height="80"
                            src={item.tinyImage}
                            />
                           </Col>
                           <Col className="text-center">
                                <div className="text-primary">
                                    {item.productName}
                                </div>
                                <span>
                                  Price:-  {item.productPrice}
                                </span>
                                <Button
                                color="danger"
                                onClick={() => removeItem(item)}>
                                    Remove
                                </Button>
                           </Col>
                       </Row>
                   </ListGroupItem>
               ))}
           </ListGroup>
           {/* //If Everything is Empty */}
            {
                cartItem.length >= 1 ? (
                    <Card className="text-center mt-3">
                        <CardHeader>
                            GrandTotal
                        </CardHeader>
                        <CardBody>
                            Your amount for {cartItem.length} product is is:- {amount}
                        </CardBody>
                        <CardFooter>
                            <Button color="success" onClick={buyNow}>
                                Pay Here
                            </Button>
                        </CardFooter>
                    </Card>
                ) : (
                    <h1 className="text-warning">Cart is Empty</h1>
                )
            }
       </Container>
    )
}

export default Cart;