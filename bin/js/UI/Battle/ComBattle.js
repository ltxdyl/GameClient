var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//战斗组件
var ComBattle = (function (_super) {
    __extends(ComBattle, _super);
    function ComBattle() {
        return _super.call(this) || this;
    }
    ComBattle.prototype.constructFromXML = function (xml) {
        _super.prototype.constructFromXML.call(this, xml);
        this.leftHP = this.getChild("leftHP").asProgress;
        this.leftMP = this.getChild("leftMP").asProgress;
        this.rightHP = this.getChild("rightHP").asProgress;
        this.rightMP = this.getChild("rightMP").asProgress;
        this.EvenBind();
    };
    ComBattle.prototype.EvenBind = function () {
    };
    ComBattle.prototype.OnShow = function () {
        this.InitBattleInfo();
        //定时执行一次(间隔时间)
        Laya.timer.once(1000, this, this.Attack);
    };
    //初始化战斗数据
    ComBattle.prototype.InitBattleInfo = function () {
        this.leftHP.max = 10000;
        this.leftHP.value = this.leftHP.max;
        this.leftMP.max = 1000;
        this.leftMP.value = this.leftMP.max;
        this.rightHP.max = 8000;
        this.rightHP.value = this.rightHP.max;
        this.rightMP.max = 1200;
        this.rightMP.value = this.rightMP.max;
    };
    ComBattle.prototype.Attack = function () {
        this.leftHP.tweenValue(5000, 1);
    };
    return ComBattle;
}(GComponent));
//# sourceMappingURL=ComBattle.js.map