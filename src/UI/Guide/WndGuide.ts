//引导界面
class WndGuide extends WindowBase{

    TopMask:fairygui.GImage;
    BottomMask:fairygui.GImage;
    LeftMask:fairygui.GImage;
    RightMask:fairygui.GImage;
    GuideIcon:fairygui.GLoader;

    private static _wndGuide:WndGuide = null;
    public static GetInst():WndGuide
    {
        if(this._wndGuide == null)
        {
            this._wndGuide = new WndGuide();
        }
        return this._wndGuide;
    }

    public constructor(){
        super();
    }

    protected onInit():void{
        this.name = "WndGuide";
        this.contentPane = fairygui.UIPackage.createObject("Task",this.name).asCom
        this.TopMask = this.contentPane.getChild("TopMask").asImage;
        this.BottomMask = this.contentPane.getChild("BottomMask").asImage;
        this.LeftMask = this.contentPane.getChild("LeftMask").asImage;
        this.RightMask = this.contentPane.getChild("RightMask").asImage;
        this.GuideIcon = this.contentPane.getChild("GuideIcon").asLoader;
    }

    protected OnShown():void{
        let obj = this.GetGuideUI("WndLogin.btnLogin")
        this.SetGuideMask(obj);
    }

    //获取引导UI
    protected GetGuideUI(guideObj:string):fairygui.GComponent{
        let objPaths = guideObj.split(".");
        let uiRoot = fairygui.GRoot.inst;
        let obj = (<WindowBase>uiRoot.getChild(objPaths[0])).contentPane;
        for(let i = 1;i < objPaths.length; i++)
        {
            obj = obj.getChild(objPaths[i]).asCom;
        }
        return obj.asCom;
    }

    //设置引导遮罩
    protected SetGuideMask(guideUI:fairygui.GComponent):void{
        let globalPos = guideUI.localToGlobal();
        let topPos = globalPos.y;
        let leftPos = globalPos.x;
        let bottomPos = globalPos.y + guideUI.height
        let rightPos = globalPos.x + guideUI.width;
        this.SetMask(topPos,bottomPos,leftPos,rightPos);
    }
 
    //设置遮罩位置
    protected SetMask(topPos,bottomPos,leftPos,rightPos):void{
        this.TopMask.height = topPos;
        this.TopMask.width = fairygui.GRoot.inst.width;
        this.TopMask.x = 0;
        this.TopMask.y = 0;

        this.BottomMask.height = fairygui.GRoot.inst.height - bottomPos;
        this.BottomMask.width = fairygui.GRoot.inst.width;
        this.BottomMask.x = 0;
        this.BottomMask.y = bottomPos;

        this.LeftMask.height = bottomPos - topPos;
        this.LeftMask.width = leftPos;
        this.LeftMask.x = 0;
        this.LeftMask.y = topPos;

        this.RightMask.height = bottomPos - topPos;
        this.RightMask.width = fairygui.GRoot.inst.width - rightPos;
        this.RightMask.x = rightPos;
        this.RightMask.y = topPos;
    }
}