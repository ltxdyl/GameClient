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
    WndLogin.GetInst = function () {
        if (this._wndLogin == null) {
            this._wndLogin = new WndLogin();
            this._wndLogin.animation = ["fade_in", "shrink"];
        }
        return this._wndLogin;
    };
    WndLogin.prototype.onInit = function () {
        this.name = "WndLogin";
        this.contentPane = fairygui.UIPackage.createObject("Login", this.name).asCom;
        this.btnLogin = this.contentPane.getChild("btnLogin").asButton;
        this.EventBind();
    };
    WndLogin.prototype.EventBind = function () {
        this.btnLogin.onClick(this, this.OnBtnLoginOnClick);
    };
    WndLogin.prototype.OnShown = function () {
    };
    WndLogin.prototype.OnBtnLoginOnClick = function () {
        var websocket = new GoWebSocket();
        //WndHUD.GetInst().show();
        //this.hide();
    };
    return WndLogin;
}(WindowBase));
WndLogin._wndLogin = null;
//# sourceMappingURL=WndLogin.js.map