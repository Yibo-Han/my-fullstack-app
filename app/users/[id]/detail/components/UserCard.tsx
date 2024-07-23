import { UserOutlined } from '@ant-design/icons'
import { Avatar, Card, Divider, Typography } from 'antd'
import React from 'react'

const UserCard = () => {
    const {Title} = Typography
  return (
    <Card title="Personal Information" style={{ width: 360 }}>
          <div className="flex justify-center items-center flex-col gap-4">
            <Avatar size={64} icon={<UserOutlined />} style={{ backgroundColor: '#87d068' }}/>
            <p>User Name</p>
          </div>
          <Divider/>
          <div>
            <Title level = {5}>Email:</Title>
            <div>235357335@gmail.com</div>
          </div>
          <Divider/>
          <div>
            <Title level = {5}>Phone Number:</Title>
            <div>0423424188</div>
          </div>
        </Card>
  )
}

export default UserCard
