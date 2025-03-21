
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
    
    console.log(`Sending email notification to ${recipientEmail} from contact by ${name} (${email})`);

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: recipientEmail,
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Contact Message</h1>
          <p style="margin: 20px 0;"><strong>From:</strong> ${name} (${email})</p>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h2 style="color: #555; font-size: 18px; margin-top: 0;">Message:</h2>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #777; font-size: 14px; margin-top: 30px;">
            This message was sent from your portfolio website contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Error sending email:", error);
      throw error;
    }

    console.log("Email sent successfully:", data);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in send-contact-email function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
