import { Router } from "express";
import { ChatController } from "../controller";

export class OpenAiRoutes {
    public router: Router;
    private chatController:ChatController

    constructor() {
        this.router = Router();
        this.chatController = ChatController.getInstance();
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.post('/chat', this.chatController.chat);
        // Add more routes here...
    }
}