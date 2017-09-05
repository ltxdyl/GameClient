//测试界面
class WndLogin extends WindowBase
{
    private btnLogin:fairygui.GButton;

    public constructor() {
        super();
    }
    
    protected onInit():void {
        this.contentPane = fairygui.UIPackage.createObject("Login","WndLogin").asCom;
        this.btnLogin = this.contentPane.getChild("btnLogin").asButton;

        this.EventBind();
    }

    protected EventBind():void{
        this.btnLogin.onClick(this,this.OnBtnLoginOnClick)
    }

    protected OnShown(): void {

    }

    protected OnBtnLoginOnClick():void{
        SingleWnd.GetInst().wndHUD.show();
        this.hide();
    }
}