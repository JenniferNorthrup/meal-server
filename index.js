const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Server here!';
        }
    });

    server.route(routes);
    await server.start();
    console.log("Looks like it worked");
    console.log('Server running at: %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log("Something went terribly wrong");
    console.log(err);
    process.exit(1);
});

init();