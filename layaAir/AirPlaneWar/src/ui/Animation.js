//角色类
let createAnimation = (function(_super){
    const hash = {
        "hero_fly":{//我机飞行
            "src":"war/hero_fly",
            "num":2,
            "type":".png"
        },
        "hero_down":{//我机爆炸
            "src":"war/hero_down",
            "num":4,
            "type":".png"
        },
        "enemy1_fly":{//敌机一飞行
            "src":"war/enemy1_fly",
            "num":1,
            "type":".png"
        },
        "enemy1_down":{//敌机一爆炸
            "src":"war/enemy1_down",
            "num":4,
            "type":".png"
        },
        "enemy2_fly":{//敌机二飞行
            "src":"war/enemy2_fly",
            "num":1,
            "type":".png"
        },
        "enemy2_down":{//敌机二爆炸
            "src":"war/enemy2_down",
            "num":4,
            "type":".png"
        },
        "enemy2_hit":{//敌机二碰撞
            "src":"war/enemy2_hit",
            "num":1,
            "type":".png"
        },
        "enemy3_fly":{//敌机三飞行
            "src":"war/enemy3_fly",
            "num":2,
            "type":".png"
        },
        "enemy3_down":{//敌机三爆炸
            "src":"war/enemy3_down",
            "num":6,
            "type":".png"
        },
        "enemy3_hit":{//敌机三碰撞
            "src":"war/enemy3_hit",
            "num":1,
            "type":".png"
        }
    }
    function createAnimation(){
        createAnimation.super(this);
        //缓存所有动画
        
        this.init(hash);
    };
    Laya.class(createAnimation,'createAnimation',_super);
    let _pooto = createAnimation.prototype;
    _pooto.init = function(hash){
        //缓存所有动作
        for(let i in hash){
            let obj = [];

            let src = hash[i]["src"];
            let num = hash[i]["num"];
            let type = hash[i]["type"];
            for (let y = 1 ; y <= num ; y ++ ){
                obj.push(src + y + type);
            }

            Laya.Animation.createFrames(obj,i);
        }
        
    };
    return createAnimation;
})(Laya.Sprite);