import { GoogleGenerativeAI } from '@google/generative-ai'

// Initialize the Google Generative AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

// Function to generate a response using Gemini
export async function generateResponse(prompt: string): Promise<string> {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

  const result = await model.generateContent(prompt)
  const response = await result.response
  return response.text()
}

