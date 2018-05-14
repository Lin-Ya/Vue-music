export function addClass(el, className) {
    //添加类名之前应该判断是否有这个类名
    if (hasClass(el, className)) {
        return
    }
    let newClass = el.className.split('')   //把自带的类名打散，用空格分隔
    newClass.push(className)
    el.className = newClass.join('')    //把这个数组合拼起来，用空格分隔
}

export function hasClass(el, className) {
    //使用正则匹配，判断是否有这个类名，直接开始或者前面有空格+className+ 空格或者结束
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}