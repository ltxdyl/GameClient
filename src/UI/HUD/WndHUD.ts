//HUD窗口
class WndHUD extends WindowBase
{
    private tShowButton:Transition;
    private btnMenu:GButton;
    private btnTask:GButton;
    private btnCity:GButton;
    private btnBag:GButton;
    private btnBattle:GButton;
    private btnRole:GButton;
    private btnPet:GButton;

    private comCity:ComCity;//主城组件
    private comBattle:ComBattle;//战斗组件

    private static _wndHUD:WndHUD = null;
    public static GetInst():WndHUD
    {
        if(this._wndHUD == null)
        {
            this._wndHUD = new WndHUD();
        }
        return this._wndHUD;
    }

    public constructor() {
        super();
    }
    
    protected onInit():void {
        this.contentPane = UIPackage.createObject("HUD","WndHUD").asCom;

        this.tShowButton = this.contentPane.getTransition("tShowButton")
        this.btnMenu = this.contentPane.getChild("btnMenu").asButton;
        this.btnTask = this.contentPane.getChild("btnTask").asButton;
        this.btnCity = this.contentPane.getChild("btnCity").asButton;
        this.btnBag = this.contentPane.getChild("btnBag").asButton;
        this.btnBattle = this.contentPane.getChild("btnBattle").asButton;
        this.btnRole = this.contentPane.getChild("btnRole").asButton;
        this.btnPet = this.contentPane.getChild("btnPet").asButton;

        this.comCity = <ComCity>this.contentPane.getChild("comCity");
        this.comBattle = <ComBattle>this.contentPane.getChild("comBattle");
        this.EventBind();
    }

    protected EventBind():void{
        this.btnMenu.onClick(this,this.OnBtnMenuClick);
        this.btnTask.onClick(this,this.OnBtnTaskClick);
        this.btnCity.onClick(this,this.OnBtnCityClick);
        this.btnBag.onClick(this,this.OnBtnBagClick);
        this.btnBattle.onClick(this,this.OnBtnBattleClick);
        this.btnRole.onClick(this,this.OnBtnRoleClick);
        this.btnPet.onClick(this,this.OnBtnPetClick);
    }

    protected OnShown(): void {
        this.OnBtnCityClick();
        this.ShowMenuAndTaskButton();
    }

    //菜单
    protected OnBtnMenuClick():void
    {
        WndMenu.GetInst().show();
    }

    //任务
    protected OnBtnTaskClick():void
    {

    }

    //主城
    protected OnBtnCityClick():void
    {
        this.ShowMenuAndTaskButton();
        this.comCity.OnShow();
    }

    //背包
    protected OnBtnBagClick():void
    {
        this.ShowMenuAndTaskButton();
    }

    //战斗
    protected OnBtnBattleClick():void
    {
        this.ShowMenuAndTaskButton();
        this.comBattle.OnShow();
    }

    //角色
    protected OnBtnRoleClick():void
    {
        this.ShowMenuAndTaskButton();
    }

    //宠物
    protected OnBtnPetClick():void
    {
        this.ShowMenuAndTaskButton();
    }

    //显示菜单和任务按钮
    private ShowMenuAndTaskButton():void
    {
        this.tShowButton.play();
    }
}