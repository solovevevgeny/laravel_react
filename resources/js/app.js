import React from 'react';
import { render } from 'react-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

import Main from           './components/MainMenu';
import MainCategories from './components/MainCategories';





const { Header, Content, Footer } = Layout;

render(
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
	<Main />
    </Header>


    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
      	<MainCategories />
      </div>
    </Content>

  </Layout>,
  document.getElementById('root')
);