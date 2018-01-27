let Game = (function(){
    (function Game(){
        //初始化引擎想用webGL就在第三个参数加Laya.WebGL
        const heigth = 852;
        const width = 480;
        Laya.init(width,heigth);
        //创建循环背景
        this.bg = new BackGround(width,heigth);
        //自适应
        Laya.stage.scaleMode = "showall";
        Laya.stage.alignH = "center";
        //添加
        Laya.stage.addChild(this.bg);
        //加载图集资源
        Laya.loader.load("res/atlas/war.atlas",Laya.Handler.create(this,onLoaded(width,heigth),null,Laya.Loader.ATLAS));
    })();
    function onLoaded(width,heigth){
        //缓存所有的动画
        // this.createAnimation = new createAnimation();
        //主角
        this.hero = new Role(width,heigth);
        this.hero.pos( 240, 500 );
        Laya.stage.addChild(this.hero);
    }
})();