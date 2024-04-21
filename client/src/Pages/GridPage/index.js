import React from "react";
import { Col, Divider, Row } from "antd";
import "./style.css";

const GridPage = () => {
  return (
    <div>
      {/*
            Cấu trúc lưới(Grid) gồm: Row(đại diện cho một hàng), Col(đại diện cho một cột) - 24 cột
            gutter: giá trị khoảng cách giữa các cột(Col)
            offset: thiết lập vị trí của dòng(Row) hoặc cột(Col) trong lưới(Grid)

            Divider: component dùng để tạo ra đường phân chia các phần tử trên 1 website
                  - orientation: vị trí của nội dung bên trong
                  - type: loại đường phân chia theo chiều dọc hoặc ngang
                  - dashed: loại đường phân chia theo nét đứt nét liền
      */}
      <Divider
        orientation="center"
        type="horizontal"
        dashed
        style={{ color: "red" }}
      >
        Horizontal
      </Divider>
      <div className="container-grid">
        <Row gutter={8} style={{ width: "100%" }}>
          {/* Thiết lập vị trí bắt đầu từ ô thứ 4 */}
          <Col span={4} offset={4}>
            <p>Item 1</p>
          </Col>

          <Col span={4}>
            <p>Item 2</p>
          </Col>
          <Col span={12}>
            <p>Item 3</p>
          </Col>
          <Col span={4}>
            <p>Item 4</p>
          </Col>
        </Row>
      </div>
      <div className="container-grid">
        <Row gutter={[16, 16]} style={{ width: "100%" }}>
          <Col span={6}>
            <p>Item 1</p>
          </Col>
          <Col span={6}>
            <p>Item 2</p>
          </Col>
          <Col span={6}>
            <p>Item 3</p>
          </Col>
          <Col span={6}>
            <p>Item 4</p>
          </Col>

          <Col span={6}>
            <p>Item 5</p>
          </Col>
          <Col span={6}>
            <p>Item 6</p>
          </Col>
          <Col span={6}>
            <p>Item 7</p>
          </Col>
          <Col span={6}>
            <p>Item 8</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default GridPage;
