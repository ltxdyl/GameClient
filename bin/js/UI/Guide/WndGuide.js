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
        this.contentPane = fairygui.UIPackage.createObject("Task", "WndGuide").asCom;
        this.TopMask = this.contentPane.getChild("TopMask").asImage;
        this.BottomMask = this.contentPane.getChild("BottomMask").asImage;
        this.LeftMask = this.contentPane.getChild("LeftMask").asImage;
        this.RightMask = this.contentPane.getChild("RightMask").asImage;
        this.GuideIcon = this.contentPane.getChild("GuideIcon").asLoader;
    };
    WndGuide.prototype.OnShown = function () {
        var obj = this.GetGuideUI("wndLogin.infos");
        this.SetGuideMask(obj);
    };
    //获取引导UI
    WndGuide.prototype.GetGuideUI = function (guideObj) {
        var objPaths = guideObj.split(".");
        var obj = SingleWnd.GetInst();
        for (var _i = 0, objPaths_1 = objPaths; _i < objPaths_1.length; _i++) {
            var path = objPaths_1[_i];
            for (var name_1 in obj) {
                if (name_1 == path) {
                    obj = obj[name_1];
                }
            }
        }
        return obj;
    };
    //设置引导遮罩
    WndGuide.prototype.SetGuideMask = function (guideUI) {
        var globalPos = guideUI.localToGlobal();
        var topPos = globalPos.y;
        var leftPos = globalPos.x;
        var bottomPos = globalPos.y + guideUI.height;
        var rightPos = globalPos.x + guideUI.width;
        this.SetMask(topPos, bottomPos, leftPos, rightPos);
    };
    //设置遮罩位置
    WndGuide.prototype.SetMask = function (topPos, bottomPos, leftPos, rightPos) {
        this.TopMask.height = topPos;
        this.TopMask.width = fairygui.GRoot.inst.width;
        this.TopMask.x = 0;
        this.TopMask.y = 0;
        this.BottomMask.height = fairygui.GRoot.inst.height - bottomPos;
        this.BottomMask.width = fairygui.GRoot.inst.width;
        this.BottomMask.x = 0;
        this.BottomMask.y = bottomPos;
        this.LeftMask.height = bottomPos - topPos;
        this.LeftMask.width = leftPos;
        this.LeftMask.x = 0;
        this.LeftMask.y = topPos;
        this.RightMask.height = bottomPos - topPos;
        this.RightMask.width = fairygui.GRoot.inst.width - rightPos;
        this.RightMask.x = rightPos;
        this.RightMask.y = topPos;
    };
    return WndGuide;
}(WindowBase));
//# sourceMappingURL=WndGuide.js.map