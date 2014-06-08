/**
 * 鸵鸟类
 */
 (function (w) {
    var Bird = function(x, y, img, stage) {
        this.x = x;
        this.y = y;
        this.stage = stage;
        this.init(img);
    };

    Bird.prototype = {
        constructor: Bird,

        init: function (img) {
            var birdSpriteSheet = new createjs.SpriteSheet({
                images: [img],
                frames: { height: 186, width: 166, count: 7 }
            });

            this.sprite = new createjs.Sprite(birdSpriteSheet);
            this.sprite.framerate = 4;
            this.sprite.setTransform(this.x, this.y, 1, 1);
            this.sprite.gotoAndPlay(0);
            this.stage.addChild(this.sprite);
        },

        update: function () {

        }

    };

    w.createBird = function(x, y, img, stage) {
        return new Bird(x, y, img, stage);
    };

 })(window);