/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Menu;
(function (Menu) {
    var UIWndMail = (function (_super) {
        __extends(UIWndMail, _super);
        function UIWndMail() {
            return _super.call(this) || this;
        }
        UIWndMail.createInstance = function () {
            return (fairygui.UIPackage.createObject("Menu", "WndMail"));
        };
        UIWndMail.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.background = (this.getChild("background"));
            this.listMail = (this.getChild("listMail"));
        };
        return UIWndMail;
    }(fairygui.GComponent));
    UIWndMail.URL = "ui://ocztyqwzltyq2";
    Menu.UIWndMail = UIWndMail;
})(Menu || (Menu = {}));
//# sourceMappingURL=UIWndMail.js.map