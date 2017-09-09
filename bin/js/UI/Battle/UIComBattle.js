/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Battle;
(function (Battle) {
    var UIComBattle = (function (_super) {
        __extends(UIComBattle, _super);
        function UIComBattle() {
            return _super.call(this) || this;
        }
        UIComBattle.createInstance = function () {
            return (fairygui.UIPackage.createObject("Battle", "ComBattle"));
        };
        UIComBattle.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.leftHP = (this.getChild("leftHP"));
            this.leftMP = (this.getChild("leftMP"));
        };
        return UIComBattle;
    }(fairygui.GComponent));
    UIComBattle.URL = "ui://txr6nnlp12kkk0";
    Battle.UIComBattle = UIComBattle;
})(Battle || (Battle = {}));
//# sourceMappingURL=UIComBattle.js.map