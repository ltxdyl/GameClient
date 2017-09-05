//战斗界面
class WndBattle extends WindowBase
{
    private btnSetting:fairygui.GButton;

    public constructor(){
        super();
    }

    protected onInit():void {
        this.contentPane = fairygui.UIPackage.createObject("Battle","WndBattle").asCom
        this.btnSetting = this.contentPane.getChild("btnSetting").asButton;
    }

    protected OnShown():void{

    }
}