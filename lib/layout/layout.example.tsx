import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';

export default function () {
  return (
    <div>
      <div>
        <h1>第一个例子</h1>
        <Layout style={{height: 500}} className="hi">
          <Header>header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第二个例子</h1>
        <Layout style={{height: 500}} className="hi">
          <Header>header</Header>
          <Layout>
            <Aside>aside</Aside>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第三个例子</h1>
        <Layout style={{height: 500}} className="hi">
          <Header>header</Header>
          <Layout>
            <Content>Content</Content>
            <Aside>aside</Aside>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第四个例子</h1>
        <Layout style={{height: 500}} className="hi">
          <Aside>aside</Aside>
          <Layout>
            <Header>header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
};


