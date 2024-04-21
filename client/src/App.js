import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { HomePage, ButtonPage, TablePage, FlexPage, GridPage } from "./Pages";
import {
  HomeOutlined,
  BorderInnerOutlined,
  TableOutlined,
  PicCenterOutlined,
  WindowsOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
const items = [
  {
    label: "Home",
    key: "",
    icon: <HomeOutlined />,
  },
  {
    label: "Button",
    key: "button",
    icon: <BorderInnerOutlined />,
  },
  {
    label: "Table",
    key: "table",
    icon: <TableOutlined />,
  },
  {
    label: "Flex",
    key: "flex",
    icon: <PicCenterOutlined />,
  },
  {
    label: "Grid",
    key: "grid",
    icon: <WindowsOutlined />,
  },
];
const App = () => {
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname.replace("/", ""));
  const navigate = useNavigate();
  const onClick = (e) => {
    setCurrent(e.key);
    navigate(`/${e.key}`);
  };
  return (
    <div>
      <h1>Học antd design</h1>
      <div>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/flex" element={<FlexPage />} />
          <Route path="grid" element={<GridPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
