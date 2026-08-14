import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

// Strip spaces in case the app password was copied with Google's grouping spaces
const gmailPass = (process.env.GMAIL_APP_PASSWORD ?? "").replace(/\s+/g, "");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "boltaypoday@gmail.com",
    pass: gmailPass,
  },
});

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    await transporter.sendMail({
      from: `"Boltay Poday Website" <boltaypoday@gmail.com>`,
      to: "boltaypoday@gmail.com",
      replyTo: email,
      subject: `New message from ${name} — Boltay Poday Website`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #16a34a; padding: 24px; border-radius: 12px 12px 0 0;">
            <h2 style="color: white; margin: 0;">🌿 New Contact Message</h2>
            <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0;">Boltay Poday Website</p>
          </div>
          <div style="background: #f9fafb; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 80px; font-size: 14px;">Name</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 14px;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #16a34a;">${email}</a></td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
            <p style="color: #6b7280; font-size: 14px; margin: 0 0 8px;">Message</p>
            <p style="color: #111827; white-space: pre-wrap; margin: 0; line-height: 1.6;">${message}</p>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              Reply directly to this email to respond to ${name}.
            </p>
          </div>
        </div>
      `,
    });

    return res.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ error: "Failed to send email. Please try again." });
  }
});

export default router;
