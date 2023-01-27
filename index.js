import express from "express";
import cors from "cors";
import { PORT } from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import productosRoutes from "./routes/productos.routes.js";

const app = express();

//const corsOptions ={
    //accessControlAllowOrigin: *
    //credentials:true,           //access-control-allow-credentials:true
    //optionSuccessStatus:200
//}
app.use(cors());

app.use(express.json());

app.use(indexRoutes);
app.use(productosRoutes);

app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);
