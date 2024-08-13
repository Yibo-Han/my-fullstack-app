"use client";
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Card, Divider, Typography } from 'antd'
import React from 'react'

interface Props {
  name: string;
  email: string;
  phone: string;
}

const UserCard = ({
  name,
  email,
  phone,
}: {
  name: string;
  email: string;
  phone: string;
}) => {
    const {Title} = Typography
  return (
    <Card title="Personal Information" style={{ width: 360 }}>
          <div className="flex justify-center items-center flex-col gap-4">
            <Avatar size={64} icon={<UserOutlined />} style={{ backgroundColor: '#87d068' }}/>
            <p>{name}</p>
          </div>
          <Divider/>
          <div>
            <Title level = {5}>Email:</Title>
            <div>{email}</div>
          </div>
          <Divider/>
          <div>
            <Title level = {5}>Phone Number:</Title>
            <div>{phone}</div>
          </div>
        </Card>
  )
}

export default UserCard
