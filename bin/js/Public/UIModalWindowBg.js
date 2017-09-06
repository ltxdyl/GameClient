/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Public;
(function (Public) {
    var UIModalWindowBg = (function (_super) {
        __extends(UIModalWindowBg, _super);
        function UIModalWindowBg() {
            return _super.call(this) || this;
        }
        UIModalWindowBg.createInstance = function () {
            return (fairygui.UIPackage.createObject("Public", "ModalWindowBg"));
        };
        UIModalWindowBg.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.background = (this.getChild("background"));
            this.btnClose = (this.getChild("btnClose"));
        };
        return UIModalWindowBg;
    }(fairygui.GComponent));
    UIModalWindowBg.URL = "ui://ti8p7cqzli470";
    Public.UIModalWindowBg = UIModalWindowBg;
})(Public || (Public = {}));
//# sourceMappingURL=UIModalWindowBg.js.map