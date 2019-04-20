import React from 'react';
import { Icon, Button, Row, Col } from 'antd';
import axios from 'axios';
import styles from '../index.css'
const ColProps = {
  xs: 6,
  sm: 6,
}

export default class Citys extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      city:''
    }
  }
  componentDidMount () {
    // 获取地理位置
    fetch("http://restapi.amap.com/v3/ip?key=高德地图key").then((res)=>{
      if(res.ok){
        res.text().then((data)=>{
          const detail=JSON.parse(data)
          console.log(this.state.city)
          this.setState({
            city:detail.city,
            adcode:detail.adcode
          })
        })
      }
    }).catch((res)=>{
      console.log(res.status);
    });
  }

  render () {
      console.log(this.state.city)
    return (
      <div className={styles.citys}>
        <div className={styles.content}>
          <div className={styles.nav}>
            <a href="/#/activitys"  className={styles.back}><Icon type="left" /></a>
            <p className={styles.title}>切换城市</p>
          </div>
          <div className={styles.city}>
            <p className={styles.title}>定位城市</p>
            <Row gutter={24}>
              <Col {...ColProps} xl={{ span: 4 }} md={{ span: 6 }}>
                <a href={"/#/activitys/"+this.state.adcode}><Button>{this.state.city}</Button></a>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
