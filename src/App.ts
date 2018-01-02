import { ServerManager } from "./UpnpServer/ServerManager";
import * as express from "express";


const app = express();
const port = process.env.port || "5001";
const upnpServer = new ServerManager();

let counter = 1;

app.get('/start',(req,res) => {
    upnpServer.Start();
    res.send(`upnp server started`);
});

app.get('/add',(req,res) => {
    const mount = `Movies${counter}`;
    counter++;
    upnpServer.AddDirectory('/home/stewart/Shared/Media/Movies/',mount );
    res.send(`Added directory: ${mount}`);
})

app.get('/stop',(req,res) => {
    upnpServer.Stop();
    res.send(`upnp server stopped`);
});


app.listen(port, err => {
    console.log(`Server running on port ${port}`);
});