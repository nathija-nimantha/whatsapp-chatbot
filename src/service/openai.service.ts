import OpenAI from "openai";
import { appConfig } from "../config";

export class OpenAiService { 
    private openAi:OpenAI;
    private static instance : OpenAiService;
    static getInstance() {
        if (!OpenAiService.instance) {
            OpenAiService.instance = new OpenAiService();
        }
        return OpenAiService.instance;
    }

    private constructor() { 
        this.openAi = new OpenAI({
            apiKey: appConfig.OPENAI_API_KEY,
        });
    }

    async chat(prompt:string, model:string = appConfig.OPENAI_MODEL, oldContent?:[]){
        const chatResponse = await this.openAi.chat.completions.create({
            model: model,
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant of Nimantha Tours. You are here to help with any problem related to tours and travels related with Nimantha Tours."
                },
                ...(oldContent || []),
                {
                    role: "user",
                    content: prompt
                },
            ],
            max_tokens: 1000,
            temperature: 0.8
        })
        return chatResponse.choices[0].message?.content || "No Response";
    }
}