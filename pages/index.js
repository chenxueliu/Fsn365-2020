import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Nav from '../src/conponents/Nav'
import Footer from '../src/conponents/Footer'
import Search from '../src/conponents/Homesearch'
import HomeTable from '../src/conponents/Hometable'
import HomeTable2 from '../src/conponents/Hometable2'
export default class home extends Component {
    render() {
        return (
         <div>
            <Nav></Nav>
           <Search/>
           <HomeTable/>
           <HomeTable2/>
           <Footer/>
         </div>
        )
    }
}
<style>
    .nav{
      
    }
</style>
