import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import "./style.css";
import Link from "antd/es/typography/Link";
import dataUser from "./data.json";

const TablePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const columns = [
    {
      title: "STT",
      key: "index",
      render: (text, record, index) => (currentPage - 1) * pageSize + index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <Link>{text}</Link>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <Link>{text}</Link>,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone",
      key: "phone",
      dataIndex: "phone",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <Link>Edit</Link>
          <Link>Delete</Link>
        </Space>
      ),
    },
  ];

  return (
    <div className="container-table">
      {/* 
            columns: thead, dataSource: tbody
            style: thêm css cho component
      */}
      <Table
        columns={columns}
        dataSource={dataUser?.map((user) => ({ ...user, key: user.id }))}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: dataUser.length,
          onChange: handlePageChange,
        }}
      />
    </div>
  );
};
export default TablePage;
