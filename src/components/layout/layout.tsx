import React from 'react';
import 'antd/dist/antd.css';
import './layout.css';
import {
  CalendarOutlined,
  HeartFilled,
  TrophyFilled,
  IdcardOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import { CleverIcon, FitIcon } from '@components/logo';

const { Header, Content, Footer, Sider } = Layout;

const labels = ['Календарь', 'Тренировки', 'Достижения', 'Профиль'];

const items: MenuProps['items'] = [
  CalendarOutlined,
  HeartFilled,
  TrophyFilled,
  IdcardOutlined
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: labels[index],
  style: {
    color: '#061178'
  },
}));

const LayoutPage: React.FC = () => (
  <Layout hasSider>
    <Sider
      theme="light"
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="logo">
        <CleverIcon />
        <FitIcon />
      </div>
      <Menu theme="light" mode="inline" defaultSelectedKeys={['4']} items={items} />
    </Sider>
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background">
          <Outlet />
        </div>
      </Content>
      <Footer >Смотреть отзывы</Footer>
    </Layout>
  </Layout>
);

export { LayoutPage };