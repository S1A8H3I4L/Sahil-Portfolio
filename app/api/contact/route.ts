// app/api/contact/route.ts — Contact form API Route

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Save message to Supabase
    const { error } = await supabase
      .from("contact_messages")
      .insert([{ name, email, message }]);

    if (error) {
  console.error("Supabase insert error:", error.message);
  return NextResponse.json(
    { error: "Failed to save message." },
    { status: 500 }
  );
}

// Send email to you
const { data, error: resendError } = await resend.emails.send({
  from: "Sahil Panchal Portfolio <onboarding@resend.dev>",
  to: process.env.CONTACT_EMAIL!,
  replyTo: email,
  subject: `🚀 New Portfolio Inquiry from ${name}`,
  html: `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px;border:1px solid #e5e5e5;border-radius:10px">
      <h2 style="color:#2563eb;">📩 New Portfolio Contact</h2>

      <table style="width:100%;border-collapse:collapse">
        <tr>
          <td><strong>Name</strong></td>
          <td>${name}</td>
        </tr>
        <tr>
          <td><strong>Email</strong></td>
          <td>${email}</td>
        </tr>
      </table>

      <hr style="margin:20px 0">

      <h3>Message</h3>

      <p style="white-space:pre-line">${message}</p>

      <hr>

      <small>Sent from your Portfolio Contact Form</small>
    </div>
  `,
});

if (resendError) {
  console.error("Resend error:", resendError);
  return NextResponse.json(
    { error: "Email could not be sent." },
    { status: 500 }
  );
}

console.log("Email sent:", data);

return NextResponse.json({
  success: true,
  message: "Message received! I'll get back to you soon."
});
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
