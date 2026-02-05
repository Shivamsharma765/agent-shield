export default async function handler(req, res) {

    const API_KEY = "hackathon-secret-key";

    // Handle CORS Preflight
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    try {

        // API Key Validation
        const apiKey =
            req.headers["x-api-key"] ||
            req.headers["X-API-Key"] ||
            req.headers["authorization"]?.replace("Bearer ", "");

        if (apiKey !== API_KEY) {
            return res.status(401).json({ error: "Invalid API key" });
        }

        // Allow GET for health check
        if (req.method === "GET") {
            return res.status(200).json({ status: "Honeypot Active" });
        }

        // Enforce POST for detection
        if (req.method !== "POST") {
            return res.status(405).json({ error: "Method not allowed" });
        }

        const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
        const message = body.message || "";
        const text = message.toLowerCase();

        const scamKeywords = ["upi", "account", "kyc", "urgent", "transfer", "link"];

        const isScam = scamKeywords.some(word => text.includes(word));

        return res.status(200).json({
            scam_confidence: isScam ? 0.92 : 0.15,
            is_scam: isScam,
            extracted_intelligence: isScam ? [
                {
                    type: "upi_id",
                    value: "demo@upi",
                    confidence: 0.85
                }
            ] : []
        });

    } catch (error) {

        console.error("Function Error:", error.message);

        return res.status(500).json({
            error: "Internal Server Error"
        });
    }
}
