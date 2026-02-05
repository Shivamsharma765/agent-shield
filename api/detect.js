export default function handler(req, res) {

    const API_KEY = "hackathon-secret-key"

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" })
    }

    // ✅ Read x-api-key header (Hackathon requirement)
    const apiKey = req.headers["x-api-key"]

    if (apiKey !== API_KEY) {
        return res.status(401).json({ error: "Invalid API key" })
    }

    const { message } = req.body || {}

    const text = message?.toLowerCase() || ""

    const scamKeywords = ["upi", "account", "kyc", "urgent", "transfer", "link"]

    const isScam = scamKeywords.some(word => text.includes(word))

    res.status(200).json({
        scam_confidence: isScam ? 0.92 : 0.15,
        is_scam: isScam,
        extracted_intelligence: isScam ? [
            {
                type: "upi_id",
                value: "demo@upi",
                confidence: 0.85
            }
        ] : []
    })
}
