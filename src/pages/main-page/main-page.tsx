import React from 'react';

import './main-page.css';
import { Header } from 'antd/lib/layout/layout';

export const MainPage: React.FC = () => {

    return (
        <>
            <Header className="site-layout-background" style={{ padding: 0 }}>
                <h1>Главная</h1>
            </Header>
        </>
    );
};
