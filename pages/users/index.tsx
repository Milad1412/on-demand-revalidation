import axios from 'axios'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { UserType } from '../../types/User'
import { revalidation } from '../../utils/revalidation'

type UsersPageProps = {
  users: UserType[]
}

const UsersPage: NextPage<UsersPageProps> = ({ users }) => {
  useEffect(() => {
    revalidation('users')
  }, [])
  return (
    <div className="flex flex-col">
      {users.map((user) => {
        return (
          <Link key={user.id} href={`/users/${user.id}`}>
            {user.name}
          </Link>
        )
      })}
    </div>
  )
}

export default UsersPage

export const getStaticProps: GetStaticProps = async () => {
  const { data: users } = await axios.get('http://localhost:3001/users/')
  return {
    props: {
      users,
    },
  }
}
