var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//菜单窗口
var WndMenu = (function (_super) {
    __extends(WndMenu, _super);
    function WndMenu() {
        return _super.call(this) || this;
    }
    WndMenu.prototype.onInit = function () {
        this.contentPane = fairygui.UIPackage.createObject("Menu", "WndMenu").asCom;
        this.btnNotice = this.contentPane.getChild("btnNotice").asButton;
        this.btnMail = this.contentPane.getChild("btnMail").asButton;
        this.btnRankList = this.contentPane.getChild("btnRankList").asButton;
        this.btnSetting = this.contentPane.getChild("btnSetting").asButton;
        this.btnBlackList = this.contentPane.getChild("btnBlackList").asButton;
        this.btnLoginout = this.contentPane.getChild("btnLoginout").asButton;
        this.EventBind();
        this.modal = true;
    };
    WndMenu.prototype.EventBind = function () {
        this.btnNotice.onClick(this, this.OnBtnNoticeClick);
        this.btnMail.onClick(this, this.OnBtnMailClick);
        this.btnRankList.onClick(this, this.OnBtnRankListClick);
        this.btnSetting.onClick(this, this.OnBtnSettingClick);
        this.btnBlackList.onClick(this, this.OnBtnBlackListClick);
        this.btnLoginout.onClick(this, this.OnBtnLoginoutClick);
    };
    WndMenu.prototype.OnShown = function () {
    };
    //公告
    WndMenu.prototype.OnBtnNoticeClick = function () {
    };
    //邮件
    WndMenu.prototype.OnBtnMailClick = function () {
    };
    //排行榜
    WndMenu.prototype.OnBtnRankListClick = function () {
    };
    //设置
    WndMenu.prototype.OnBtnSettingClick = function () {
    };
    //黑名单
    WndMenu.prototype.OnBtnBlackListClick = function () {
    };
    //登出
    WndMenu.prototype.OnBtnLoginoutClick = function () {
    };
    return WndMenu;
}(WindowBase));
//# sourceMappingURL=WndMenu.js.map