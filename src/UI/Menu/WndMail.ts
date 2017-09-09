//邮件窗口
class WndMail extends WindowBase
{
    private static _wndMail:WndMail;
    public static Inst():WndMail{
        if(this._wndMail == null)
            this._wndMail = new WndMail();
        return this._wndMail;
    }

    public constructor() {
        super();
    }
    
    protected onInit():void {
        this.name = "WndMail";
        this.contentPane = fairygui.UIPackage.createObject("Menu",this.name).asCom;
        this.modal = true;
    }

    protected EventBind():void{

    }

    protected OnShown(): void {

    }
}