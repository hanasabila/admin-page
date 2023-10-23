import React from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import { Box, Flex } from '@chakra-ui/react'
import Navbar from '../../components/navbar/Navbar'
import Datatable from "../../components/datatable/Datatable";

export default function Home() {
  return (
    <div className="home">
      <Flex>
        <Sidebar />
        <div className="homeContainer">
          <Navbar/>
          dashboard
        </div>
      </Flex>
    </div>
  )
}
