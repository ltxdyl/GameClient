import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;
import UIPackage = fairygui.UIPackage;

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
            { url: "res/ui/Public.fui", type: Loader.BUFFER },
            { url: "res/ui/Login.fui", type: Loader.BUFFER },
            { url: "res/ui/Battle@atlas0.png", type: Loader.IMAGE},
            { url: "res/ui/Battle.fui", type: Loader.BUFFER },
            { url: "res/ui/Task.fui", type: Loader.BUFFER },
            { url: "res/ui/HUD.fui", type: Loader.BUFFER }
        ], Handler.create(this, this.onLoaded));
    }

    onLoaded():void {
        Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
        this.addPackage();
        SingleWnd.GetInst().wndLogin.show();
    };

    //统一添加UI包
    addPackage():void{
        UIPackage.addPackage("res/ui/Public");
        UIPackage.addPackage("res/ui/Task");
        UIPackage.addPackage("res/ui/Login");
        UIPackage.addPackage("res/ui/Battle");
        UIPackage.addPackage("res/ui/HUD");
    };

}

new GameMain();