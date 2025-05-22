import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {

    const [dashboardData, setDashboardData] = useState(dashboardDummyData)

  return (

    <div>
      <Title align='left' font='outfit' title='Dashboard' />
    </div>
  )
}

export default Dashboard
