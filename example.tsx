import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import ButtonExample from './lib/button/button.demo';
import DialogExample from './lib/dialog/dialog.demo';
import LayoutExample from './lib/layout/layout.demo';
import {Layout, Header, Aside, Content, Footer} from './lib/layout/layout';
import './example.scss';
import IconDemo from './lib/icon/icon.demo';
import FormExample from './lib/form/form.demo';
import ScrollExample from './lib/scroll/scroll.demo';
import CitySelectExample from './lib/citySelect/citySelect.example'


const logo = require('./logo.png');

ReactDOM.render(
  <Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          <img src={logo} width="48" height="48" alt=""/>
          <span> Tutu-wheel-react </span>
        </div>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/button">按钮 - Button</NavLink>
            </li>
            <li>
              <NavLink to="/icon">图标 - Icon</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">对话框 - Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">布局 - Layout</NavLink>
            </li>
            <li>
              <NavLink to="/form">表单 - Form</NavLink>
            </li>
            <li>
              <NavLink to="/scroll">滚动条 - Scroll</NavLink>
            </li>
            <li>
              <NavLink to="/citySelect">城市选择- CitySelect</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/icon" component={IconDemo}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
          <Route path="/form" component={FormExample}/>
          <Route path="/scroll" component={ScrollExample}/>
          <Route path="/citySelect" component={CitySelectExample}/>
        </Content>
      </Layout>
      <Footer className="site-footer">
        &copy 涂涂
      </Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'));