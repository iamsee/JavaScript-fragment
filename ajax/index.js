/*
*   @ 一、手写ajax方法
*   @ 二、用promise的方式实现ajax
*/
/*
*   一、手写ajax方法
*/

//封装ajax方法
function ajax( type, url, data, callback ) {

    var xmlHttp = new XMLHttpRequest(),
        context = this,
        urls = data ? url+'?' : url;
    //监听变化
    xmlHttp.onreadystatechange = function() {
        //请求成功
        if( xmlHttp.readyState === 4 && xmlHttp.status === 200 ) {
            callback.call( context, JSON.parse( xmlHttp.responseText ) )
        }
    }
    //如果是get方式请求并且需要穿参
    if( type === 'GET' && data ) {
        for( key in data ) {
            urls += ( key + '=' + data[ key ] );
        }
    }

    xmlHttp.open( type, urls, true );
    xmlHttp.send( data )
}

//测试
ajax( 'GET', './data.json', null, function(res) {
    console.log(res)
} )



/*
*   二、用promise的方式实现ajax
*/

//封装ajax方法
function ajax( type, url, data ) {
    //new 一个 promise对象
    return new Promise( (resolve, reject) => {
        var xmlHttp = new XMLHttpRequest(),
            context = this,
            urls = data ? url+'?' : url;
        //监听变化
        xmlHttp.onreadystatechange = function() {
            //请求成功
            if( xmlHttp.readyState === 4 && xmlHttp.status === 200 ) {
                resolve( JSON.parse( xmlHttp.responseText ) )
            }
        }
        //如果是get方式请求并且需要穿参
        if( type === 'GET' && data ) {
            for( key in data ) {
                urls += ( key + '=' + data[ key ] );
            }
        }

        xmlHttp.open( type, urls, true );
        xmlHttp.send( data )
    })
}

//测试
ajax( 'GET', './data.json', null)
    .then(function(res) {
        console.log(res);
    })
