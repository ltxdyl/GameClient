//测试界面
class WndLogin extends WindowBase
{
    private infos:fairygui.GTextField;

    public constructor() {
        super();
    }
    
    protected onInit():void {
        this.contentPane = fairygui.UIPackage.createObject("登陆","登陆界面").asCom;
        this.infos = this.contentPane.getChild("infos").asTextField;
    }

    protected OnShown(): void {

    }
}