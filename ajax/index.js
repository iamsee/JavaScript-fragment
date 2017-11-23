/*
*   手写ajax
*/
function ajax( type, url, data, callback ) {

    var xmlHttp = new XMLHttpRequest(),
        context = this,
        urls = type === "GET" ? '' : url ,
        datas = type === "GET" ? null: data;

    xmlHttp.onreadystatechange = function() {
        if( xmlHttp.readyState === 4 && xmlHttp.status === 200 ) {
            callback.apply( context, xmlHttp.responseText )
        }
    }

    if( type === 'GET' ) {
        urls = '?';
        for( key in data ) {
            urls += ( key + '=' + data[ key ] );
        }
    }

    xmlHttp.open( type, urls, true );
    xmlHttp.send( datas )
}
