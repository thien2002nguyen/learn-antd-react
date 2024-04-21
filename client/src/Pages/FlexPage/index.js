import React from "react";
import { Flex } from "antd";
import "./style.css";

const FlexPage = () => {
  return (
    <div className="container-flex">
      {/*
            type: vertical(flex-decorection: column), default: horizontal 
            gap: number(pixel)
            justify-content: justify (start, end, center, space-around, space-between, space-evenly)
            align-items: align (start, end, center)
            style: thêm css cho component
      */}
      <Flex
        gap={6}
        justify="space-around"
        align="center"
        style={{
          width: "500px",
          height: "500px",
          border: "1px solid black",
        }}
      >
        <span>Item 1</span>
        <span>Item 2</span>
        <span>Item 3</span>
        <span>Item 4</span>
      </Flex>

      <Flex
        gap={6}
        vertical
        justify="center"
        align="center"
        style={{
          width: "500px",
          height: "500px",
          border: "1px solid black",
        }}
      >
        <span>Item 1</span>
        <span>Item 2</span>
        <span>Item 3</span>
        <span>Item 4</span>
      </Flex>
    </div>
  );
};

export default FlexPage;
