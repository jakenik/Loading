//角色类
let Role = (function(_super){
    function Role(width,heigth){
        Role.super(this);
        this.init();
    };
    //注册类 第一个是路径 第二是全名称 第三是父类
    Laya.class(Role,"Role",_super);
    let _proto = Role.prototype;
    _proto.init = function(){
        Laya.Animation.createFrames(["war/hero_fly1.png", "war/hero_fly2.png"],"hero_fly");
        this.body = new Laya.Animation();
        this.addChild(this.body);
        this.playAction("hero_fly");
    };
    _proto.playAction = function(action){
        //播放动作,第三是名称 第二是是否循环
        this.body.play( 0,true,action );
        //获取获取动画大小区域
        this.bound = this.body.getBounds();
        //设置居中
        this.body.pos( -this.bound.width/2 , -this.bound.heigth/2 );
    }
    return Role;
})(Laya.Sprite);