"use client";

import {useState, useEffect} from "react"

import "../../style/hero.css";
import "../../style/heroRes.css";

import { DownOutlined } from "@ant-design/icons";
import Back from "../../assets/background.mp4"

export default function Hero() {
const [startFade, setStartFade] = useState(false)

const handleFade = () => {
  const time = setTimeout(() => {
      setStartFade(true)
  }, 100);
  return () => clearTimeout(time)
}

useEffect(() => {handleFade()}, [])
    return (
<div className="heroBack">
        {Back ? (
        <video className="vidBack" loop={true} autoPlay={true} muted>
          <source src={Back} type="video/mp4" />
        </video>
        ) : <div className="vidBack">
          </div>}
        {startFade ? (
        <div className="name">
          <h1>
            Darrell <br /> Roberts
          </h1>
          <h2>Fullstack Developer</h2>
          <div className="Vcon">
          <DownOutlined
            onClick={() =>
              window.scrollTo({
                top: 1000,
                behavior: "smooth",
              })
            }
            className="V"
          />
          
          </div>
        </div>
        ) : null}
      </div>
    )
}