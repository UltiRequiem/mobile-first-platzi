import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { env } from "node:process";

import connect from "connect";
import serveStatic from "serve-static";

const PORT = env.PORT || 8080;

const app = connect();

app.use(serveStatic(dirname(fileURLToPath(import.meta.url))));

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
