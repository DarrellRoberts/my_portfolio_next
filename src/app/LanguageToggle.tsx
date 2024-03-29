"use client";

import Link from "next/link"
import {useState, useEffect} from "react"

import "./style/languageToggle.css"

const LanguageToggle: React.FC = () => {
const [showGerman, setShowGerman] = useState<boolean>(false)

useEffect (() => {
  if (typeof window !== "undefined") {
    const path = window.location.pathname;
        if (path === "/de") {
    setShowGerman(true)
    }
  }
}, [])
console.log(showGerman)
    return (
        <div>
        {showGerman ? (
        <Link href="/">
        <button
        className="transButton" 
        onClick={() => setShowGerman(false)}>
        EN
        </button>
        </Link>
        ) : (
        <Link href="/de">
        <button
        className="transButton" 
        onClick={() => setShowGerman(true)}>
        DE
        </button>
        </Link>
        )
}
      </div>
    )
}

export default LanguageToggle