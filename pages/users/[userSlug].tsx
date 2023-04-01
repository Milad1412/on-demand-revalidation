import axios from 'axios'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React, { useEffect } from 'react'
import { UserType } from '../../types/User'
import { revalidation } from '../../utils/revalidation'

type UserDetailsPageProps = {
  user: UserType
  userSlug: number
}

const UserDetailsPage: NextPage<UserDetailsPageProps> = ({
  user,
  userSlug,
}) => {
  useEffect(() => {
    revalidation('users', userSlug)
  }, [])
  return (
    <div className="text-3xl text-gray-700">
      <p>username: {user.name}</p>
    </div>
  )
}

export default UserDetailsPage

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: users } = await axios.get('http://localhost:3001/users/')
  const paths = users.map((user: UserType) => ({
    params: { userSlug: String(user.id) },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: user } = await axios.get(
    `http://localhost:3001/users/${params?.userSlug}`
  )

  return {
    props: {
      user,
      userSlug: params?.userSlug,
    },
  }
}
