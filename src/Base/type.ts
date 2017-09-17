//类型管理

//laya
import Handler = laya.utils.Handler;
import Loader = laya.net.Loader;
import Tween = laya.utils.Tween
import Ease = laya.utils.Ease
import LayaEvent = Laya.Event;
import Socket = Laya.Socket;
import Byte = Laya.Byte;

//fairygui
import GController = fairygui.Controller
import GObject = fairygui.GObject
import GGraph = fairygui.GGraph
import GGroup = fairygui.GGroup
import GImage = fairygui.GImage
import GLoader = fairygui.GLoader
import GMovieClip = fairygui.GMovieClip
import GTextField = fairygui.GTextField
import GRichTextField = fairygui.GRichTextField
import GTextInput = fairygui.GTextInput
import GComponent = fairygui.GComponent
import GList = fairygui.GList
import GRoot = fairygui.GRoot
import GLabel = fairygui.GLabel
import GButton = fairygui.GButton
import GComboBox = fairygui.GComboBox
import GProgressBar = fairygui.GProgressBar
import GSlider = fairygui.GSlider
import PopupMenu = fairygui.PopupMenu
import ScrollPane = fairygui.ScrollPane
import Transition = fairygui.Transition
import UIPackage = fairygui.UIPackage
import GWindow = fairygui.Window
import GObjectPool = fairygui.GObjectPool
import Relations = fairygui.Relations
import RelationType = fairygui.RelationType
import UIObjectFactory = fairygui.UIObjectFactory

//Poker
import PokerCard = Poker.PokerCard
import PokerDeck = Poker.PokerDeck

//枚举值

/**
 * 弹幕移动方向
 */
enum DanmakuMoveDir{LeftToRight,RightToLeft};

/**
 * 扑克牌花色
 */
enum PokerColor{Heart,Spade,Club,Diamond,Joker};

/**
 * 玩家状态
 */
enum PokerPlayerState{Normal,Lose};