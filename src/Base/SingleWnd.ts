//单例窗口类
class SingleWnd{

    private static _inst = null;
    public static GetInst(){
        if (this._inst == null){
            this._inst = new SingleWnd();
        }
        return this._inst;
    }
    
    private _wndtest:Wndtest = null;
    get wndtest():Wndtest
    {
        if(this._wndtest == null)
        {
            this._wndtest = new Wndtest();
            this._wndtest.animation = ["fade_in","shrink"];
        }
        return this._wndtest;
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

}