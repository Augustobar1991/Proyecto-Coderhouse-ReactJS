import React from "react";
import "../styles/ItemListContainer.css";
import "../styles/header.css";

export default function ItemListContainer ({greeting}){
    return(
        <div className="algo">{greeting}</div>
    )
}