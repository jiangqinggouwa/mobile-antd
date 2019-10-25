import * as React from 'react'
import { SearchBar } from 'antd-mobile'
import '../../assets/styles/searchheader.scss'
export default class SearchHeader extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="center">
                <SearchBar
                focused
                showCancelButton={false} 
                placeholder="search">
                </SearchBar>
            </div>   
        )
    }
}