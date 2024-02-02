"use client";

import "../../style/hero.css";
import "../../style/heroRes.css";
// import Back from "../../assets/background.mp4";
import { DownOutlined } from "@ant-design/icons";

const Hero: React.FC = () => {
return (
<div className="heroBack">
        <div className="vidBack">
          </div>
        <div className="name">
          <h1>
            Darrell <br /> Roberts
          </h1>
          <h2>Fullstack Entwickler</h2>
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
      </div>
)
}

export default Hero