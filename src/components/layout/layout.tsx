import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './layout.css';
import {
  CalendarOutlined,
  HeartFilled,
  TrophyFilled,
  IdcardOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import { CleverfitIcon, ExitIcon, FitIcon } from '@components/icons';
import { Header } from 'antd/lib/layout/layout';
import { BreadcrumbComponent } from '@components/breadcrumb';

const { Content, Footer, Sider } = Layout;

const labels = ['Календарь', 'Тренировки', 'Достижения', 'Профиль', 'Выход'];

const items: MenuProps['items'] = [
  CalendarOutlined,
  HeartFilled,
  TrophyFilled,
  IdcardOutlined,
  ExitIcon
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: labels[index],
  style: {
    color: '#061178',
    width: "100%"
  },
}));

const itemsMobile: MenuProps['items'] = labels.map((label, index) => ({
  key: String(index + 1),
  label: label,
  style: {
    width: "100%"
  },
}));

const LayoutPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return <Layout hasSider>
    <Sider
      className='sider-switch-desktop'
      breakpoint='xs'
      collapsed={collapsed}
      theme="light"
      style={{
        overflow: 'auto',
        height: '100vh',
      }}
    >
      <div className="logo">
        {collapsed ? <FitIcon /> : <CleverfitIcon />}
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={items}
      />
    </Sider>
    <Sider
      className='sider-switch-mobile'
      breakpoint='lg'
      collapsed={collapsed}
      collapsedWidth={0}
      theme="light"
      style={{
        overflow: 'auto',
        height: '100vh',
      }}
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo">
        <CleverfitIcon />
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={itemsMobile}
      />
    </Sider>
    <Layout className="site-layout" style={{ width: 'auto' }}>

      <Content className="site-layout-background"
      >
        <div className='wrapper-site-layout-content'
        >
          <Button
            type="primary"
            className='trigger trigger-desktop'
            onClick={toggleCollapsed}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            data-test-id='sider-switch'
          >
          </Button>
          <Button
            type="primary"
            className='trigger trigger-mobile'
            onClick={toggleCollapsed}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            data-test-id='sider-switch-mobile'
          >
          </Button>
          <Header>
            <BreadcrumbComponent />
          </Header>
          <div className="site-layout-content-page">
            <Outlet />
          </div>
        </div>

      </Content>
      <Footer>
        <Button
          type='text'
          style={{ color: '#2F54EB' }}
        >
          Смотреть отзывы
        </Button>
      </Footer>
    </Layout>

  </Layout>;

};

export { LayoutPage };