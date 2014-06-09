/**
 * 倒计时类
 */
 (function (window) {
    var _timer = null;
    var CountDown = function(x, y, count, callback) {
        this.run(x, y, count, callback);
    };

    CountDown.prototype = {
        constructor: CountDown,

        run: function (x, y, count, callback) {
            var countDownText = new createjs.Text(count, '36px Arial', 'red');
            countDownText.x = x;
            countDownText.y = y;
            stage.addChild(countDownText);
            clearInterval(_timer);
            _timer = setInterval(function () {
                if (count <= 0) {
                    clearInterval(_timer);
                    callback && callback();
                    return false;
                }
                count--;
                countDownText.text = count;
            }, 1000);
        }
    };

    window.createCountDown = function(x, y, count, callback) {
        x = x || 0;
        y = y || 0;
        count = count || 60;
        callback = callback || function() {};
        return new CountDown(x, y, count, callback);
    };

 })(window);