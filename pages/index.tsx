import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Link href='/dynamicrender'>
        <a>dynamic rendering</a>
      </Link>
    </div>
  )
}

export default Home
