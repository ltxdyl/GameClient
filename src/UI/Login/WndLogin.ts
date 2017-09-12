//测试界面
class WndLogin extends WindowBase
{
    private btnLogin:fairygui.GButton;

    private static _wndLogin:WndLogin = null;
    public static GetInst():WndLogin
    {
        if(this._wndLogin == null)
        {
            this._wndLogin = new WndLogin();
            this._wndLogin.animation = ["fade_in","shrink"];
        }
        return this._wndLogin;
    }

    public constructor() {
        super();
    }
    
    protected onInit():void {
        this.name = "WndLogin";
        this.contentPane = fairygui.UIPackage.createObject("Login",this.name).asCom;
        this.btnLogin = this.contentPane.getChild("btnLogin").asButton;

        this.EventBind();
    }

    protected EventBind():void{
        this.btnLogin.onClick(this,this.OnBtnLoginOnClick)
    }

    protected OnShown(): void {

    }

    protected OnBtnLoginOnClick():void{
        let websocket = new GoWebSocket();
        //WndHUD.GetInst().show();
        //this.hide();
    }
}