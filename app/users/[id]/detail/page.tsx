import React from 'react'
import { Card, Col, Divider, Row, Space, Typography } from 'antd';
import UserCard from './components/UserCard';
import BankInfoDes from './components/BankInfoDes';
import CoursesList from './components/CoursesList';
import axiosInstance from '@/app/lib/axiosInstance';


interface Props {
  params: { id: string };
  searchParams: { new: string };
}

const DetailPage = async ({ params, searchParams }: Props) => {
  const res = await axiosInstance.get(`/api/users/${params.id}`);
  const user = res.data.user;
  return (
    <>
    <Row>
      <Col span = {8}> 
        <UserCard name={user.username} email={user.email} phone={user.phone}/>
      </Col>
      <Col span = {16}> 
      <BankInfoDes
        accname={user.accname}
        accnum={user.accnum}
        bsb={user.bsb}
        bankname={user.bankname}
      />
      <Divider/>
      <CoursesList/>
      </Col> 
    </Row>
    </>
  )
}

export default DetailPage
