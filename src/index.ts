import Server from './server';

const server = new Server();

server.addHandlers();

server.start();

export default server;
