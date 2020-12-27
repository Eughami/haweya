import { Row, Input, Col, message, Spin } from 'antd';
import React, { Component, useEffect, useState } from 'react';
import NavBar from './Navbar';
import { HeartTwoTone } from '@ant-design/icons';
const { Search } = Input;
const Boolist = (props) => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState(undefined);

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

  useEffect(() => handleFetching(), []);

  return (
    <>
      <NavBar props={props} />
      <Row align="middle" justify="center" className="todo__list__title">
        ToDo List with Boobi
      </Row>
      <Row>
        <Col span={20} offset={2}>
          <Search
            placeholder="input search loading with enterButton"
            loading={loading}
            enterButton
            onSearch={handleSubmit}
            // enterButton={handleSubmit}
          />
        </Col>
        <Spin spinning={loading}>
          <Row className="todo__list__items__container">
            {todos !== undefined &&
              todos.map((e) => (
                <>
                  <Col span={2}>
                    <HeartTwoTone
                      twoToneColor="#eb2f96"
                      style={{ fontSize: 28 }}
                    />
                  </Col>
                  <Col span={21} offset={1}>
                    {e.content}
                  </Col>
                </>
              ))}
          </Row>
        </Spin>
      </Row>
    </>
  );
};

export default Boolist;
