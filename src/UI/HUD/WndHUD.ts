//HUD窗口
class WndHUD extends WindowBase
{
    private tShowButton:fairygui.Transition;
    private btnCity:fairygui.GButton;
    private btnBag:fairygui.GButton;
    private btnBattle:fairygui.GButton;
    private btnRole:fairygui.GButton;
    private btnPet:fairygui.GButton;

    public constructor() {
        super();
    }
    
    protected onInit():void {
        this.contentPane = fairygui.UIPackage.createObject("HUD","WndHUD").asCom;

        this.tShowButton = this.contentPane.getTransition("tShowButton")
        this.btnCity = this.contentPane.getChild("btnCity").asButton;
        this.btnBag = this.contentPane.getChild("btnBag").asButton;
        this.btnBattle = this.contentPane.getChild("btnBattle").asButton;
        this.btnRole = this.contentPane.getChild("btnRole").asButton;
        this.btnPet = this.contentPane.getChild("btnPet").asButton;
        this.EventBind();
    }

    protected EventBind():void{
        this.btnCity.onClick(this,this.OnBtnCityClick);
        this.btnBag.onClick(this,this.OnBtnBagClick);
        this.btnBattle.onClick(this,this.OnBtnBattleClick);
        this.btnRole.onClick(this,this.OnBtnRoleClick);
        this.btnPet.onClick(this,this.OnBtnPetClick);
    }

    protected OnShown(): void {
        this.ShowMenuAndTaskButton();
    }

    //主城
    protected OnBtnCityClick():void
    {
        this.ShowMenuAndTaskButton();
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