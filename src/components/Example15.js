"use client";
export default function Greeting({isLoggedIn}){
    return isLoggedIn? <h1>Welcome back!</h1>:<h1>Please Log in.</h1>;
}