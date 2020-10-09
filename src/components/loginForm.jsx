import React from 'react'
import { Form, Input, Button, /*Checkbox*/ } from 'antd'
import { login } from '../utils';
import { toast, ToastContainer } from 'react-toastify';


class LoginForm extends React.Component {
  constructor(){
    super()
    this.state={
      numberOfAttemps : 0 
    }
  }
  render(){
    console.log(this.props)
    const onFinish = (values) => {
      const {history} = this.props

      const {username,  password} = values
      const counter = this.state.numberOfAttemps

      if(username === 'hawou' && password === '06071910'){
        login(values);
        history.push('/')
      }else{
          if(counter < 5){
            toast.error('Nah Try again',{
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
            })
          }else if(counter < 10){
            toast.warn('Okay username is your nickname and password is the date of our birthday+Get Back Together')
          }else{
            toast.info('Well Here you go, username: hawou password:06071910',{autoClose:false})
          }
          this.setState({ numberOfAttemps : counter+1})
          return false
      }

    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  
    return (
        <div className='login__form__container'>

        <ToastContainer />
        <Form
        className='form__container'
          // {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <span style={{color: 'white'}}>Username</span>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <span style={{color: 'white'}}>Password</span>
          <Form.Item
          // style={{color: 'white'}}
            // label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
    
          {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}
    
          <Form.Item 
          // {...tailLayout}
          >
            <Button type="primary" htmlType="submit" block={true}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
};

export default LoginForm