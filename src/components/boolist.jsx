import { Row, Input, Col } from 'antd';
import React, { Component } from 'react';
import NavBar from './Navbar';
import { RightOutlined } from '@ant-design/icons';
const { Search } = Input;
const todoArray = [
  'we have some stuff to take care ofstuff to take care of',
  'I LOVE YOU',
  'Banging',
  'gotta play basktetball with ma boo',
];
class Boolist extends Component {
  render() {
    return (
      <>
        <NavBar props={this.props} />
        <Row align="middle" justify="center" className="todo__list__title">
          ToDo List with Boobi
        </Row>
        <Row>
          <Col span={20} offset={2}>
            <Search
              placeholder="input search loading with enterButton"
              loading
              enterButton
            />
          </Col>
          <Row className="todo__list__items__container">
            {todoArray.map((e) => (
              <>
                <Col span={1}>
                  <RightOutlined />
                </Col>
                <Col span={23}>{e}</Col>
              </>
            ))}
          </Row>
        </Row>
      </>
    );
  }
}

export default Boolist;
