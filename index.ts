import { ExpressRestApi } from "./src/apps/expressRestApi";
import { App } from "./src/apps/share/app";

const app  : App= new ExpressRestApi(3000)
app.run()