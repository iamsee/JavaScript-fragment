/*
*   @ 封装节流函数
*   @ 节流的原理很简单：如果你持续触发事件，每隔一段时间，只执行一次事件。
*/

function throttle(func, wait) {
    var timeout;
    var previous = 0;

    return function() {
        //指定执行上下文
        context = this;
        args = arguments;
        if (!timeout) {
            timeout = setTimeout(function(){
                timeout = null;
                func.apply(context, args)
            }, wait)
        }

    }
}