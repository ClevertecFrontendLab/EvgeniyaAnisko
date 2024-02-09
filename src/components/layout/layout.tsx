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
import { CleverIcon, ExitIcon, FitIcon } from '@components/icons';

const { Content, Footer, Sider } = Layout;

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

const LayoutPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return <Layout hasSider>
    <Sider
      breakpoint='lg'
      // collapsible
      collapsed={collapsed}
      // collapsedWidth={0}
      // onBreakpoint={ broken => {console.log(broken)}}
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
        {!collapsed && <CleverIcon />}
        <FitIcon />
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={items} />
      <Button
        type='text'
        block
        icon={<ExitIcon />}
      >{!collapsed && 'Выход'}</Button>
    </Sider>
    <Layout className="site-layout" style={{ width: 'auto' }}>
      <Content className="site-layout-slider-button">
        <Button
          type="primary"
          className='trigger'
          onClick={toggleCollapsed}
          style={{ marginBottom: 16, color: 'bisque', background: 'white' }}
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          size='small'>
        </Button>
      </Content>


      <Content className="site-layout-background" style={{ margin: '24px 16px' }}>
        <div
          style={{
            padding: 24,
            minWidth: 320,
            width: 100,
            background: 'red',
            borderRadius: '50',
          }}
        >

          <Outlet />
        </div>


      </Content>
      <Footer>Смотреть отзывы</Footer>
    </Layout>

  </Layout>;

};

export { LayoutPage };