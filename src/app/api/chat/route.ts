import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers';

const gemini_api_key = process.env.GEMINI_API_KEY;

if (!gemini_api_key) {
  throw new Error("GEMINI_API_KEY is not defined in environment variables.");
}

const genAI = new GoogleGenerativeAI(gemini_api_key);

const model = genAI.getGenerativeModel({ model: "gemini-pro" });
const CHAT_HISTORY_COOKIE = 'chat_history';

export async function POST(req: Request) {
    try {
        const { message, category, description } = await req.json();

        // Get existing chat history from cookies
        const cookieStore = await cookies();
        const storedHistory = cookieStore.get(CHAT_HISTORY_COOKIE)?.value;

        let chatHistory = [];

        if (storedHistory) {
            try{
              chatHistory = JSON.parse(storedHistory);
            }catch(e){
               console.error("Error parsing chat history", e)
            }
        }

        chatHistory.push({ role: 'user', parts: [{text:message }] });

        let prompt = `
        You are a legal assistant that helps users by providing legal information based on Bangladeshi laws that are related to their messages. 
        `;


        if (category) {
            prompt += `\n Provide legal help based on ${category} laws.`;
        }
        if (description) {
            prompt += `\n Also consider this description: ${description}`;
        }


        const chat = model.startChat({
            history: chatHistory,
        });

        const result = await chat.sendMessage(prompt)
        const response = await result.response;
        const text = response.text();

        chatHistory.push({ role: 'assistant', parts: [{ text }] });

         // Store the updated chat history back in the cookie
        const stringifiedChatHistory = JSON.stringify(chatHistory);
         cookieStore.set({
            name: CHAT_HISTORY_COOKIE,
            value: stringifiedChatHistory,
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 24 * 7, //7 days
          });

        return NextResponse.json({ reply: text }, { status: 200 });
    } catch (error: any) {
        console.error("Gemini API Error:", error);
        return NextResponse.json(
            { error: "Failed to generate response" },
            { status: 500 }
        );
    }
}