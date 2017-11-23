/*
*   手写ajax
*/

//封装ajax方法
function ajax( type, url, data, callback ) {

    var xmlHttp = new XMLHttpRequest(),
        context = this,
        urls = data ? url+'?' : url;

    xmlHttp.onreadystatechange = function() {
        if( xmlHttp.readyState === 4 && xmlHttp.status === 200 ) {
            callback.call( context, JSON.parse( xmlHttp.responseText ) )
        }
    }

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
*   用promise的方式实现ajax
*/

//封装ajax方法
function ajax( type, url, data ) {

    return new Promise( (resolve, reject) => {
        var xmlHttp = new XMLHttpRequest(),
            context = this,
            urls = data ? url+'?' : url;

        xmlHttp.onreadystatechange = function() {
            if( xmlHttp.readyState === 4 && xmlHttp.status === 200 ) {
                resolve( JSON.parse( xmlHttp.responseText ) )
            }
        }

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
