const express = require('express')
const request = require('request');
const app = express()
const port = 3000

/*
* 삼성전자
*/
//시가
app.get('/005930/now', async(req, res) => {
  let test;
  request.get({uri:"https://api.finance.naver.com/service/itemSummary.nhn?itemcode=005930"},async function (error, response, body){
      test = JSON.parse(body)
      console.log(test.now)
      res.send(`${test.now}`)
  })
})
//거래량
app.get('/005930/quant', async(req, res) => {
  let test;
  request.get({uri:"https://api.finance.naver.com/service/itemSummary.nhn?itemcode=005930"},async function (error, response, body){
      test = JSON.parse(body)
      console.log(test.quant)
      res.send(`${test.quant}`)
  })
})
//시가총액
app.get('/005930/sum', async(req, res) => {
  let test;
  request.get({uri:"https://api.finance.naver.com/service/itemSummary.nhn?itemcode=005930"},async function (error, response, body){
      test = JSON.parse(body)
      console.log(test.marketSum)
      res.send(`${test.marketSum}`)
  })
})

/*
* LG 화학
*/
//시가
app.get('/051910/now', async(req, res) => {
  let test;
  request.get({uri:"https://api.finance.naver.com/service/itemSummary.nhn?itemcode=051910"},async function (error, response, body){
      test = JSON.parse(body)
      console.log(test.now)
      res.send(`${test.now}`)
  })
})
//거래량
app.get('/051910/quant', async(req, res) => {
  let test;
  request.get({uri:"https://api.finance.naver.com/service/itemSummary.nhn?itemcode=051910"},async function (error, response, body){
      test = JSON.parse(body)
      console.log(test.quant)
      res.send(`${test.quant}`)
  })
})
//시가총액
app.get('/051910/sum', async(req, res) => {
  let test;
  request.get({uri:"https://api.finance.naver.com/service/itemSummary.nhn?itemcode=051910"},async function (error, response, body){
      test = JSON.parse(body)
      console.log(test.marketSum)
      res.send(`${test.marketSum}`)
  })
})

  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})