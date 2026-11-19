import express, { Request, Response, NextFunction } from "express";

const app = express();
app.use(express.json());


app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Acessou a rota: " + req.url);
    next();
}
)



export default app;