//类型管理
//laya
var Handler = laya.utils.Handler;
var Loader = laya.net.Loader;
var Tween = laya.utils.Tween;
var Ease = laya.utils.Ease;
var LayaEvent = Laya.Event;
var Socket = Laya.Socket;
var Byte = Laya.Byte;
//fairygui
var GController = fairygui.Controller;
var GObject = fairygui.GObject;
var GGraph = fairygui.GGraph;
var GGroup = fairygui.GGroup;
var GImage = fairygui.GImage;
var GLoader = fairygui.GLoader;
var GMovieClip = fairygui.GMovieClip;
var GTextField = fairygui.GTextField;
var GRichTextField = fairygui.GRichTextField;
var GTextInput = fairygui.GTextInput;
var GComponent = fairygui.GComponent;
var GList = fairygui.GList;
var GRoot = fairygui.GRoot;
var GLabel = fairygui.GLabel;
var GButton = fairygui.GButton;
var GComboBox = fairygui.GComboBox;
var GProgressBar = fairygui.GProgressBar;
var GSlider = fairygui.GSlider;
var PopupMenu = fairygui.PopupMenu;
var ScrollPane = fairygui.ScrollPane;
var Transition = fairygui.Transition;
var UIPackage = fairygui.UIPackage;
var GWindow = fairygui.Window;
var GObjectPool = fairygui.GObjectPool;
var Relations = fairygui.Relations;
var RelationType = fairygui.RelationType;
var UIObjectFactory = fairygui.UIObjectFactory;
//Poker
var PokerCard = Poker.PokerCard;
var PokerDeck = Poker.PokerDeck;
//枚举值
/**
 * 弹幕移动方向
 */
var DanmakuMoveDir;
(function (DanmakuMoveDir) {
    DanmakuMoveDir[DanmakuMoveDir["LeftToRight"] = 0] = "LeftToRight";
    DanmakuMoveDir[DanmakuMoveDir["RightToLeft"] = 1] = "RightToLeft";
})(DanmakuMoveDir || (DanmakuMoveDir = {}));
;
/**
 * 扑克牌花色
 */
var PokerColor;
(function (PokerColor) {
    PokerColor[PokerColor["Heart"] = 0] = "Heart";
    PokerColor[PokerColor["Spade"] = 1] = "Spade";
    PokerColor[PokerColor["Club"] = 2] = "Club";
    PokerColor[PokerColor["Diamond"] = 3] = "Diamond";
    PokerColor[PokerColor["Joker"] = 4] = "Joker";
})(PokerColor || (PokerColor = {}));
;
/**
 * 玩家状态
 */
var PokerPlayerState;
(function (PokerPlayerState) {
    PokerPlayerState[PokerPlayerState["Normal"] = 0] = "Normal";
    PokerPlayerState[PokerPlayerState["Lose"] = 1] = "Lose";
})(PokerPlayerState || (PokerPlayerState = {}));
;
//# sourceMappingURL=type.js.map