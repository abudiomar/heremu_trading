# Email Setup Guide for Heremu Website

## Overview
The contact form on your website now has full email functionality. When users submit the form, it will:
1. Send an email to your company email (heremuf@gmail.com)
2. Send an automated thank-you reply to the user

## Required Setup

### 1. Create Environment File
Create a file named `.env.local` in your project root with the following content:

```env
# Gmail account that will send emails
EMAIL_USER=your-sender-email@gmail.com

# Gmail App Password (not your regular password)
EMAIL_PASS=your-16-digit-app-password
```

### 2. Gmail Configuration
To use Gmail for sending emails, you need to:

1. **Enable 2-Factor Authentication** on your Google account
2. Go to [Google Account Settings](https://myaccount.google.com/)
3. Navigate to **Security** → **2-Step Verification**
4. Generate an **App Password** for "Mail"
5. Use this 16-character password in your `.env.local` file

### 3. Alternative Email Services
If you prefer not to use Gmail, you can modify the email configuration in `src/app/api/contact/route.ts`:

#### For Outlook/Hotmail:
```javascript
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

#### For Custom SMTP:
```javascript
const transporter = nodemailer.createTransport({
  host: 'your-smtp-server.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## Features Implemented

### ✅ Form Validation
- All fields are required
- Email format validation
- Minimum message length (10 characters)
- Real-time error messages

### ✅ Email Notifications
- **Company Email**: Receives formatted contact form submissions
- **User Auto-Reply**: Professional thank-you message with company details

### ✅ User Experience
- Loading states with spinner
- Success/error messages
- Form reset after successful submission
- Disabled state during submission

### ✅ Professional Email Templates
- HTML formatted emails with company branding
- Responsive email design
- Contact information included in auto-replies

## Testing the Setup

1. Fill in your `.env.local` file with actual credentials
2. Start your development server: `npm run dev`
3. Navigate to the contact form on your website
4. Submit a test message
5. Check both the company email and the sender's email for messages

## Troubleshooting

### Common Issues:
1. **"Authentication failed"**: Check your app password is correct
2. **"Network error"**: Verify your internet connection and Gmail settings
3. **Emails not received**: Check spam folders

### Debug Mode:
To see detailed error messages, check the browser's developer console and the terminal where you're running `npm run dev`.

## Security Notes
- Never commit `.env.local` to version control
- The `.env.local` file is already ignored by Git
- App passwords are safer than regular passwords for automated systems

## Production Deployment
When deploying to production (Vercel, Netlify, etc.), add the environment variables in your hosting platform's dashboard:
- `EMAIL_USER`
- `EMAIL_PASS`

Your email functionality is now fully operational! 🎉 