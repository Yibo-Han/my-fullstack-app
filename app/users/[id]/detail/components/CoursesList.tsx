import { List, Typography } from 'antd';
import React from 'react'

const CoursesList = () => {
    const {Title, Text} = Typography;
    const data = [
        {code:'FIT 9131', name:' Java'},
        {code:'FIT 9132', name:' Database'},
        {code:'FIT 9137', name:' Python'},
    ]
  return (
    <List
        header={<Title level = {5}>Courses List</Title>}
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>
          <Text mark>[{item.code}]</Text>
          {item.name}
        </List.Item>}
       />
  )
}

export default CoursesList
