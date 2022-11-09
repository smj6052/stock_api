const express = require('express')
const request = require('request');
const app = express()
const port = 3000

// app.get('/', async(req, res) => {
//   let test;
  
//   request.get({uri:"https://api.finance.naver.com/service/itemSummary.nhn?itemcode=005930"},async function (error, response, body){
//       test = JSON.parse(body)
//       console.log(test.high)
//       let testObj = {
//         고점: test.high
//       }
//       res.send(testObj)
//   })
// })

app.get('/', async(req, res) => {
  let test;
  
  request.get({uri:"https://api.finance.naver.com/service/itemSummary.nhn?itemcode=005930"},async function (error, response, body){
      test = JSON.parse(body)
      console.log(test.high)
      res.send(`${test.high}`)
  })
})

  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})