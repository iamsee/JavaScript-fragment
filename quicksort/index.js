/*
*   @ 快速排序    
*/

function quickSort( arr ) {

    if( arr.length <= 1 ) return arr;

    var pivotIndex = Math.floor( arr.length / 2 ),
        pivot = arr.splice( pivotIndex, 1 )[0],
        left = [],
        right = [],
        i = 0;
    for ( ; i < arr.length; i++) {
        if( arr[i] < pivot ) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat( [pivot], quickSort(right) );
}