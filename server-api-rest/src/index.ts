import 'reflect-metadata';
import { startServer } from "./app";

(async function main() {
    const app = await startServer();
    app.listen(app.get('port'),
        () =>
            console.log(`Server on port ${app.get('port')}`));
})()