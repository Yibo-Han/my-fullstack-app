import React from 'react'
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { FormOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

interface Props{
  id: string;
}
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    { key: 'detail', label: 'User Detail', icon:<UserOutlined/> },
    { key: 'form', label: 'Service Form', icon:<FormOutlined />},
  ];

const SideBar = (props:Props) => {
  const router = useRouter()
  const handleClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    router.push(`/users/${props.id}/${e.key}`)
  };
  return (
    <Menu items = {items} onClick = {handleClick}/>
  )
}

export default SideBar
