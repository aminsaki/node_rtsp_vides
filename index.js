const express = require('express')
const app = express()
const Stream = require('node-rtsp-stream')
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);


const port = 3000
const wsPort = 9999

app.get('/', function (req, res) {

    try {
        const child_process = require('child_process');

        res.header('content-type', 'video/webm');

        const cmd = `ffmpeg -i rtsp://rtsp:Ashkan123@172.16.60.121 -c:v copy -c:a copy -bsf:v h264_mp4toannexb -maxrate 500k -f matroska -`.split(' ');
          console.log(cmd);
        var child = child_process.spawn(cmd[0], cmd.splice(1), {
            stdio: ['ignore', 'pipe', process.stderr]
        });

        child.stdio[1].pipe(res);

        res.on('close', () => {
            // Kill ffmpeg if the flow is stopped by the browser
            child.kill();
        });
    } catch (e) {
        console.error(e)
    }

})

app.get('/camera1', function (req, res) {

    try {
        const child_process = require('child_process');

        res.header('content-type', 'video/webm');

        const cmd = `ffmpeg -i rtsp://rtsp:Ashkan123@172.16.60.121 -c:v copy -c:a copy -bsf:v h264_mp4toannexb -maxrate 500k -f matroska -`.split(' ');
        console.log(cmd);
        var child = child_process.spawn(cmd[0], cmd.splice(1), {
            stdio: ['ignore', 'pipe', process.stderr]
        });

        child.stdio[1].pipe(res);

        res.on('close', () => {
            // Kill ffmpeg if the flow is stopped by the browser
            child.kill();
        });
    } catch (e) {
        console.error(e)
    }

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

