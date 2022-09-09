const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
const { GOOGLE_ID, GOOGLE_REFRESH, GOOGLE_SECRET, GOOGLE_URL, GOOGLE_USER } = process.env

const sendMail = async (mail, code) => {

    const client = new OAuth2(
        GOOGLE_ID,
        GOOGLE_SECRET,
        GOOGLE_URL
    )

    client.setCredentials({
        refresh_token: GOOGLE_REFRESH
    })

    const accessToken = client.getAccessToken()

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: GOOGLE_USER,
            type: 'OAuth2',
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
            refreshToken: GOOGLE_REFRESH,
            accessToken: accessToken
        },
        tls: { //teletransport layer security
            rejectUnauthorized: false //evita que salte la ficha con el antivirus
        }
    })

    const mailOptions = {
        from: GOOGLE_USER,
        to: mail,
        subject: 'Verify MyTinerary acount',
        html: `
            <div>
                <H1>Verified acount</H1>
            </div>
        `
        //codigo HTML que se renderiza en el cuerpo del mail
        //en el cuerpo envia un link de redireccion que verifique la cuenta
        //ese link se conecta con el metodo correspondiente para la verificacion 
    }

    await transport.sendMail(mailOptions,
        (error, response) => {
            if (error) {
                console.log(error)
            }
            else {
                console.log('ok')
            }
        })

}

module.exports = sendMail