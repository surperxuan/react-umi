import { route,router } from "react-router-dom";
import { goBack } from "react-router-redux";
import React, { Component } from 'react';
import { Icon } from "antd"
import Movie from "./movie"
export default class beef extends Component{
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
            ><Icon type="arrow-left" className="Hstart"/>电影</li>
            </hgroup>
            <section>
                
              <Movie/>
            </section>
        </div>
    )
    }
    
}