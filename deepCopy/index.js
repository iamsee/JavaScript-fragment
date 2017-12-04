/*
*   @ 拷贝函数封装
*   @ 参数一：true为深拷贝,false为浅拷贝，默认是false
*   @ 参数二：被拷贝的对象        
*/

function copy() {

    var newObj,
        length = arguments.length,
        isDeep = length > 1 ? arguments[0] : false,
        obj = length > 1 ? arguments[1] : arguments[0];

    // 只拷贝对象
    if (typeof obj !== 'object') return;

    // 根据obj的类型判断是新建一个数组还是对象
    newObj = obj instanceof Array ? [] : {};
    
    // 遍历obj，并且判断是obj的属性才拷贝
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
            //判断是进行深拷贝还是浅拷贝
            if( isDeep && typeof obj[key] === 'object' ) {
                //通过递归进行深拷贝
                newObj[key] = copy( true, obj[key] )
            }
        }
    }

    return newObj;
}