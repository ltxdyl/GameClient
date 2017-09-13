class Base64{

    private static _base64:Base64 = null
    public static GetInst():Base64{
        if(this._base64 == null)
            this._base64 = new Base64()
        return this._base64
    }

    constructor()
    {

    }
}