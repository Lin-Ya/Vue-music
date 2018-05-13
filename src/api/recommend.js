import jsonp from 'common/js/jsonp'
//引入一般不变的confing设置
import { commonParms, options} from './config'
export function getRecommend() {
    const url = 'http://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
    const data = Object.assign({}, commonParams, {
        platform: 'h5',
        uin: 0,
        needNewCode: 1
    })
    //使用jsonp请求。
    return jsonp(url, data, options)
}