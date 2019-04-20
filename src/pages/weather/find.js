import React, { Component } from 'react';
import axios from "axios"
import { Button } from "antd"

export default class Find extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            //定义数据类型为''或[]要注意后续的方法
            //map是数组遍历方法
            totol:101180101
        }
        }
    componentDidMount(){
        axios({
            method:'post',
            url:'http://localhost:3000/my',
            data:{
                url:"http://aider.meizu.com/app/weather/listWeather?cityIds="+this.state.totol
            }
    })
        .then((response)=>{
            this.setState({
                list:response.data.value,
            })
        })
    }
    tosearch(){
        const lost=document.getElementById('tnt').value
        axios({
            method:'get',
            url:'/star.json'//获取相应的城市信息
        }).then((response)=>{
            console.log(lost)
            console.log(response.data.cities)
            response.data.cities.map((list)=>{
                if(lost===list.city){
                    this.setState({
                     totol:list.cityid   
                    })}
                    // else{
                    //     this.setState({
                    //     totol:'000000000'
                    //     })}
                    axios({
                        method:'post',
                        url:'http://localhost:3000/my',
                        data:{
                            url:"http://aider.meizu.com/app/weather/listWeather?cityIds="+this.state.totol
                        }
                })
                    .then((response)=>{
                        this.setState({
                            list:response.data.value,
                        })
                    })
                }
            )
            console.log(this.state.totol)
        })
    }
  
    render(){
       if(this.state.totol!='000000000'){
        return(
            this.state.list.map((list,index)=>{
            return (
                <div key={index}>
                <div className="search">
                <input type="text" className="txt" id="tnt"/>
                <Button onClick={this.tosearch.bind(this)} type="primary" className="go-search" size="large" icon="search"/>
                </div>
                <ul>
                  <li>所在城市：{list.city}</li>
                  <li><img alt={list.realtime } src={'/'+list.realtime.img+'.png'}/></li>
                  <li>PM2.5含量：{list.pm25.pm25}</li>
                  <li>风向：{list.realtime.wD}{list.realtime.wS}</li>
                   <p className="F-back">之后七日天气</p>
                   <div className="F-weather">
                  {list.weathers.map((lost,index)=>
                  <dl key={index} className="ddl"><dt><img alt={lost.img} src={'/'+lost.img+'.png'}/></dt>
                  <dd>{lost.week}:{lost.weather}</dd></dl>
                  )}   
                  </div>
                  <li>{list.indexes.map((totol)=>
                      <span key={totol.content}>
                        {totol.content}
                      </span>
                  )}</li>
                </ul>
                </div>
    )
}
         ))}else{
             return(
                 <div><img src="/yay.jpg"/>没找到这地</div>
             )
         }
        }}
