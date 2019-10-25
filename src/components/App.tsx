import React , { Component } from 'react'
import Header from './Header/Header'
import SearchHeader from './Header/searchHeader'
import Banner from './main/Banner'
import Bdr from './main/Bdr'
export default class App extends Component{
    render(){
        return(
            <div>
                <SearchHeader/>
                <Banner/>
                <Bdr/>
                <Header/>
            </div>
        )
    }
}