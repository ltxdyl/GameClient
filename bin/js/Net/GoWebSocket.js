var LayaEvent = Laya.Event;
var Socket = Laya.Socket;
var Byte = Laya.Byte;
var GoWebSocket = (function () {
    function GoWebSocket() {
        this.connect();
    }
    GoWebSocket.prototype.connect = function () {
        this.socket = new Socket();
        this.socket.connect(ServerConfig.host, ServerConfig.port);
        this.output = this.socket.output;
        this.socket.on(LayaEvent.OPEN, this, this.onSocketOpen);
        this.socket.on(LayaEvent.CLOSE, this, this.onSocketClose);
        this.socket.on(LayaEvent.MESSAGE, this, this.onMessageReveived);
        this.socket.on(LayaEvent.ERROR, this, this.onConnectError);
    };
    GoWebSocket.prototype.onSocketOpen = function () {
        console.log("Connected");
        // 发送字符串
        this.socket.send(JSON.stringify({ Login: { Name: '1' } }));
        // 使用output.writeByte发送
        // var message: string = "demonstrate <output.writeByte>";
        // for (var i: number = 0; i < message.length; ++i) {
        // 	this.output.writeByte(message.charCodeAt(i));
        // }
        this.socket.flush();
    };
    GoWebSocket.prototype.onSocketClose = function () {
        console.log("Socket closed");
    };
    GoWebSocket.prototype.onMessageReveived = function (message) {
        console.log("Message from server:");
        if (typeof message == "string") {
            console.log(message);
        }
        else if (message instanceof ArrayBuffer) {
            console.log(new Byte(message).readUTFBytes());
        }
        this.socket.input.clear();
    };
    GoWebSocket.prototype.onConnectError = function (e) {
        console.log("error");
    };
    return GoWebSocket;
}());
//# sourceMappingURL=GoWebSocket.js.map