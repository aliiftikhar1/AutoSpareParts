import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.titan.email', // Hostinger's SMTP server
      port: 465, // Secure port for SMTP over SSL
      secure: true, // Use SSL
      auth: {
        user: process.env.MAIL_USER, // Your Hostinger email address
        pass: process.env.MAIL_PASSWORD, // Your Hostinger email password
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `${process.env.MAIL_USER}`, // sender address
      to: `${process.env.MAIL_USER}`, // recipient email
      subject: `New message from ${name}`, // Subject line
      html: `
        <p>You have a new message from your contact form:</p>
        <h3>Contact Details</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Error sending email', error }), {
      status: 500,
    });
  }
}