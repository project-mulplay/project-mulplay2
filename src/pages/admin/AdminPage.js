import React from "react";
import { Tabs, ConfigProvider } from "antd";
//import styles from "./AdminPage.module.css"; // CSS 모듈 import

import Prodadmin from "./Prodadmin";
//import "./AdminPage.css";
import Useradmin from "./Useradmin";

//const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "프로젝트 관리",
    children: <Prodadmin />,
  },
  {
    key: "2",
    label: "사용자 관리",
    children: <Useradmin />,
  },
];

const AdminPage = () => (
  <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: "#EE833E",

        // Alias Token
        colorBgContainer: "#fff",
      },
    }}
  >
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  </ConfigProvider>
);
export default AdminPage;
