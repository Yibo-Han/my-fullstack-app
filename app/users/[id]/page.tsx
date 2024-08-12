'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface User{
  id: number;
  name: string;
  email: string;
}

const UserPage = () => {

  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    const getAllUsers = async() => {
      const res = await axios.get('/api/users')
      setUsers(res.data.userList)
      setLoading(false)
    }
    getAllUsers();
  }, [])

  return (
    <>
      <div>User List</div>
      {loading ? (<p>loading</p>) : (users.map( (user:User)=>{
        return <div key = {user.id}>{user.name}</div>;
      }))}
    </>
  )
}

export default UserPage