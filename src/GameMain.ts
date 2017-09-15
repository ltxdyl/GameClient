// 程序入口
class GameMain {
    constructor()
    {
        Laya.init(720, 1280, Laya.WebGL);
        laya.utils.Stat.show(0, 0);
        //设置适配模式
        Laya.stage.scaleMode = "showall";
        Laya.stage.alignH = "center";
        Laya.stage.alignV = "top";
        //设置横竖屏
        Laya.stage.screenMode = "vertical";
        Laya.loader.load([
            { url: "res/ui/Public@atlas0.png", type: Loader.IMAGE},
            { url: "res/ui/Public.fui", type: Loader.BUFFER },
            { url: "res/ui/Login@atlas0.png", type: Loader.IMAGE},
            { url: "res/ui/Login.fui", type: Loader.BUFFER },
            { url: "res/ui/Battle.fui", type: Loader.BUFFER },
            { url: "res/ui/Bag@atlas0.png", type: Loader.IMAGE},
            { url: "res/ui/Bag.fui", type: Loader.BUFFER },
            { url: "res/ui/City@atlas0.png", type: Loader.IMAGE},
            { url: "res/ui/City.fui", type: Loader.BUFFER },
            { url: "res/ui/Task.fui", type: Loader.BUFFER },
            { url: "res/ui/HUD@atlas0.png", type: Loader.IMAGE},
            { url: "res/ui/HUD.fui", type: Loader.BUFFER },
            { url: "res/ui/Menu.fui", type: Loader.BUFFER },
            { url: "res/ui/Danmaku.fui", type: Loader.BUFFER },
            { url: "res/ui/BlackJack.fui", type: Loader.BUFFER },
        ], Handler.create(this, this.onLoaded));
    }

    onLoaded():void {
        //GoWebSocket.GetInst();//初始化网络连接
        Laya.stage.addChild(GRoot.inst.displayObject);
        this.addPackage();
        this.bindAll();
        //WndLogin.GetInst().show();
        WndBlackJack.GetInst().show();
    };

    //统一添加UI包
    addPackage():void{
        UIPackage.addPackage("res/ui/Public");
        UIPackage.addPackage("res/ui/Task");
        UIPackage.addPackage("res/ui/Login");
        UIPackage.addPackage("res/ui/Battle");
        UIPackage.addPackage("res/ui/HUD");
        UIPackage.addPackage("res/ui/Menu");
        UIPackage.addPackage("res/ui/City");
        UIPackage.addPackage("res/ui/Bag");
        UIPackage.addPackage("res/ui/Danmaku");
        UIPackage.addPackage("res/ui/BlackJack");
    };

    //统一绑定扩展组件
    bindAll():void{
        UIObjectFactory.setPackageItemExtension("ui://Danmaku/DanmakuItem",DanmakuItem);
        UIObjectFactory.setPackageItemExtension("ui://Public/ModalWindowBg",ModalWindowBg);
        UIObjectFactory.setPackageItemExtension("ui://City/ComCity",ComCity);
        UIObjectFactory.setPackageItemExtension("ui://Bag/ComBag",ComBag);
        UIObjectFactory.setPackageItemExtension("ui://Battle/ComBattle",ComBattle);
    }

}

new GameMain();