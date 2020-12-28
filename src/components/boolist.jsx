import { Row, Tabs, Input, Button, Col, message, Spin } from 'antd';
import React, { Component, useEffect, useState } from 'react';
import NavBar from './Navbar';
import { HeartTwoTone } from '@ant-design/icons';

const { Search } = Input;
const { TabPane } = Tabs;

const Boolist = (props) => {
  const [loading, setLoading] = useState(false);
  const [smsLoading, setSmsLoading] = useState(false);
  const [todos, setTodos] = useState(undefined);
  const [inputVal, setInputVal] = useState('');
  const [sms, setSms] = useState('');

  const handleSubmit = (todoText) => {
    setLoading(true);
    console.log('Saving ', todoText);
    let urlencoded = new URLSearchParams();
    urlencoded.append('content', todoText);

    fetch('https://us-central1-haweya-ce93b.cloudfunctions.net/saveTodo', {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
      },
      body: urlencoded,
    })
      .then((res) => {
        if (res.status === 201) {
          message.success(`Saved Successfully ❤`);
          setInputVal('');
          handleFetching();
        } else {
          message.error(`Sorry could not save that😢`);
          setLoading(false);
        }
      })
      .catch(() => setLoading(false));
  };

  const handleFetching = () => {
    setLoading(true);

    fetch('https://us-central1-haweya-ce93b.cloudfunctions.net/getToDos')
      .then((res) => res.json())
      .then((res) => {
        console.log('api', res);
        let todoArray = [];
        // manipulation
        Object.keys(res).forEach((key) => {
          todoArray.push(res[key]);
        });
        const sortedArray = todoArray.sort((a, b) => b.createdAt - a.createdAt);
        setTodos(sortedArray);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };

  const smsSubmit = () => {
    setSmsLoading(true);
    console.log('Saving ', sms);
    let urlencoded = new URLSearchParams();
    urlencoded.append('sms', sms);

    fetch('https://us-central1-haweya-ce93b.cloudfunctions.net/sendSMS', {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
      },
      body: urlencoded,
    })
      .then((res) => {
        if (res.status === 200) {
          setSmsLoading(false);
          message.success('Thanks boo❤');
        } else {
          setSmsLoading(false);
          message.error('Could not send your sms boobi 😢');
        }
      })
      .catch(() => {
        setSmsLoading(false);

        message.error('Could not send your sms boobi 😢');
      });

    // clear
    setSms('');
  };

  useEffect(() => handleFetching(), []);

  function callback(key) {
    console.log(key);
  }

  return (
    <>
      <Tabs
        defaultActiveKey="1"
        onChange={callback}
        centered
        tabPosition="top"
        animated
        defaultActiveKey="1"
        size="large"
      >
        <TabPane tab="ToDo List" key="1">
          <Row align="middle" justify="center" className="todo__list__title">
            <Col span={23}>ToDo List with Boobi</Col>
          </Row>
          <Row align="middle" justify="center">
            <Col span={23}>
              <Search
                placeholder="Tell me what you want to do with me?"
                loading={loading}
                enterButton
                onSearch={handleSubmit}
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                // enterButton={handleSubmit}
              />
            </Col>
            <Spin spinning={loading}>
              <Row
                className="todo__list__items__container"
                align="middle"
                justify="center"
              >
                {todos &&
                  todos.map((e) => (
                    <>
                      <Col span={2}>
                        <HeartTwoTone
                          twoToneColor="#eb2f96"
                          style={{ fontSize: 28 }}
                        />
                      </Col>
                      <Col span={22}>{e.content}</Col>
                    </>
                  ))}
              </Row>
            </Spin>
          </Row>
        </TabPane>
        <TabPane tab="Cute Mamou ❤" key="2">
          <Spin spinning={smsLoading}>
            <Row align="middle" justify="center" className="todo__list__title">
              To Mamou ❤
            </Row>
            <Row justify="center">
              <Col span={20}>
                <Input.TextArea
                  placeholder="Brighten up my day babe"
                  value={sms}
                  onChange={(e) => setSms(e.target.value)}
                />
              </Col>
              <Col span={20}>
                <Button
                  style={{ marginTop: 10 }}
                  type="primary"
                  loading={smsLoading}
                  onClick={smsSubmit}
                >
                  Send
                </Button>
              </Col>
            </Row>
          </Spin>
        </TabPane>
      </Tabs>
      <NavBar props={props} />
    </>
  );
};

export default Boolist;
