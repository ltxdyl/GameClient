//弹幕窗口
class WndDanmaku extends WindowBase
{
    private static _wndDanmaku:WndDanmaku;
    public static Inst():WndDanmaku{
        if(this._wndDanmaku == null)
            this._wndDanmaku = new WndDanmaku();
        return this._wndDanmaku;
    }

    public constructor() {
        super();
    }
    
    protected onInit():void {
        this.name = "WndDanmaku";
        this.contentPane = fairygui.UIPackage.createObject("Danmaku",this.name).asCom;
    }

    protected EventBind():void{

    }

    protected OnShown(): void {

    }
}