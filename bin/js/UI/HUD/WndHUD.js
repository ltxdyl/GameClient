var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//HUD窗口
var WndHUD = (function (_super) {
    __extends(WndHUD, _super);
    function WndHUD() {
        return _super.call(this) || this;
    }
    WndHUD.prototype.onInit = function () {
        this.contentPane = fairygui.UIPackage.createObject("HUD", "WndHUD").asCom;
        this.eventBind();
    };
    WndHUD.prototype.eventBind = function () {
    };
    WndHUD.prototype.OnShown = function () {
    };
    return WndHUD;
}(WindowBase));
//# sourceMappingURL=WndHUD.js.map