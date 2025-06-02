"use client";
import React from "react";
export default class Item extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: "Apple",
            price: "2500",
        };
    }
    render(){
        return(
            <div>
                <h1>State in Hello Item</h1>
                <div>{this.state.name}</div>
                <div>{this.state.price}</div>
            </div>
        );
    }
}