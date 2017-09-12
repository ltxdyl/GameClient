var GTextField = fairygui.GTextField;
//弹幕移动方向
var DanmakuMoveDir;
(function (DanmakuMoveDir) {
    DanmakuMoveDir[DanmakuMoveDir["Left"] = 0] = "Left";
    DanmakuMoveDir[DanmakuMoveDir["Right"] = 1] = "Right";
})(DanmakuMoveDir || (DanmakuMoveDir = {}));
;
//弹幕管理类
var DanmakuMaster = (function () {
    function DanmakuMaster() {
        this.moveDir = DanmakuMoveDir.Left;
        this.maxNum = 30;
        this.moveSpeed = 10;
    }
    //初始化字幕组件池
    DanmakuMaster.prototype.initTextPool = function () {
        this.textPool = new Array();
        for (var i = 0; i < this.maxNum; i++) {
            this.textPool.push(new GTextField());
        }
    };
    //获取可用的组件
    DanmakuMaster.prototype.GetFromPool = function () {
        return this.textPool.pop();
    };
    //将组件放回池子
    DanmakuMaster.prototype.ReturnToPool = function (textField) {
        this.textPool.push(textField);
    };
    //新增一条弹幕
    DanmakuMaster.prototype.AddOneDanmaku = function (content) {
        var textField = this.GetFromPool();
    };
    return DanmakuMaster;
}());
//# sourceMappingURL=DanmakuMaster.js.map