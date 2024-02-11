import React, { useEffect, useState } from 'react';
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

const LayoutPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: UIEvent) => {
        setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return <Layout hasSider>
    <Sider
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
    <Layout className="site-layout" style={{ width: 'auto' }}>

      <Content className="site-layout-background"
      // style={{ margin: '24px 16px' }}
      >
        <div className='wrapper-site-layout-content'
        >
          <Button
            type="primary"
            className='trigger'
            onClick={toggleCollapsed}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            data-test-id={ width > 500 ? 'sider-switch' : 'sider-switch-mobile'}
          >
          </Button>
          <Header>

          </Header>
          <div className="site-layout-content-page">
            <Outlet />
          </div>

        </div>

      </Content>
      <Footer>
        <Button
        type='text'
        style={{color: '#2F54EB'}}
        >
        Смотреть отзывы
        </Button>
</Footer>
    </Layout>

  </Layout>;

};

export { LayoutPage };