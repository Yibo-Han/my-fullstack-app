import { Descriptions, DescriptionsProps } from 'antd';
import React from 'react'

const BankInfoDes = () => {
    const items: DescriptionsProps['items'] = [
        {
          key: '1',
          label: 'Account Number',
          children: '12345678',
        },
        {
          key: '2',
          label: 'BSB',
          children: '123-123',
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
  return (
    <Descriptions title="Bank Information" bordered items={items} />
  )
}

export default BankInfoDes
