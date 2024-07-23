'use client'
import React from 'react'
import { Card, Col, Divider, Row, Space, Typography } from 'antd';
import UserCard from './components/UserCard';
import BankInfoDes from './components/BankInfoDes';
import CoursesList from './components/CoursesList';

const DetailPage = () => {
  return (
    <>
    <Row>
      <Col span = {8}> 
        <UserCard/>
      </Col>
      <Col span = {16}> 
      <BankInfoDes/>
      <Divider/>
      <CoursesList/>
      </Col> 
    </Row>
    </>
  )
}

export default DetailPage
