/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Public {

	export class UIModalWindowBg extends fairygui.GComponent {

		public background:fairygui.GImage;
		public btnClose:fairygui.GButton;

		public static URL:string = "ui://ti8p7cqzli470";

		public static createInstance():UIModalWindowBg {
			return <UIModalWindowBg><any>(fairygui.UIPackage.createObject("Public","ModalWindowBg"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.background = <fairygui.GImage><any>(this.getChild("background"));
			this.btnClose = <fairygui.GButton><any>(this.getChild("btnClose"));
		}
	}
}