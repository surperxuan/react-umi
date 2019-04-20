const express = require('express')
const axios = require('axios')
var cors = require('cors')

const app = express()
app.use(cors()) // 允许跨域调用
app.use(express.urlencoded({}))
app.use(express.json())

// app.get('/toutiao', async (req, res) => {
//   const result = await axios.get('http://is.snssdk.com/api/news/feed/v51/')
//   res.send(result.data)
// })

app.post('/my', async(req, res) => {
  const url = req.body.url
  const result = await axios.get(url)
  res.send(result.data)
  console.log(result.data)
})

app.listen(3000, () => {
  console.log(`服务器运行在3000端口`)
})