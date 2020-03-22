import app from './app';

import { pruebaConnections } from './database/database';

async function main() {
    await app.listen(4000);
    console.log('servidor iniciado');
    pruebaConnections;
};

main();
