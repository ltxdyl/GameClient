//测试界面
class WndLogin extends WindowBase
{
    private infos:fairygui.GTextField;

    public constructor() {
        super();
    }
    
    protected onInit():void {
        this.contentPane = fairygui.UIPackage.createObject("Login","WndLogin").asCom;
        this.infos = this.contentPane.getChild("infos").asTextField;
    }

    protected OnShown(): void {

    }
}