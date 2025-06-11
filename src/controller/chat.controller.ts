import { Request, Response } from "express";
import { OpenAiService } from "../service";
import { appConfig } from "../config";

export class ChatController {
    private static instance : ChatController;
    public static getInstance() {
        if (!ChatController.instance) {
            ChatController.instance = new ChatController();
        }
        return ChatController.instance;
    }
    
    private constructor() {}

    chat = async (req: Request, res: Response) => {
        const { prompt, oldContent } = req.body;
        try{
            const response = await OpenAiService.getInstance().chat(prompt, appConfig.OPENAI_MODEL, oldContent);
            res.json({ response });
        }catch(err){
            console.error( "Error in chat controller", err);
            res.status(500).json({ error: 'Internal Server Error.' });
        }
    };
}