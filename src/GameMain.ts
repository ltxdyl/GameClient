import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;
import UIPackage = fairygui.UIPackage;

// 程序入口
class GameMain{
    constructor()
    {
        Laya.init(1280, 720, Laya.WebGL);
        laya.utils.Stat.show(0, 0);
        //设置适配模式
        Laya.stage.scaleMode = "showall";
        Laya.stage.alignH = "left";
        Laya.stage.alignV = "top";
        //设置横竖屏
        Laya.stage.screenMode = "horizontal";
        
        Laya.loader.load([
        { url: "res/ui/GameTest.fui", type: Loader.BUFFER },
        { url: "res/ui/Task.fui", type: Loader.BUFFER }
        ], Handler.create(this, this.onLoaded));
    }

     onLoaded(): void {
        Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
        this.addPackage();
        SingleWnd.GetInst().wndTest.show();
        SingleWnd.GetInst().wndGuide.show();
    }

    //统一添加UI包
    addPackage():void{
        UIPackage.addPackage("res/ui/GameTest");
        UIPackage.addPackage("res/ui/Task");
    }
}

new GameMain();