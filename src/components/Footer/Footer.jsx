import React from "react";
import "./Footer.css";
import {
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";


const Footer = () => {
  return (
    <div className="first-footer">
      <div className="back">
        <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          BACK TO TOP
        </a>
      </div>
      <div className="footer">
        <div className="foot">
          <div className="ins">
            <a>
              <InstagramOutlined />
            </a>
            <a>
              <FacebookOutlined />
            </a>
            <a>
              <YoutubeOutlined />
            </a>
            <a>
              <WhatsAppOutlined />
            </a>
          </div>
        </div>
      </div>



      <form>
      <div style={{display: "flex", justifyContent: "center", marginBottom: "3%"}}>
      <div style={{color: "white", marginRight:"3%", fontSize: "17px"}}>
        <p>
        <strong>Leave your e-mail to get news</strong>
        </p>
      </div>

      <div  style={{marginRight: "3%"}}>
        <input 
        type="email"
        id="form5Example2"
        className="form-control"
        placeholder="Email address"/>
      </div>

      <div>
        <button className= "button button1"
                type="submit"
                >
        Sign Up
        </button>
      </div>
      </div>
      </form>
       

    <div style={{ backgroundColor: "rgba(255, 255, 255, .4)" , color:"white", padding: "5px 5px"}}>
      <span style={{ marginTop: "45", marginLeft: "45%", }}>
        © 2021 AtHome.com
      </span>
    </div>
      
      
    </div>
  );
};

export default Footer;