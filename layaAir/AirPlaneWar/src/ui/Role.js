//角色类
let Role = (function(_super){
    function Role(){
        Role.super(this);
    };
    //注册类 第一个是路径 第二是全名称 第三是父类
    Laya.class(Role,"Role",_super);
    let _proto = Role.prototype;
    _proto.init = function(_type,_camp,_hp,_speed,_hitRadius){
        //角色类型
        this.type = _type;
        //阵营
        this.camp = _camp;
        //血量
        this.hp = _hp;
        //速度
        this.speed = _speed;
        //被击中半径
        this.hitRadius = _hitRadius;


        this.body = new Laya.Animation();
        this.addChild(this.body);
        setTimeout(()=>{
            this.playAction("fly");
        },100)
        
    };
    _proto.playAction = function(action){
        //播放动作,第三是名称 第二是是否循环
        console.log(this.type)
        this.body.play( 0 , true , this.type + "_" + action );
        //获取获取动画大小区域
        this.bound = this.body.getBounds();
        //设置居中
        this.body.pos( -this.bound.width/2 , -this.bound.height/2 );
    }
    return Role;
})(Laya.Sprite);