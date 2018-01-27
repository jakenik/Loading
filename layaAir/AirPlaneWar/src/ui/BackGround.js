let BackGround = (function(_super){
    function BackGround(width,heigth){
        BackGround.super(this);
        this.W = width;
        this.H = heigth;
        //创建游戏背景
        this.bg1 = new Laya.Sprite();
        //加载并且显示图片
        this.bg1.loadImage("war/background.png");
        this.addChild(this.bg1);
        this.bg2 = new Laya.Sprite();
        //加载并且显示图片
        this.bg2.loadImage("war/background.png");
        this.bg2.pos(0, this.H);
        this.addChild(this.bg2);
        Laya.timer.frameLoop(1,this,this.onLoop);
    };
    //注册类 第一个是路径 第二是全名称 第三是父类
    Laya.class(BackGround,"BackGround",_super)

    let _proto = BackGround.prototype;
    _proto.onLoop = function(){
        this.y += 1;
        if(this.y + this.bg1.y >= this.H){
            this.bg1.y -= this.H * 2;
        }
        if(this.y + this.bg2.y >= this.H){
            this.bg2.y -= this.H * 2;
        }
    };
    return BackGround;
})(Laya.Sprite);
//Sprite精灵