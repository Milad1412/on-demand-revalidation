import axios from 'axios'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import { PostType } from '../../types/Post'

type PostDetailsPageProps = {
  post: PostType
}

const PostDetailsPage: NextPage<PostDetailsPageProps> = ({post}) => {
  return (
    <div className='text-3xl text-gray-700'>
      <p>title: {post.title}</p>
      <p>author: {post.author}</p>
    </div>
  )
}

export default PostDetailsPage

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: posts } = await axios.get('http://localhost:3001/posts/')
  const paths = posts.map((post: PostType) => ({params: {postSlug: String(post.id)}}))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { data: post } = await axios.get(`http://localhost:3001/posts/${params?.postSlug}`)
  return {
    props: {
      post,
    },
  }
}