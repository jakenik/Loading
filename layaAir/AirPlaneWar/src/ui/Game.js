let Game = (function(){
    (function Game(){
        //初始化引擎想用webGL就在第三个参数加Laya.WebGL
        const height = 852;
        const width = 480;
        this.H = height;
        this.W = width;
        Laya.init(width,height);
        //创建循环背景
        this.bg = new BackGround(width,height);
        //自适应
        Laya.stage.scaleMode = "showall";
        Laya.stage.alignH = "center";
        //添加
        Laya.stage.addChild(this.bg);
        //加载图集资源
        Laya.loader.load("res/atlas/war.json",Laya.Handler.create(this,onLoaded(width,height),null,Laya.Loader.ATLAS));
    })();
    function onLoaded(width,height){
        //缓存所有的动画
        new createAnimation();
        //主角
        this.hero = new Role();
        //角色初始化
        this.hero.init("hero",0,1,0,30);

        this.hero.pos( width / 2 , height / 3 );
        Laya.stage.addChild(this.hero);

        //监听舞台的鼠标移动事件 第一事件名称 第二作用域 第三 off关闭监听
        Laya.stage.on(Laya.Event.MOUSE_MOVE,this,onMouseMove);

        //创建敌人
        Laya.timer.frameLoop(1,this,onLoop);
        
    }
    function onMouseMove(){
        //使主角保持在鼠标中间
        this.hero.pos(Laya.stage.mouseX,Laya.stage.mouseY);
    }
    function onLoop(){
        //遍历飞机，更改状态
        for(let i = Laya.stage.numChildren - 1 ; i > 0  ; i --){
            let role = Laya.stage.getChildAt(i);
            if( role && role.speed ){
                //更具飞机的速度更改飞机位置
                role.y += role.speed;
            }
            //敌机超出显示区域移除
            if(role.y > this.H + 200 ){
                //从舞台移除
                role.removeSelf();
                //回收到对象池
                Laya.Pool.recover("role",role);
            }
        }
        //每隔30创建新的飞机
        if(Laya.timer.currFrame % 60 === 0){
            createEnemy(2);
        }
    }
    function createEnemy(num){
        //敌机血量
        let hps = [1,2,3];
        //敌机速度
        let speeds = [3,2,1];
        //敌机被击中半径
        let radius = [15,30,70];
        
        for (let i = 0 ; i < num ; i ++){
            //随机出现敌人
            let r = Math.random();
            //更具随机数出现敌人类型
            let type = r < 0.7 ? 0 : r < 0.95 ? 1 : 2;
            //创建敌人
            let enemy  = Laya.Pool.getItemByClass("role",Role);
            //初始化角色
            enemy.init("enemy" + (type + 1) , 1 , hps[type] , speeds[type] , radius[type] );
            //随机的位置
            enemy.pos( Math.random() * this.W + 40,Math.random() * 200 );
            //添加到舞台上
            Laya.stage.addChild(enemy);
        }
    }
})();