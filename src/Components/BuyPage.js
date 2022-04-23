import React,{useState, useEffect} from "react";
import Axios from "axios";
import { random, commerce } from "faker"; 
import {Container,Col,Row} from "reactstrap";

const apiKey = "INSERT_YOUR_KEY_HERE";
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
const localUrl = "https://myjson.dit.upm.es/api/bins/bo9h";

const BuyPage = ({addInCart}) => {
    const [product, setProduct] = useState([]);

    // const fetchPhoto = async () => {
    //     const response = await Axios.get(url,{
    //         header:{
    //             Authorization: apiKey
    //         }
    //     }) 
    // }

    const fetchPhoto = async () => {
        const {data} = await Axios.get(localUrl,{});

        const {photos} = data;

        const allProduct = photos.map(photo => ({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            id: random.uuid()
        }))

        setProduct(allProduct);
    };
    useEffect(() => {
        fetchPhoto();
    },[])

    return(
        <Container fluid>
            <h1 className="text-success text-center">
                Buy Page
            </h1>
            <Row>
                {product.map(product => (
                    <span key={product.id}>{product.productName}</span>
                ))}
            </Row>
        </Container>
    )
}

export default BuyPage;