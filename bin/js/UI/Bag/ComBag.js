var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//主城面板组件
var ComBag = (function (_super) {
    __extends(ComBag, _super);
    function ComBag() {
        return _super.call(this) || this;
    }
    ComBag.prototype.constructFromXML = function (xml) {
        _super.prototype.constructFromXML.call(this, xml);
        this.EvenBind();
    };
    ComBag.prototype.EvenBind = function () {
    };
    return ComBag;
}(fairygui.GComponent));
//# sourceMappingURL=ComBag.js.map