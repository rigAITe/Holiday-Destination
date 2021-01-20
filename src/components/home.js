import React from 'react'
import MainHeader from './mainHeader'
import Testing from './testing'

const Home = () => {

    return(
        <div>
            <MainHeader/>
            <div className="testing">
                <Testing/>
            </div>
        </div>
    )
}

export default Home