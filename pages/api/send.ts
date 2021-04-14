const sgMail = require('@sendgrid/mail');

export default async function(req, res) {
    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)

    const { name, to_email, message } = req.body

    const content = {
        to: to_email,
        from: 'sayoshida@satoshiyoshida.net',
        subject: 'Thank you for contact.',
        text: `Thank you for contact to mypage.
        Your content of inquiry is as follows.
        ▶︎ Name: ${name}
        ▶︎ Email: ${to_email}
        ▶︎ Message: ${message}
        Please wait for reply. Thank you.
        Best regards.`,
        html: `<strong>Thank you for contact to mypage.</strong><br/>
        <p>Your content of inquiry is as follows.</p>
        <ul><li>Name: ${name}</li><li>Email: ${to_email}</li><li>Message: ${message}</li></ul>
        <p>Please wait for reply. Thank you.<br/>
        <p>Best regards.</p>`
    }

    try {
        await sgMail.send(content)
        res.status(200).send('Message sent successfully.')
    } catch (error) {
        console.log('ERROR', error)
        res.status(400).send('Message not sent.')
    }
}