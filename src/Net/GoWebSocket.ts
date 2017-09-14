//网络管理类
class GoWebSocket{

	private connected:boolean;
    private socket: Socket;
	private output: Byte;

	private static _goWebSocket:GoWebSocket = null;
	public static GetInst():GoWebSocket
	{
		if(this._goWebSocket == null)
        {
			this._goWebSocket = new GoWebSocket();
        }
		return this._goWebSocket;
	}

    constructor()
    {
		this.connected = false;
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
		this.connected = true;
		console.log("Connected");
		// 发送字符串
		//let sendStr = JSON.stringify({Login:{ Name:'1'}})
		//this.socket.send(sendStr);

		// 使用output.writeByte发送
		// var message: string = "demonstrate <output.writeByte>";
		// for (var i: number = 0; i < message.length; ++i) {
		// 	this.output.writeByte(message.charCodeAt(i));
		// }
		//this.socket.flush();
	}

	private onSocketClose(): void {
		this.connected = false;
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
		this.connected = false;
		console.log("error");
	}

	public send(content:string):void{
		if(this.connected == false)
		{
			console.debug("socket closed")
			return;
		}
        console.info("send:" + content);
		this.socket.send(content);
        this.socket.flush();
	}
}