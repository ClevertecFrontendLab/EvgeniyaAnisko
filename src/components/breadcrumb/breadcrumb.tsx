import './breadcrumb.css';
import { Breadcrumb } from 'antd';

import { Link, useLocation } from 'react-router-dom';

const breadcrumbNameMap: Record<string, string> = {
  '/': 'Главная'
};

const BreadcrumbComponent = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(i => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Главная</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return (
    <div className="breadcrumb-component">
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </div>
  );
};


export { BreadcrumbComponent };