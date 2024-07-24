'use client'
import { Button, Col, Form, Input, InputNumber, Row, Select, Table } from 'antd'
import React, { useState } from 'react'

const FormPage = () => {
  const {TextArea} = Input;
  const columns = [
      {
        title: 'Unit Code',
        dataIndex: 'code',
        key: 'code',
      },
      {
        title: 'Working Hours',
        dataIndex: 'hour',
        key: 'hour',
      },
      {
        title: 'Hourly Rate',
        dataIndex: 'rate',
        key: 'rate',
      },
      {
        title: 'Amount Students',
        dataIndex: 'amountStudents',
        key: 'amountStudents',
      },
      {
        title: 'Comments',
        dataIndex: 'comments',
        key: 'comments',
      },
  ];
  
  const initialData:{
    key: string,
    code: string,
    hour: number,
    rate: number,
    amountStudents: number,
    comments?: string
  }[] = [{
    key: '1',
    code: 'FIT 9131',
    hour: 2,
    rate: 100,
    amountStudents: 11,
    comments: ""
  }]

  interface formValue{
    code: string,
    hour: number,
    rate: number,
    amountStudents: number,
    comments?: string|undefined
  }
  const [data, setData] = useState(initialData)
  const handleFinish = (values:formValue) => {
    //通过拿到的值来生成新的data
    const newData = {
      key: (data.length+1).toString(),
      code: values.code,
      hour: values.hour,
      rate: values.rate,
      amountStudents: values.amountStudents,
      comments: values.comments
    }
    //将新生成的对象加入到列表当中
    setData([...data, newData]);
  };
  return (
    <>
      <Row>
        <Col span = {8}> 
          <Form
            name="fillForm"
            onFinish={handleFinish}
            autoComplete="off"
          >
            <Form.Item
              label = "Unit Code"
              name="code"
              rules={[{ required: true, message: 'Please input the unit code' }]}
            >
              <Select
                style={{ width: 120 }}
                options={[
                  { value: 'fit9131', label: 'FIT 9131' },
                  { value: 'fit9132', label: 'FIT 9132' },
                  { value: 'fit9137', label: 'FIT 9137' },
                ]}
              />
              
            </Form.Item>

            <Form.Item
              label = "Working Hours"
              name="hour"
              rules={[{ required: true, message: 'Please input your working hours' }]}
            >
              <InputNumber defaultValue={0}/>
            </Form.Item>

            <Form.Item
              label = "Hourly Rate"
              name="rate"
              rules={[{ required: true, message: 'Please input the hourly rate' }]}
            >
              <InputNumber defaultValue={0} prefix = "AU$"/>
            </Form.Item>

            <Form.Item
              label = "Amount Students"
              name="amountStudents"
              rules={[{ required: true, message: 'Please input the number of students' }]}
            >
              <InputNumber defaultValue={0}/>
            </Form.Item>

            <Form.Item
              label = "Comments"
              name="comments"
            >
              <TextArea rows = {4} placeholder='any comments?'/>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8}}>
              <Button type="primary" htmlType="submit" >
                Add
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span = {16}>
          <Table dataSource={data} columns={columns} />
        </Col> 
      </Row>
    </>
  )
}

export default FormPage
