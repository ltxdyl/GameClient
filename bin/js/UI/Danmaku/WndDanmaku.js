var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//弹幕窗口
var WndDanmaku = (function (_super) {
    __extends(WndDanmaku, _super);
    function WndDanmaku() {
        return _super.call(this) || this;
    }
    WndDanmaku.GetInst = function () {
        if (this._wndDanmaku == null)
            this._wndDanmaku = new WndDanmaku();
        return this._wndDanmaku;
    };
    WndDanmaku.prototype.onInit = function () {
        this.danmakuMaster = new DanmakuMaster();
        this.name = "WndDanmaku";
        this.contentPane = UIPackage.createObject("Danmaku", this.name).asCom;
        this.EventBind();
    };
    WndDanmaku.prototype.EventBind = function () {
        this.onClick(this, this.wndOnClick);
    };
    WndDanmaku.prototype.OnShown = function () {
    };
    WndDanmaku.prototype.wndOnClick = function () {
        var contents = ["红", "黄", "蓝", "绿", "粉"];
        var index = Math.floor(Math.random() * 5);
        console.debug(String(index));
        this.addOneDanmaku("我是" + contents[index] + "色的");
    };
    //新增一条弹幕
    WndDanmaku.prototype.addOneDanmaku = function (content) {
        var danmakuItem = this.danmakuMaster.getFromPool();
        if (danmakuItem == null)
            return;
        this.contentPane.addChild(danmakuItem);
        danmakuItem.titleColor = this.danmakuMaster.GetContentColor(content);
        danmakuItem.text = this.danmakuMaster.formatContent(content);
        var posX = this.danmakuMaster.getPosX(danmakuItem);
        danmakuItem.x = posX[0];
        danmakuItem.y = this.danmakuMaster.getPosY();
        var moveTime = this.danmakuMaster.getMoveTime();
        Tween.to(danmakuItem, { x: posX[1] }, moveTime, Ease.linearNone, Handler.create(this, this.moveOver, [danmakuItem]));
    };
    //移动结束
    WndDanmaku.prototype.moveOver = function (danmakuItem) {
        this.contentPane.removeChild(danmakuItem);
        this.danmakuMaster.returnToPool(danmakuItem);
    };
    return WndDanmaku;
}(WindowBase));
//# sourceMappingURL=WndDanmaku.js.map