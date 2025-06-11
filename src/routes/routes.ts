import { Router } from "express";
import { OpenAiRoutes } from "./openai.routes";

export class Routes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initialuizeRoutes();
    }

    private initialuizeRoutes() {
        this.router.use('/openai', new OpenAiRoutes().router);
        // Add more routes here...
    }
}