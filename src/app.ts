import express, { Request, Response, NextFunction } from "express";

const app = express();
app.use(express.json());


app.use("./", (req: Request, res: Response, next: NextFunction) => {
    console.log("Acessou a rota: " + req.url);
    next();
}
)



export default app;