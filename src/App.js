import React, { Component } from 'react';
import { Form, Select, InputNumber, DatePicker,Pagination , Switch, Slider,Elliptic, Button, message, Row, Col } from 'antd';
import './App.css';

const { Option } = Select;
const article = <p>There were injuries alleged in three <a href="#cover">cases in 2015</a>, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.</p>;
const App = () => (
        <div >
        <Button size="small">hello world</Button>
        <Pagination total={300} />
        <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
        </div>
  );

export default App;
