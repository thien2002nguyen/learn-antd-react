import React, { useState } from "react";
import { Button, Input } from "antd";
import "./style.css";
import { useNavigate } from "react-router-dom";

const inputStyle = { width: "500px" };

const ButtonPage = () => {
  const navigate = useNavigate();
  const [yourName, setYourName] = useState("");
  const [isShowName, setIsShowName] = useState(false);
  return (
    <div>
      {/*
            type: primary, defauth dashed, text, link
            style: thêm css cho component
      */}
      <div className="container-btn">
        <Input
          placeholder="Enter your name"
          id="your-name"
          value={yourName}
          onChange={(e) => setYourName(e.target.value)}
          width="500px"
          size="large"
          style={inputStyle}
        />
        <Button
          onClick={() => {
            setIsShowName(!isShowName);
          }}
          className="custom-button"
        >
          {!isShowName ? "Show text input!" : "Hidden text input!"}
        </Button>
        <Button
          type="primary"
          onClick={() => {
            navigate("/");
          }}
          danger
        >
          Click here to return to the home page!
        </Button>
      </div>
      <div className="container-btn">
        {isShowName && (
          <p>
            {yourName ? `Your name: ${yourName}` : "Please enter your name!"}
          </p>
        )}
      </div>
    </div>
  );
};

export default ButtonPage;
