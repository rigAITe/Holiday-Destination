import React from 'react'
import MainHeader from './mainHeader'
import Header from '../header/header'


const Home = () => {

    return(
        <div>
            <div className="main-header">
                <div>
                    <Header/>
                </div>
                <MainHeader/>
            </div>
        </div>
    )
}

export default Home