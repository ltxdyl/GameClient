var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//引导界面
var WndGuide = (function (_super) {
    __extends(WndGuide, _super);
    function WndGuide() {
        return _super.call(this) || this;
    }
    WndGuide.prototype.onInit = function () {
        this.contentPane = fairygui.UIPackage.createObject("任务", "引导界面").asCom;
        this.TopMask = this.contentPane.getChild("TopMask").asImage;
        this.BottomMask = this.contentPane.getChild("BottomMask").asImage;
        this.LeftMask = this.contentPane.getChild("LeftMask").asImage;
        this.RightMask = this.contentPane.getChild("RightMask").asImage;
        this.GuideIcon = this.contentPane.getChild("GuideIcon").asLoader;
    };
    WndGuide.prototype.OnShown = function () {
    };
    //设置遮罩位置
    WndGuide.prototype.SetMask = function (topPos, bottomPos, leftPos, rightPos) {
    };
    return WndGuide;
}(WindowBase));
//# sourceMappingURL=WndGuide.js.map