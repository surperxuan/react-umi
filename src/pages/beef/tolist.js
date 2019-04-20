import React, { Component } from 'react';
import axios from "axios"
export default class Tolist extends Component{
    constructor(props){
        super(props);
        this.state={
            id:''
            //定义数据类型为''或[]要注意后续的方法
            //map是数组遍历方法
            
        }
        }
        render(){
            return(
                <div>{this.props.match.match.params.id}</div>
            )
        }
}