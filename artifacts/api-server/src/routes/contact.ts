import { Router } from "express";

const router = Router();

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return res.status(500).json({ error: "Email service not configured." });
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New message from ${name} — Boltay Poday Website`,
        from_name: "Boltay Poday Website",
        name,
        email,
        message,
      }),
    });

    const text = await response.text();
    console.log("Web3Forms status:", response.status, "body:", text.slice(0, 300));

    let data: { success: boolean; message?: string };
    try {
      data = JSON.parse(text);
    } catch {
      return res.status(500).json({ error: `Unexpected response (status ${response.status}).` });
    }

    if (!data.success) {
      return res.status(500).json({ error: data.message ?? "Failed to send email." });
    }

    return res.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return res.status(500).json({ error: "Failed to send email. Please try again." });
  }
});

export default router;
