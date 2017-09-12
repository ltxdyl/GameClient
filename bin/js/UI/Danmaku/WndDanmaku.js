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
    WndDanmaku.Inst = function () {
        if (this._wndDanmaku == null)
            this._wndDanmaku = new WndDanmaku();
        return this._wndDanmaku;
    };
    WndDanmaku.prototype.onInit = function () {
        this.name = "WndDanmaku";
        this.contentPane = fairygui.UIPackage.createObject("Danmaku", this.name).asCom;
    };
    WndDanmaku.prototype.EventBind = function () {
    };
    WndDanmaku.prototype.OnShown = function () {
    };
    return WndDanmaku;
}(WindowBase));
//# sourceMappingURL=WndDanmaku.js.map