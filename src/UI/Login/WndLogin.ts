//测试界面
class WndLogin extends WindowBase
{
    private infos:fairygui.GTextField;
    private btnLogin:fairygui.GButton;

    public constructor() {
        super();
    }
    
    protected onInit():void {
        this.contentPane = fairygui.UIPackage.createObject("Login","WndLogin").asCom;
        this.infos = this.contentPane.getChild("infos").asTextField;
        this.btnLogin = this.contentPane.getChild("btnLogin").asButton;

        this.eventBind();
    }

    protected eventBind():void{
        this.btnLogin.onClick(this,this.btnLoginOnClick)
    }

    protected OnShown(): void {

    }

    protected btnLoginOnClick():void{
        SingleWnd.GetInst().wndBattle.show();
        this.hide();
    }
}