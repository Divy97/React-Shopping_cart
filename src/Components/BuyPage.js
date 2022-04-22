import React,{useState, useEffect} from "react";
import { Axios } from "axios";
import {random, commerce} from "faker"; 
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
        const {data} = await Axios.get(localUrl);
    };
    const {photos} = data;

    useEffect(() => {
        fetchPhoto();
    }[])
}

export default BuyPage;