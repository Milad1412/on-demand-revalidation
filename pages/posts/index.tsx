import axios from 'axios'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { PostType } from '../../types/Post'

type PostsPageProps = {
  posts: PostType[]
}

const PostsPage: NextPage<PostsPageProps> = ({ posts }) => {
  return (
    <div className="flex flex-col">
      {posts.map((post) => {
        return <Link href={`/posts/${post.id}`}>{post.title}</Link>
      })}
    </div>
  )
}

export default PostsPage

export const getStaticProps: GetStaticProps = async () => {
  const { data: posts } = await axios.get('http://localhost:3001/posts/')
  return {
    props: {
      posts,
    },
  }
}
