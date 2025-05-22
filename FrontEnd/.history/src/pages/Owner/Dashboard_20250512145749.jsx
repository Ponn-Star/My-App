import React, { useState } from 'react'

const Dashboard = () => {

    const [dashboardData, setDashboardData] = useState(dashboardDummyData)

  return (

    <div>
      <Title align='left' font='outfit' title='Dashboard' />
    </div>
  )
}

export default Dashboard
