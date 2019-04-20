import { route,router } from "react-router-dom";
import React, { Component } from 'react';
import { Icon } from "antd"
import Find from "./find"
export default class weather extends Component{
    constructor(props){
        super(props);
        this.state={
            user:''
        }
    }
    toBack(){
        this.props.history.goBack()
    }
    url(id){
        this.setState({
            user:id
        })
   }
    render(){
        return(
         <div>
             <hgroup className="hgrp">
            <li onClick={
               this.toBack.bind(this)}
            ><Icon type="arrow-left" className="Hstart"/>天气</li>
            </hgroup>
            <section>
                <Find/>
            </section>
        </div>
    )
    }
    
}

