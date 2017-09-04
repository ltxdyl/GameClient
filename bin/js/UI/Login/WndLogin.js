var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//测试界面
var WndLogin = (function (_super) {
    __extends(WndLogin, _super);
    function WndLogin() {
        return _super.call(this) || this;
    }
    WndLogin.prototype.onInit = function () {
        this.contentPane = fairygui.UIPackage.createObject("Login", "WndLogin").asCom;
        this.infos = this.contentPane.getChild("infos").asTextField;
        this.btnLogin = this.contentPane.getChild("btnLogin").asButton;
        this.eventBind();
    };
    WndLogin.prototype.eventBind = function () {
        this.btnLogin.onClick(this, this.btnLoginOnClick);
    };
    WndLogin.prototype.OnShown = function () {
    };
    WndLogin.prototype.btnLoginOnClick = function () {
        SingleWnd.GetInst().wndBattle.show();
        this.hide();
    };
    return WndLogin;
}(WindowBase));
//# sourceMappingURL=WndLogin.js.map