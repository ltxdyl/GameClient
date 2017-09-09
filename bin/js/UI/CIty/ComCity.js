var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//主城面板组件
var ComCity = (function (_super) {
    __extends(ComCity, _super);
    function ComCity() {
        return _super.call(this) || this;
    }
    ComCity.prototype.constructFromXML = function (xml) {
        _super.prototype.constructFromXML.call(this, xml);
        this.tShowGirl = this.getTransition("tShowGirl");
        this.tShowFuncButtons = this.getTransition("tShowFuncButtons");
        this.EvenBind();
    };
    ComCity.prototype.EvenBind = function () {
    };
    ComCity.prototype.OnShow = function () {
        this.tShowGirl.play();
        this.tShowFuncButtons.play();
    };
    return ComCity;
}(fairygui.GComponent));
//# sourceMappingURL=ComCity.js.map