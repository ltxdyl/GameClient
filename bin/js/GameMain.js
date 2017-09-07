var Handler = laya.utils.Handler;
var Loader = laya.net.Loader;
var UIPackage = fairygui.UIPackage;
// 程序入口
var GameMain = (function () {
    function GameMain() {
        Laya.init(720, 1280, Laya.WebGL);
        laya.utils.Stat.show(0, 0);
        //设置适配模式
        Laya.stage.scaleMode = "showall";
        Laya.stage.alignH = "center";
        Laya.stage.alignV = "top";
        //设置横竖屏
        Laya.stage.screenMode = "vertical";
        Laya.loader.load([
            { url: "res/ui/Public@atlas0.png", type: Loader.IMAGE },
            { url: "res/ui/Public.fui", type: Loader.BUFFER },
            { url: "res/ui/Login@atlas0.png", type: Loader.IMAGE },
            { url: "res/ui/Login.fui", type: Loader.BUFFER },
            { url: "res/ui/Battle@atlas0.png", type: Loader.IMAGE },
            { url: "res/ui/Battle.fui", type: Loader.BUFFER },
            { url: "res/ui/Bag@atlas0.png", type: Loader.IMAGE },
            { url: "res/ui/Bag.fui", type: Loader.BUFFER },
            { url: "res/ui/City@atlas0.png", type: Loader.IMAGE },
            { url: "res/ui/City.fui", type: Loader.BUFFER },
            { url: "res/ui/Task.fui", type: Loader.BUFFER },
            { url: "res/ui/HUD@atlas0.png", type: Loader.IMAGE },
            { url: "res/ui/HUD.fui", type: Loader.BUFFER },
            { url: "res/ui/Menu.fui", type: Loader.BUFFER },
        ], Handler.create(this, this.onLoaded));
    }
    GameMain.prototype.onLoaded = function () {
        Laya.stage.addChild(fairygui.GRoot.inst.displayObject);
        this.addPackage();
        this.bindAll();
        SingleWnd.GetInst().wndLogin.show();
    };
    ;
    //统一添加UI包
    GameMain.prototype.addPackage = function () {
        UIPackage.addPackage("res/ui/Public");
        UIPackage.addPackage("res/ui/Task");
        UIPackage.addPackage("res/ui/Login");
        UIPackage.addPackage("res/ui/Battle");
        UIPackage.addPackage("res/ui/HUD");
        UIPackage.addPackage("res/ui/Menu");
        UIPackage.addPackage("res/ui/City");
        UIPackage.addPackage("res/ui/Bag");
    };
    ;
    //统一绑定扩展组件
    GameMain.prototype.bindAll = function () {
        fairygui.UIObjectFactory.setPackageItemExtension("ui://Public/ModalWindowBg", ModalWindowBg);
        fairygui.UIObjectFactory.setPackageItemExtension("ui://City/ComCity", ComCity);
        fairygui.UIObjectFactory.setPackageItemExtension("ui://Bag/ComBag", ComBag);
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=GameMain.js.map