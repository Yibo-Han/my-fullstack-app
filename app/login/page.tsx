'use client'
import React from 'react'
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Typography} from 'antd';
import Link from 'next/link';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const LoginPage = () => {
  const { Title } = Typography;
  const handleFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };
  
  return (
    <>
      <div className = "mt-20 flex justify-center items-center">
        <Title>Teaching Service System</Title>
      </div>
      
      <div className = "flex justify-center mt-24">
        <Form
          name="login"
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={handleFinish}
        >
          <Form.Item<FieldType>
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix = {<UserOutlined />} placeholder="Username"/>
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix = {<LockOutlined />} placeholder="Password"/>
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

      
      <div className = "flex justify-center items-center">
        Do not have an account?
        <Link href = "/register"><Button type = "link">Click here to register</Button></Link>
      </div>       
    

    </>
  )
}

export default LoginPage
