/**
 * 主要记录各类排序算法实现
 */

var helper = require("./SortTestHelper")

 /**
 * 选择排序算法 O(n^2)
 * @description 在当前数组中查找最大或最小的元素放在首位，然后从剩下的部分继续查找
 * @param arr 所需排序数组
 * @param callback 大小规则判定函数
 */

function selectionSort(arr, callback) {
    callback = callback || function(a, b) { return a > b }
    arr = arr || []  // 纠错处理
    var temp = null
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (callback(arr[i], arr[j])) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            } else {
                break
            }
        }
    }
    return arr
}

// 插入排序在以上情况下性能比选择排序差很多
console.log("selectionSort",helper.computeMethodTime(helper.generateRandomArray(10000, 0, 10000), insertSort))

/**
 * 插入排序
 * @description 从第一个元素开始依次和当前元素之前的元素比较，根据比较结果换位
 * @param arr
 */
function insertSort(arr, callback) {
    callback = callback || function(a, b) { return a > b }
    arr = arr || []  // 纠错处理
    let temp = null
    for (var i = 1; i < arr.length; i++) {
        temp = arr[i]
        for (var j = i; j >= 0; j--) {
            if (callback(arr[j - 1], temp)) {
                /* temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temp */
                
                // 交换操作优化，换值操作只需要在找到准确位置时交换，因此只需要进行一次交换
                arr[j] = arr[j - 1]

            } else {
                arr[j] = temp
                break
            }
        }
    }
    return arr
}

console.log("insertSort",helper.computeMethodTime(helper.generateRandomArray(10000, 0, 10000), insertSort))