//HUD窗口
class WndHUD extends WindowBase
{
    public constructor() {
        super();
    }
    
    protected onInit():void {
        this.contentPane = fairygui.UIPackage.createObject("HUD","WndHUD").asCom;
        this.eventBind();
    }

    protected eventBind():void{

    }

    protected OnShown(): void {

    }
}