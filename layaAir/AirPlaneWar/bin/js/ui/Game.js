let Game = (function(){
    (function Game(){
        //初始化引擎想用webGL就在第三个参数加Laya.WebGL
        const heigth = 852;
        const width = 480;
        Laya.init(width,heigth);
        //创建循环背景
        this.bg = new BackGround(width,heigth);
        Laya.stage.scaleMode = "showall";
        Laya.stage.alignH = "center";
        Laya.stage.addChild(this.bg);
    })();
})();