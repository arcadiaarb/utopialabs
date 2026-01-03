import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendToMainframe = async (prompt: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are the UTOPIA DEAL_NEXUS, a specialized AI for high-value crypto deal flow.
        Your domain includes Market Making, Venture Capital, OTC Block Trades, and Strategic Marketing.
        You work closely with partners like Reform DAO and Kairon Labs.
        Your tone is professional, high-frequency, institutional, and cyberpunk.
        Use terms like "LIQUIDITY INJECTION", "ALPHA DETECTED", "OTC SETTLEMENT".
        Keep answers concise (under 50 words).`,
      },
    });

    return response.text || "ERROR: DATA_CORRUPTION_DETECTED // RETRY_LATER";
  } catch (error) {
    console.error("Mainframe Uplink Failed:", error);
    return "CRITICAL_FAILURE // CONNECTION_RESET // TRY_AGAIN";
  }
};