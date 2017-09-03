//引导界面
class WndGuide extends WindowBase{

    TopMask:fairygui.GImage;
    BottomMask:fairygui.GImage;
    LeftMask:fairygui.GImage;
    RightMask:fairygui.GImage;
    GuideIcon:fairygui.GLoader;

    public constructor(){
        super();
    }

    protected onInit():void{
        this.contentPane = fairygui.UIPackage.createObject("任务","引导界面").asCom
        this.TopMask = this.contentPane.getChild("TopMask").asImage;
        this.BottomMask = this.contentPane.getChild("BottomMask").asImage;
        this.LeftMask = this.contentPane.getChild("LeftMask").asImage;
        this.RightMask = this.contentPane.getChild("RightMask").asImage;
        this.GuideIcon = this.contentPane.getChild("GuideIcon").asLoader;
    }

    protected OnShown():void{
        
    }
 
    //设置遮罩位置
    protected SetMask(topPos,bottomPos,leftPos,rightPos):void{

    }
}