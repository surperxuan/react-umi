import React, { Component } from 'react';
import axios from "axios"
import { Button } from "antd"
import { Route, NavLink } from "react-router-dom";
import Tolist from "./tolist"

export default class Movie extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            folist:[],
            //定义数据类型为''或[]要注意后续的方法
            //map是数组遍历方法
            totol:'489'
        }
        }
    componentDidMount(){
        axios({
            method:'post',
            url:'http://localhost:3000/my',
            data:{
                url:"https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId="+this.state.totol
            }
    })
        .then((response)=>{
            console.log(response)
            this.setState({
                list:response.data
            })
        }).catch((error)=>{
            console.log(error)
        })
        axios({
            method:'post',
            url:'http://localhost:3000/my',
            data:{
                url:"https://api-m.mtime.cn/Movie/MovieComingNew.api?locationId="+this.state.totol
            }
    })
        .then((response)=>{
            console.log(response.data)
            this.setState({
                folist:response.data.moviecomings
            })
        }).catch((error)=>{
            console.log(error)
        })
    }
    tosearch(){
        const lost=document.getElementById('tnt').value
        axios({
            method:'get',
            url:'/movie.json'//获取相应的城市信息
        }).then((response)=>{
            var str=response.data.p
            console.log(response.data.p)
            str.map((str,index)=>{
              if(lost===str.n){
                    this.setState({
                     totol:str.id   
                    })
                    axios({
                        method:'post',
                        url:'http://localhost:3000/my',
                        data:{
                            url:"https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId="+this.state.totol
                        }
                })
                    .then((response)=>{
                        console.log(response.data)
                        this.setState({
                            list:response.data
                        })
                       
                    })
                }
                   
                })
             })
            console.log(this.state.totol)
    }
  
    render(){
            var str=this.state.list.movies
            var sur=this.state.folist
            if(str){
            return(
                <div>
                    <div className="search">
                    <input type="text" className="txt" id="tnt"/>
                    <Button onClick={this.tosearch.bind(this)} type="primary" className="go-search" size="large" icon="search"/>
                    </div>
                    <li>正在热映</li>
                {str.map((lost,index)=>{
                    return(            
                        <ul key={index}>
                            <li className='movie'><img src={lost.img}/></li>
                            <li>电影：{lost.titleCn}</li>
                            <li>类型：{lost.type}</li>
                            <li>主演：{lost.actorName1}/{lost.actorName2}</li>
                            <li>导演：{lost.directorName}</li>
                            <li>上映时间：{lost.rYear}-{lost.rMonth}-{lost.rDay}</li>
                            <li>豆瓣评分：{lost.ratingFinal}</li>
                        </ul>
                    )
                })}
                 <li style={{background:'red'}}>即将上映</li>
                {sur.map((lost,index)=>{
                    return(     
                        <NavLink to={{path:'/tolist/:id',params:{id:lost.id}}}>       
                        <ul key={index}>
                            <li className='movie'>
                            <img src={lost.image}/></li>
                            <li>电影：{lost.title}</li>
                            <li>类型：{lost.type}</li>
                            <li>主演：{lost.actor1}/{lost.actor2}</li>
                            <li>导演：{lost.director}</li>
                            <li>上映时间：{lost.releaseDate}</li>
                        </ul>
                        </NavLink>
                    )
                })}
                <Route component={Tolist} path="/tolist/:id"/>
                 </div>
                )
            }else{
                return(
                    <div>
                        <img src='/yay.jpg'/>
                        正在加载中
                    </div>
                )
            }
            
        }}
