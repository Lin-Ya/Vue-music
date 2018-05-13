import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
    //url是否含有？，没有就给？有就给&
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

    //用promise包装一下，所以最后是返回一个promise
    return new Promise((resolve, reject) => {
        originJSONP(url, option, (err, data) => {
            //err为none的时候，表示发送成功
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}

//把data这个json对象，打平放到url上
function param(data) {
    let url = ''
    for (var k in data) {
        let value = data[k] !== undefined ? data[k] : ''
        //编码拼接
        url += `&${data[k]}=${encodeURIComponent(value)}`
    }
    return url ? url.substring(1) : ''
}