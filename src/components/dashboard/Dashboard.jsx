import React from 'react'
import './dashboard.css'
import Cards from '../cards/Cards'
import Table from '../table/Table'


function Dashboard() {
  return (
    <div className='dashboard'>
    <h1>Dashboard</h1>
    <Cards/>
    <Table/>
    </div>
  )
}

export default Dashboard