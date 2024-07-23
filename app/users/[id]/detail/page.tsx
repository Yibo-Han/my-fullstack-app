'use client'
import React from 'react'
import { Card, Space } from 'antd';
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
import { Avatar, List } from 'antd';
const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Account Number',
    children: '12345678',
  },
  {
    key: '2',
    label: 'BSB',
    children: '123123',
  },
  {
    key: '3',
    label: 'Account Name',
    children: 'easy',
  },
  {
    key: '4',
    label: 'Bank Name',
    children: 'ANZ',
  },
];

const DetailPage = () => {
  return (
    <>
      <Space direction="vertical" size={16}>
        <Card title="Personal Information" extra={<a href="#">More</a>} style={{ width: 300 }}>
          <p>Personal Photo</p>
          <p>Email: 213132@example.com</p>
          <p>Phone Number:0402748271</p>
        </Card>
        <Card title="Course List" extra={<a href="#">More</a>} style={{ width: 300 }}>
          <p>[30223]Java</p>
          <p>[30225]Database</p>
          <p>[30229]Python</p>
        </Card>
      </Space>
      <Descriptions title="Bank Information" bordered items={items} />
    </>
  )
}

export default DetailPage
