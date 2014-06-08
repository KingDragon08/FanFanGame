/**
 * 数学库
 */
var MathH = {
    // 洗牌算法
    shuffle_swap: function (m) {
        // 生成m张牌
        var arr = new Array(m);
        for (var i=0; i<m; i++) {
            arr[i] = i;
        }

        // 第i张与任意一张牌换位子，换完一轮即可
        for (var i=0; i<m; i++) {
            var rnd = Math.floor(Math.random()*(i+1)),
                temp = arr[rnd];
            arr[rnd] = arr[i];
            arr[i]=temp;
        }
        return arr;
    }

};