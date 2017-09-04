var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//战斗界面
var WndBattle = (function (_super) {
    __extends(WndBattle, _super);
    function WndBattle() {
        return _super.call(this) || this;
    }
    WndBattle.prototype.onInit = function () {
        this.contentPane = fairygui.UIPackage.createObject("Battle", "WndBattle").asCom;
        this.btnSetting = this.contentPane.getChild("btnSetting").asButton;
    };
    WndBattle.prototype.OnShown = function () {
    };
    return WndBattle;
}(WindowBase));
//# sourceMappingURL=WndBattle.js.map