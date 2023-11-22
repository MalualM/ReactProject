import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () =>{

    const navigate = useNavigate();
    const handleViewProductList = () => {
        navigate("/ProductList");
    };

    return (
        <>
        <h1>ShopQuick</h1>
        <img src={handleViewProductList.image} alt={handleViewProductList.title}/>
        </>
    )
}
export default HomePage