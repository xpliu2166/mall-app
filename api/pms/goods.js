import request from '@/utils/request'

/**
 * 获取商品分页列表
 * 
 * @param {Object} params
 */
export function listSpuPages(params) {
	return request({
		url: '/mall-pms/app-api/v1/spu/pages',
		method: 'get',
		params: params
	})
}

/**
 * 获取秒杀商品列表
 * 
 * @param {Object} params
 */
export function listSeckillingSpu() {
	return request({
		url: '/mall-pms/app-api/v1/spu/seckilling_list',
		method: 'get',
	})
}

/**
 * 获取商品详情
 *
 * @param {Object} spuId
 */
export function getSpuDetail(spuId) {
	return request({
		url: '/mall-pms/app-api/v1/spu/' + spuId,
		method: 'get'
	})
}


/**
 * 获取商品库存
 */
export function getSkuStock(skuId) {
	return request({
		url: '/mall-pms/app-api/v1/sku/' + skuId + '/stock_num',
		method: 'get'
	})
}
