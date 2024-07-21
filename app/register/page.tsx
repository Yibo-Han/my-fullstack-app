'use client'
import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input, Typography } from 'antd';
import Link from 'next/link';

const RegisterPage = () => {
  const { Title } = Typography;

  const handleFinish: FormProps['onFinish'] = (values) => {
    console.log('Success:', values);
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-lg p-6 bg-white shadow-md rounded">
          <div className="mb-4 text-center">
            <Title level={2}>Registration</Title>
          </div>
          <Form {...formItemLayout} name="register" onFinish={handleFinish}>
            <Form.Item
              label="User Name"
              name="username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email Address"
              name="email"
              rules={[{ required: true, type: 'email' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Bank Name"
              name="bankname"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Account Name"
              name="accountname"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Account Num"
              name="accountnumber"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="BSB Number"
              name="bsb"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
          <div className="text-center mt-4">
            <span>Already have an account? </span>
            <Link href="/login"><Button type="link">Click here to sign in!</Button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
