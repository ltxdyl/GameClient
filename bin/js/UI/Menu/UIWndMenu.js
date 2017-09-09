/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Menu;
(function (Menu) {
    var UIWndMenu = (function (_super) {
        __extends(UIWndMenu, _super);
        function UIWndMenu() {
            return _super.call(this) || this;
        }
        UIWndMenu.createInstance = function () {
            return (fairygui.UIPackage.createObject("Menu", "WndMenu"));
        };
        UIWndMenu.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.modelBg = (this.getChild("modelBg"));
            this.btnNotice = (this.getChild("btnNotice"));
            this.btnMail = (this.getChild("btnMail"));
            this.btnRankList = (this.getChild("btnRankList"));
            this.btnSetting = (this.getChild("btnSetting"));
            this.btnBlackList = (this.getChild("btnBlackList"));
            this.btnLoginout = (this.getChild("btnLoginout"));
        };
        return UIWndMenu;
    }(fairygui.GComponent));
    UIWndMenu.URL = "ui://ocztyqwzli470";
    Menu.UIWndMenu = UIWndMenu;
})(Menu || (Menu = {}));
//# sourceMappingURL=UIWndMenu.js.map