// This is where the ENV variables will be switched during production
let ARIA_SERVER_URL;

switch (process.env.NODE_ENV) {
    case 'production':
        ARIA_SERVER_URL = 'http://api.dev.antbnt.me';
        break;
    case 'development':
        ARIA_SERVER_URL = 'http://localhost:8080';
        break;
    default:
        throw Error('Invalid NODE_ENV specified');
}

export default { ARIA_SERVER_URL };
