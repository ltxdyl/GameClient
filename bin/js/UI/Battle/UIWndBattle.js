/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Battle;
(function (Battle) {
    var UIWndBattle = (function (_super) {
        __extends(UIWndBattle, _super);
        function UIWndBattle() {
            return _super.call(this) || this;
        }
        UIWndBattle.createInstance = function () {
            return (fairygui.UIPackage.createObject("Battle", "WndBattle"));
        };
        UIWndBattle.prototype.constructFromXML = function (xml) {
            _super.prototype.constructFromXML.call(this, xml);
            this.btnSetting = (this.getChild("btnSetting"));
            this.imgCoin = (this.getChild("imgCoin"));
            this.imgEnemy = (this.getChild("imgEnemy"));
        };
        return UIWndBattle;
    }(fairygui.GComponent));
    UIWndBattle.URL = "ui://txr6nnlp12kkk0";
    Battle.UIWndBattle = UIWndBattle;
})(Battle || (Battle = {}));
//# sourceMappingURL=UIWndBattle.js.map