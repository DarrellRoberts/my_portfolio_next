"use client";

import "../style/header.css"
import "../style/headerRes.css"

import { useEffect, useState } from "react";
import { LeftOutlined } from "@ant-design/icons";

export default function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [max, setMax] = useState(true);
    const [startFade, setStartFade] = useState(false)
    
    const handleFade = () => {
        const time = setTimeout(() => {
            setStartFade(true)
        }, 1000);
        return () => clearTimeout(time)
    }
    
    const handleFadeOut = () => {
            setStartFade(false)
    }
    
    const handleScroll = () => {
    setScrollPosition(window.scrollY);
    if (window.scrollY !== 0) {
    setMax(false)
    handleFadeOut()
    } else {
    setMax(true);
    handleFade()
    }
    };
    
    useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleFade();
    return () => {
    window.removeEventListener('scroll', handleScroll);
    };
    },
     []);
    return (

<header>
    {max ? (
    <ul className="w-screen bg-primary z-10 flex justify-evenly items-center text-center border-white border-2">
        <a
        onClick={() =>
        window.scrollTo({
        top: 10,
        behavior: "smooth",
        })}>
            <li 
            className={`listHeader ${startFade ? "animate" : "hidden"}`}
            >Home</li></a>
        <a
        onClick={() =>
        window.scrollTo({
        top: 1000,
        behavior: "smooth",
        })}>
            <li 
            className={`listHeader ${startFade ? "animate" : "hidden"}`}>
            About</li></a>
        <a
        onClick={() =>
        window.scrollTo({
        top: 1900,
        behavior: "smooth",
        })}>
            <li 
            className={`listHeader ${startFade ? "animate" : "hidden"}`}>
            Portfolio</li></a>
        <a              
        onClick={() =>
        window.scrollTo({
        top: 2700,
        behavior: "smooth",
        })}>
            <li 
            className={`listHeader ${startFade ? "animate" : "hidden"}`}>
            Skills</li></a>
        <a
        onClick={() =>
        window.scrollTo({
        top: 3500,
        behavior: "smooth",
        })}>
            <li 
            className={`listHeader ${startFade ? "animate" : "hidden"}`}>
            Contact</li></a>
    </ul>
) : (
<div className="p-8 fixed z-10 border-2 header-transition">
    <LeftOutlined 
    onClick={() => {setMax(true); handleFade()}}
    className="innArr"
    /> 
</div>    
)}    
</header>
    )
}