// 导出所有的接口请求函数
import base from './base'
import req from './req'

/**
 * 获取分类列表
 * @returns 
 */
export const getCategoryList = ()=>req.get(base.categoryUrl)

/**
 * 获取轮播图数据
 */
export const getBannerList = ()=>req.get(base.banerUrl)

/**
 * 获取新鲜好物
 */
export const getNew = ()=>req.get(base.findNew)

/**
 * 获取人气推荐
 */
export const getHot = ()=>req.get(base.findHot)

/**
 * 获取商品分类
 */
export const getProduct = ()=>req.get(base.findProduct)
