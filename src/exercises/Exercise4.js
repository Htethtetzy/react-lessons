"use client";
import React, {useState} from "react";
export default function Item(){
    const [name, setName]=useState("Orange");
    const [price, setPrice]=useState("1000");
    return(
        <div>
            <h1>State in Hello React.</h1>
            <div>{name}</div>
            <div>{price}</div>
        </div>
    );
}