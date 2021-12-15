import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { env } from "node:process";

import connect from "connect";
import serveStatic from "serve-static";

const PORT = env.PORT || 8080;

connect()
  .use(serveStatic(dirname(fileURLToPath(import.meta.url))))
  .listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
