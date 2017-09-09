//菜单窗口
class WndMenu extends WindowBase
{
    private modelBg:ModalWindowBg;
    private btnNotice:fairygui.GButton;
    private btnMail:fairygui.GButton;
    private btnRankList:fairygui.GButton;
    private btnSetting:fairygui.GButton;
    private btnBlackList:fairygui.GButton;
    private btnLoginout:fairygui.GButton;

    private static _wndMenu:WndMenu = null;
    public static GetInst():WndMenu
    {
        if(this._wndMenu == null)
        {
            this._wndMenu = new WndMenu();
            this._wndMenu.animation = ["eject","shrink"];
        }
        return this._wndMenu;
    }

    public constructor() {
        super();
    }
    
    protected onInit():void {
        this.contentPane = fairygui.UIPackage.createObject("Menu","WndMenu").asCom;

        this.btnNotice = this.contentPane.getChild("btnNotice").asButton;
        this.btnMail = this.contentPane.getChild("btnMail").asButton;
        this.btnRankList = this.contentPane.getChild("btnRankList").asButton;
        this.btnSetting = this.contentPane.getChild("btnSetting").asButton;
        this.btnBlackList = this.contentPane.getChild("btnBlackList").asButton;
        this.btnLoginout = this.contentPane.getChild("btnLoginout").asButton;
        this.EventBind();

        this.modal = true;
    }

    protected EventBind():void{
        this.btnNotice.onClick(this,this.OnBtnNoticeClick);
        this.btnMail.onClick(this,this.OnBtnMailClick);
        this.btnRankList.onClick(this,this.OnBtnRankListClick);
        this.btnSetting.onClick(this,this.OnBtnSettingClick);
        this.btnBlackList.onClick(this,this.OnBtnBlackListClick);
        this.btnLoginout.onClick(this,this.OnBtnLoginoutClick);
    }

    protected OnShown(): void {

    }

    //公告
    protected OnBtnNoticeClick():void
    {

    }

    //邮件
    protected OnBtnMailClick():void
    {
        WndMail.Inst().show()
    }

    //排行榜
    protected OnBtnRankListClick():void
    {

    }

    //设置
    protected OnBtnSettingClick():void
    {

    }

    //黑名单
    protected OnBtnBlackListClick():void
    {

    }

    //登出
    protected OnBtnLoginoutClick():void
    {

    }
}