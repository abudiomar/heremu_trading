import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to company
    const companyMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'abudi4947@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h2 style="color: #3B82F6; margin-bottom: 10px;">New Contact Form Submission</h2>
            <p style="color: #666;">From Heremu Trading PLC Website</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #555;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; text-align: center; color: #666; font-size: 14px;">
            <p>This message was sent from the contact form on your website.</p>
          </div>
        </div>
      `,
    };

    // Auto-reply to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Heremu Trading PLC',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h2 style="color: #3B82F6; margin-bottom: 10px;">Thank You for Your Message</h2>
            <p style="color: #666;">Heremu Trading PLC</p>
          </div>
          
          <div style="padding: 20px; background-color: #f8f9fa; border-radius: 8px; margin-bottom: 20px;">
            <p>Dear ${name},</p>
            <p>Thank you for contacting Heremu Trading PLC. We have received your message and will get back to you as soon as possible.</p>
            
            <div style="margin: 20px 0; padding: 15px; background-color: #fff; border-left: 4px solid #3B82F6;">
              <p><strong>Your message:</strong></p>
              <p style="font-style: italic; color: #555;">"${message}"</p>
            </div>
            
            <p>Our team typically responds within 24 hours during business days. If you have an urgent inquiry, please feel free to call us at:</p>
            <ul style="list-style: none; padding: 0;">
              <li>📞 +251 909 524 295</li>
              <li>📞 +251 967 676 738</li>
              <li>📞 +251 967 676 756</li>
              <li>📞 +251 983 540 254</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #3B82F6; font-weight: bold; font-size: 16px;">"The Best or Nothing"</p>
            <p style="color: #666; font-size: 14px;">
              Heremu Trading PLC<br>
              Chemical Excellence<br>
              Addis Ababa, Ethiopia
            </p>
          </div>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 