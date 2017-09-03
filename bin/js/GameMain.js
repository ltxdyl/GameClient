var Handler = laya.utils.Handler;
var Loader = laya.net.Loader;
var UIPackage = fairygui.UIPackage;
// 程序入口
var GameMain = (function () {
    function GameMain() {
        Laya.init(1280, 720, Laya.WebGL);
        laya.utils.Stat.show(0, 0);
        //设置适配模式
        Laya.stage.scaleMode = "showall";
        Laya.stage.alignH = "left";
        Laya.stage.alignV = "top";
        //设置横竖屏
        Laya.stage.screenMode = "horizontal";
        Laya.loader.load([
            { url: "res/ui/Login.fui", type: Loader.BUFFER },
            { url: "res/ui/Task.fui", type: Loader.BUFFER }
        ], Handler.create(this, this.onLoaded));
    }
    GameMain.prototype.onLoaded = function () {
        Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
        this.addPackage();
        SingleWnd.GetInst().wndLogin.show();
        SingleWnd.GetInst().wndGuide.show();
    };
    ;
    //统一添加UI包
    GameMain.prototype.addPackage = function () {
        UIPackage.addPackage("res/ui/Login");
        UIPackage.addPackage("res/ui/Task");
    };
    ;
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=GameMain.js.map