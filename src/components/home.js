import React from 'react'
import MainHeader from './mainHeader'
import Header from '../header/header'
import WhoWeAre from '../components/whoarewe'


const Home = () => {

    return(
        <div>
            <div className="main-header">
                <div>
                    <Header/>
                </div>
                <MainHeader/>
            </div>
            <WhoWeAre/>

        </div>
    )
}

export default Home
