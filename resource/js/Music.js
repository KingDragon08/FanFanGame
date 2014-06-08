/**
 * 音乐控制类
 */
(function (w) {
    var Music = function() {
        this.loader = null;
        this.preload();
    };

    Music.prototype = {
        constructor: Music,

        // 关闭背景音乐
        stopMusicPlaying: function () {
            try {
                if (this.loader !== null) {
                    this.loader.close();
                }
                createjs.Sound.stop();                            
            } catch (ex) {}

        },

        // 重启背景音乐
        rebootMainMusic: function () {
            var instance = this.mainMusicPlaying();
            if (instance === null || instance.playState === createjs.Sound.PLAY_FAILED) {
                return false;
            }
            return true;
        },

        // 主背景音乐
        mainMusicPlaying: function () {
            return createjs.Sound.play('bgMusic', {interrupt:createjs.Sound.INTERRUPT_NONE, loop:-1, volume:0.4});
        },

        // 点击音乐
        clickMusicPlaying: function () {
            return createjs.Sound.play('clickMusic', {interrupt:createjs.Sound.INTERRUPT_NONE});
        },

        // 联线成功音乐
        doubleMusicPlaying: function () {
            return createjs.Sound.play('doubleMusic', {interrupt:createjs.Sound.INTERRUPT_NONE});
        },

        // 预加载
        preload: function () {
            var loader_music, musicPath = 'resource/music/';
            var manifest = [
                { src: 'bg.mp3', id: 'bgMusic' },
                { src: 'click.mp3', id: 'clickMusic' },
                { src: 'double.mp3', id: 'doubleMusic' }
            ];

            createjs.Sound.alternateExtensions = ["mp3"];
            loader_music = new createjs.LoadQueue(true, musicPath);
            loader_music.installPlugin(createjs.Sound);
            loader_music.addEventListener('complete', this.mainMusicPlaying);
            loader_music.loadManifest(manifest);  
            this.loader = loader_music;
            return loader_music;          
        }
    };


    Music.loadMusic = function() {
        return new Music();
    };

    window.Music = Music;
})(window);