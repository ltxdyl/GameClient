import LayaEvent = Laya.Event;
import Socket = Laya.Socket;
import Byte = Laya.Byte;

class GoWebSocket{
    private socket: Socket;
	private output: Byte;

    constructor()
    {
        this.connect();
    }

    private connect(): void {
	    this.socket = new Socket();
		this.socket.connect(ServerConfig.host,ServerConfig.port);
		this.output = this.socket.output;
		this.socket.on(LayaEvent.OPEN, this, this.onSocketOpen);
		this.socket.on(LayaEvent.CLOSE, this, this.onSocketClose);
		this.socket.on(LayaEvent.MESSAGE, this, this.onMessageReveived);
		this.socket.on(LayaEvent.ERROR, this, this.onConnectError);
	}

	private onSocketOpen(): void {
		console.log("Connected");
		// 发送字符串
		this.socket.send(JSON.stringify({Login:{ Name:'1'}}));

		// 使用output.writeByte发送
		// var message: string = "demonstrate <output.writeByte>";
		// for (var i: number = 0; i < message.length; ++i) {
		// 	this.output.writeByte(message.charCodeAt(i));
		// }
		this.socket.flush();
	}

	private onSocketClose(): void {
		console.log("Socket closed");
	}

	private onMessageReveived(message: any): void {
		console.log("Message from server:");
		if (typeof message == "string") {
			console.log(message);
		}
		else if (message instanceof ArrayBuffer) {
			console.log(new Byte(message).readUTFBytes());
		}
		this.socket.input.clear();
	}

	private onConnectError(e: Event): void {
		console.log("error");
	}
}