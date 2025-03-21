
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@1.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  name: string;
  email: string;
  message: string;
  recipientEmail: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message, recipientEmail } = await req.json() as EmailRequest;
    
    console.log(`Preparing to send email notification to ${recipientEmail}`);
    console.log(`From contact by ${name} (${email})`);
    console.log(`Message content length: ${message.length} characters`);
    console.log(`Using Resend API key: ${Deno.env.get("RESEND_API_KEY") ? "Key exists and is set" : "Key missing!"}`);
    
    if (!email || !email.includes('@') || !name || !message || !recipientEmail) {
      throw new Error("Missing or invalid required fields");
    }

    // Create email HTML content with improved formatting
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
        <h1 style="color: #333; border-bottom: 2px solid #5c6ac4; padding-bottom: 10px;">New Contact Message</h1>
        <p style="margin: 20px 0;"><strong>From:</strong> ${name} (${email})</p>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #5c6ac4;">
          <h2 style="color: #444; font-size: 18px; margin-top: 0;">Message:</h2>
          <p style="white-space: pre-wrap; line-height: 1.5;">${message}</p>
        </div>
        <p style="color: #666; font-size: 14px; margin-top: 30px; border-top: 1px solid #eaeaea; padding-top: 20px;">
          This message was sent from your portfolio website contact form.<br>
          You can reply directly to this email to respond to ${name}.
        </p>
      </div>
    `;

    // Sending the email with detailed logging
    console.log("Attempting to send email now with the following configuration:");
    console.log(`From: Juhi Portfolio <onboarding@resend.dev>`);
    console.log(`To: ${recipientEmail}`);
    console.log(`Subject: New Contact Message from ${name}`);
    console.log(`Reply-To: ${email}`);
    
    const { data, error } = await resend.emails.send({
      from: "Juhi Portfolio <onboarding@resend.dev>",
      to: recipientEmail,
      subject: `New Contact Message from ${name}`,
      html: emailHtml,
      reply_to: email,
    });

    if (error) {
      console.error("Error sending email:", error);
      console.error("Error details:", JSON.stringify(error));
      throw error;
    }

    console.log("Email sent successfully with ID:", data?.id);
    console.log("Full response:", JSON.stringify(data));

    return new Response(JSON.stringify({ success: true, messageId: data?.id }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in send-contact-email function:", error);
    console.error(`Error details: ${error.message}`);
    console.error(`Error stack: ${error.stack}`);
    
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
