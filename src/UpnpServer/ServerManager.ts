import * as UpnpServer from "upnpserver"

export class ServerManager{
    private server:any;
    constructor() {
        this.server = new UpnpServer({},[
        ]);
    }

    public Start():void{
        this.server.start();
    }

    public Stop():void{
        this.server.stop();
    }

    public AddDirectory(path:string, mountPoint:string){
        this.server.addDirectory(mountPoint, path, {});
    }
}



