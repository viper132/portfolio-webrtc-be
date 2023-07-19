import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ExpressPeerServer } from 'peer';
import corsOptions from './src/data/cors.js';
import peerOptions from './src/data/peer.js';
import socketConnection from './src/socket/index.js';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: corsOptions,
});

// setup app
app.use(cors(corsOptions));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// add peer server
const peerServer = ExpressPeerServer(server, peerOptions);
app.use('/peerServer', peerServer);

io.on('connection', socketConnection);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
