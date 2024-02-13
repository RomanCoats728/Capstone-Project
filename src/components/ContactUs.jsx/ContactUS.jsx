import React from "react";
import "./ContactUS.css"
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

export function ContactUs ({setToken}){
    return(
        <>
        <Header setToken={setToken}/>
        <Sidebar/>
        <div className="Contact-Form">
        <form>
            <h1>Contact Us<span>Here</span></h1>
            <input type="text" name="name" id="" placeholder="Enter Name"/>
            <input type="email" name="email" id="" placeholder="Example@email.com"/>
            <input type="phone" name="phone" id="" placeholder="(678)-***-****"/>
            
            <textarea name="message" id="" cols={30} rows={10} placeholder="Enter Question and Concerns Here"/>
            <button type="submit">Submit</button>


        </form>
        </div>
        </>
    )
}