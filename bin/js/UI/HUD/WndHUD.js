var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//HUD窗口
var WndHUD = (function (_super) {
    __extends(WndHUD, _super);
    function WndHUD() {
        return _super.call(this) || this;
    }
    WndHUD.prototype.onInit = function () {
        this.contentPane = fairygui.UIPackage.createObject("HUD", "WndHUD").asCom;
        this.tShowButton = this.contentPane.getTransition("tShowButton");
        this.btnMenu = this.contentPane.getChild("btnMenu").asButton;
        this.btnTask = this.contentPane.getChild("btnTask").asButton;
        this.btnCity = this.contentPane.getChild("btnCity").asButton;
        this.btnBag = this.contentPane.getChild("btnBag").asButton;
        this.btnBattle = this.contentPane.getChild("btnBattle").asButton;
        this.btnRole = this.contentPane.getChild("btnRole").asButton;
        this.btnPet = this.contentPane.getChild("btnPet").asButton;
        this.EventBind();
    };
    WndHUD.prototype.EventBind = function () {
        this.btnMenu.onClick(this, this.OnBtnMenuClick);
        this.btnTask.onClick(this, this.OnBtnTaskClick);
        this.btnCity.onClick(this, this.OnBtnCityClick);
        this.btnBag.onClick(this, this.OnBtnBagClick);
        this.btnBattle.onClick(this, this.OnBtnBattleClick);
        this.btnRole.onClick(this, this.OnBtnRoleClick);
        this.btnPet.onClick(this, this.OnBtnPetClick);
    };
    WndHUD.prototype.OnShown = function () {
        this.ShowMenuAndTaskButton();
    };
    //菜单
    WndHUD.prototype.OnBtnMenuClick = function () {
        SingleWnd.GetInst().wndMenu.show();
    };
    //任务
    WndHUD.prototype.OnBtnTaskClick = function () {
    };
    //主城
    WndHUD.prototype.OnBtnCityClick = function () {
        this.ShowMenuAndTaskButton();
    };
    //背包
    WndHUD.prototype.OnBtnBagClick = function () {
        this.ShowMenuAndTaskButton();
    };
    //战斗
    WndHUD.prototype.OnBtnBattleClick = function () {
        this.ShowMenuAndTaskButton();
    };
    //角色
    WndHUD.prototype.OnBtnRoleClick = function () {
        this.ShowMenuAndTaskButton();
    };
    //宠物
    WndHUD.prototype.OnBtnPetClick = function () {
        this.ShowMenuAndTaskButton();
    };
    //显示菜单和任务按钮
    WndHUD.prototype.ShowMenuAndTaskButton = function () {
        this.tShowButton.play();
    };
    return WndHUD;
}(WindowBase));
//# sourceMappingURL=WndHUD.js.map