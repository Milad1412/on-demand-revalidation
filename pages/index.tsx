import type { NextPage } from 'next'
import Table from '../components/Table'
import { useState } from 'react'

const Home: NextPage = () => {
  return (
    <div>
      <h1>main page</h1>
      <Table
        tableFor="busPass"
        busPass={[{ busPassUnique: 'dsfjl', name: 'dsf' }]}
        title="title"
        // busPass={[
        //   {
        //     busPassUnique: 'sdkjlf',
        //     name: 'sdklfaj',
        //     // busReceiptUnique: 'sdklaf',
        //     // flightPassUnique: 'klsdfj',
        //     // flightReceiptUnique: 'sjkdfl',
        //     // price: 'sjdklfa',
        //   },
        // ]}
        // busReceipt={[
        //   {
        //     price: 'sjd',
        //     // busPassUnique: 'sdf',
        //     busReceiptUnique: 'jsdf',
        //     // flightPassUnique: 'fsd',
        //     // flightReceiptUnique: 'sdf',
        //     // name: 'dsf',
        //   },
        // ]}
        // flightPass={[{name: 'sdjklf', flightPassUnique: 'sjdkl'}]}
        // flightReceipt={[{flightReceiptUnique: ';saf', price: 'sdf'}]}
      />
    </div>
  )
}

export default Home
