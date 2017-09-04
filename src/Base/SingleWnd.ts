//单例窗口类
class SingleWnd{

    private static _inst = null;
    public static GetInst(){
        if (this._inst == null){
            this._inst = new SingleWnd();
        }
        return this._inst;
    }
    
    //登陆界面
    private _wndLogin:WndLogin = null;
    get wndLogin():WndLogin
    {
        if(this._wndLogin == null)
        {
            this._wndLogin = new WndLogin();
            this._wndLogin.animation = ["fade_in","shrink"];
        }
        return this._wndLogin;
    }

    //任务引导主界面
    private _wndGuide:WndGuide = null;
    get wndGuide():WndGuide
    {
        if(this._wndGuide == null)
        {
            this._wndGuide = new WndGuide();
        }
        return this._wndGuide;
    }

    //战斗界面
    private _wndBattle:WndBattle = null;
    get wndBattle():WndBattle
    {
        if(this._wndBattle == null)
        {
            this._wndBattle == new WndBattle();
        }
        return this._wndBattle;
    }

    //HUD界面
    private _wndHUD:WndHUD = null;
    get wndHUD():WndHUD
    {
        if(this._wndHUD == null)
        {
            this._wndHUD = new WndHUD();
        }
        return this._wndHUD;
    }
}