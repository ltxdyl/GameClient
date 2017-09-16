/**弹幕管理类*/
class DanmakuMaster {

    public moveDir:DanmakuMoveDir;
    public maxNum:number;//最大弹幕数量
    public moveSpeed:number;//移动速度(移动一屏／秒)

    private textPool:Array<DanmakuItem>;//弹幕组件池

    constructor()
    {
        this.moveDir = DanmakuMoveDir.RightToLeft;
        this.maxNum = 30;
        this.moveSpeed = 10;
        
        this.initTextPool();
    }

    //初始化字幕组件池
    private initTextPool():void{
        this.textPool = new Array<DanmakuItem>();
        for(var i = 0; i < this.maxNum; i++)
        {
            let textField =  <DanmakuItem>UIPackage.createObject("Danmaku","DanmakuItem")
            this.textPool.push(textField);
        }
    }

    //获取可用的组件
    public getFromPool():DanmakuItem{
        let textField:DanmakuItem = this.textPool.pop();
        if (textField != undefined)
        {
            textField.visible = true;
            return textField;
        }
    }

    //将组件放回池子
    public returnToPool(textField:DanmakuItem):void{
        textField.visible = false;
        this.textPool.push(textField);
    }

    //获取起止x轴坐标
    public getPosX(textObj:DanmakuItem){
        let posX:number[] = [0,0];
        switch (this.moveDir) {
            case DanmakuMoveDir.RightToLeft:
                posX[0] = GRoot.inst.width;
                posX[1] = -textObj.width;
                break;
            case DanmakuMoveDir.LeftToRight:
                posX[0] = -textObj.width;
                posX[1] = GRoot.inst.width;
                break;
            default:
                posX[0] = GRoot.inst.width;
                posX[1] = -textObj.width;
                break;
        }
        return posX;
    }

    //获取y轴坐标
    public getPosY():number{
        let posY = Math.random() * GRoot.inst.height;
        return posY;
    }

    //获取移动时间
    public getMoveTime():number{
        let moveTime:number = (this.moveSpeed + Math.random() * 3) * 1000;//毫秒
        return moveTime;
    }

    //内容整理
    public formatContent(content:string):string{
        let result = content;
        return result;
    }

    //获取颜色
    public GetContentColor(content:string):string{
        for (var key in ColorConfig) {
           if(content.indexOf(key) > 0)
           {
                return ColorConfig[key];
           }
        }
        return "#FFFFFF";
    }
}