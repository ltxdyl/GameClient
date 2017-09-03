//测试界面
class Wndtest extends WindowBase
{
    public constructor() {
        super();
    }
    
    protected onInit():void {
        this.contentPane = fairygui.UIPackage.createObject("游戏测试","测试界面").asCom;
    }

    protected OnShown(): void {

    }
}