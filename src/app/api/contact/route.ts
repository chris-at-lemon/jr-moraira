import React from "react";
import { NextRequest } from "next/server";

import { Resend } from "resend";
import EmailTemplate from "@/components/contact/emailTemplate";
import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const {
    fullName,
    partnerFullName,
    childrenNumber,
    email,
    message,
    phoneNumber,
  } = await request.json();

  try {
    // Render the email HTML
    const emailHtml = await render(
      React.createElement(EmailTemplate, {
        fullName,
        partnerFullName,
        childrenNumber,
        email,
        message,
        phoneNumber,
      }),
    );

    console.log({ emailHtml });

    // Send the email
    const data = await resend.emails.send({
      from: "JR Moraira <jr@jr-moraira.com>",
      // to: "john.korter@gmail.com",
      // cc: "reykja80@yahoo.de",
      to: "chris.herrmann.2012@gmail.com",
      subject: `RSVP von ${fullName}`,
      html: emailHtml,
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error) {
    const errorMessage = (error as Error).message;
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      {
        status: 500,
      },
    );
  }
}
