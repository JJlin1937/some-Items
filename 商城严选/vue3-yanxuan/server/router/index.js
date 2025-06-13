const express  = require('express');
// 引入轮播图数据
const bannerDate = require('../data/banner.json')
// 引入人气推荐数据
const hotDate = require('../data/hot.json')
// 引入商品分类数据
const productDate = require('../data/product.json')

const router = express.Router()

// 测试接口
router.get('/test', (req, res) => {
  res.send('测试成功了。。。。')
})

/**
 * 首页轮播图
 */
router.get('/home/banner', (req, res) => {
  res.send(bannerDate)
})

/**
 * 首页-人气推荐
 */
router.get('/home/hot', (req, res) => {
  res.send(hotDate)
})

/**
 * 首页-商品分类
 */
router.get('/home/product', (req, res) => {
  res.send(productDate)
})



module.exports = router

// import express from 'express'
// // 引入轮播图数据
// import bannerDate from '../data/banner.json' assert { type: 'json' }
// const router = express.Router()

// router.get('/test', (req, res) => {
//   res.send('测试成功123')
// })

// router.get('/home/banner', (req, res) => {
//   res.send(bannerDate)
// })

// export default router