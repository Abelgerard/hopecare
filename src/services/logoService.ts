import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const CACHE_KEY = 'hcf_logo_cache_v3';
const CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours

export async function generateLogo() {
  // Check cache first
  const cached = localStorage.getItem(CACHE_KEY);
  if (cached) {
    const { url, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_EXPIRY) {
      return url;
    }
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: "A minimalist, high-contrast vector logo icon for 'Hope Care Foundation'. The design features a simple, bold heart shape cradled by two stylized hands. Use only two colors: deep blue (#00288e) and vibrant orange (#fd761a). The style is clean, flat, and modern. Transparent background (alpha channel), no background color, no white background, no text in the image, high resolution, professional non-profit aesthetic. CRITICAL: No text, no words, no letters inside the image.",
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1"
        }
      }
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const url = `data:image/png;base64,${part.inlineData.data}`;
        // Cache the result
        localStorage.setItem(CACHE_KEY, JSON.stringify({ url, timestamp: Date.now() }));
        return url;
      }
    }
  } catch (error: any) {
    // If we have a cached version, return it even if expired if the API fails
    if (cached) {
      const { url } = JSON.parse(cached);
      return url;
    }
    throw error;
  }
  return null;
}
