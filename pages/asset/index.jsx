
import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Nav from '../../src/conponents/Nav'
import Assettable from '../../src/conponents/Assetstable'
import Footer from '../../src/conponents/Footer'
import '../../src/conponents/Footer/footer.less'
export default class assets extends Component {
    render() {
        return (
            <div>
               <div>
                   <Nav></Nav>
                   <Assettable></Assettable>
                   <Footer></Footer>
               {/* <Link href="/"><a>点击跳转首页</a></Link> */}
               </div>
            </div>
        )
    }
}
