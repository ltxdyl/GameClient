var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//测试界面
var Wndtest = (function (_super) {
    __extends(Wndtest, _super);
    function Wndtest() {
        return _super.call(this) || this;
    }
    Wndtest.prototype.onInit = function () {
        this.contentPane = fairygui.UIPackage.createObject("游戏测试", "测试界面").asCom;
    };
    Wndtest.prototype.OnShown = function () {
    };
    return Wndtest;
}(WindowBase));
//# sourceMappingURL=WndTest.js.map