/*
*   @ 尾递归实现阶乘
*   @ 函数调用自身，称为递归。如果尾调用自身，就称为尾递归。
*   @ 递归非常耗费内存，因为需要同时保存成千上百个调用记录，很容易发生"栈溢出"错误（stack overflow）。但对于尾递归来说，由于只存在一个调用记录，所以永远不会发生"栈溢出"错误。
*/

//普通递归阶乘
// function factorial(n) {
//     if (n === 1) return 1;
//     return n * factorial(n - 1);
//   }

//尾递归实现阶乘
function factorial(n, total = 1) {

    if (n === 1) return total;
    return factorial(n - 1, n * total);
}