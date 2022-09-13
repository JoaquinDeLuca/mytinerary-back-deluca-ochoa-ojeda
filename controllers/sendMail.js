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
<div class="es-wrapper-color"><!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"><v:fill type="tile" color="#ffffff"></v:fill></v:background><![endif]--><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td class="esd-email-paddings" valign="top"><table cellpadding="0" cellspacing="0" class="esd-header-popover es-header" align="center"><tbody><tr><td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="700"><tbody><tr><td class="esd-structure es-p20t es-p10b es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="660" class="es-m-p0r esd-container-frame" valign="top" align="center"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-spacer es-p10t es-p10b" style="font-size:0"><table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0"><tbody><tr><td style="border-bottom:1px solid #ccc;background:0 0;height:1px;width:100%;margin:0"></td></tr></tbody></table></td></tr><tr><td align="center" class="esd-block-spacer es-p10t es-p10b" style="font-size:0"><table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0"><tbody><tr><td style="border-bottom:1px solid #ccc;background:0 0;height:1px;width:100%;margin:0"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="es-content" align="center"><tbody><tr><td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="700"><tbody><tr><td class="esd-structure es-p40t es-p20b es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="660" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-image" style="font-size:0"><a target="_blank"><img src="https://jmverr.stripocdn.email/content/guids/CABINET_2663efe83689b9bda1312f85374f56d2/images/10381620386430630.png" alt style="display:block" width="100"></a></td></tr><tr><td align="center" class="esd-block-text"><h2>Verify your email to finish signing up</h2></td></tr><tr><td align="center" class="esd-block-spacer es-p10t es-p10b es-m-txt-c" style="font-size:0"><table border="0" width="40%" height="100%" cellpadding="0" cellspacing="0" style="width:40%!important;display:inline-table"><tbody><tr><td style="border-bottom:1px solid #ccc;background:0 0;height:1px;width:100%;margin:0"></td></tr></tbody></table></td></tr><tr><td align="center" class="esd-block-text es-p5t es-p5b es-p40r es-m-p0r" esd-links-underline="none"><p>Thank you for choosing My tinerary Trip.</p><p><br></p><p>Please confirm that ${mail}&nbsp;is your email address by clicking on this link <a href='http://localhost:4000/auth/verify/${code}'>Click to verify!</a> within<strong> 48 hours</strong>.</p></td></tr><tr><td align="center" class="esd-block-spacer es-p10t es-p10b es-m-txt-c" style="font-size:0"><table border="0" width="40%" height="100%" cellpadding="0" cellspacing="0" style="width:40%!important;display:inline-table"><tbody><tr><td style="border-bottom:1px solid #ccc;background:0 0;height:1px;width:100%;margin:0"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="es-footer" align="center"><tbody><tr><td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="700"><tbody><tr><td class="esd-structure es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="660" class="esd-container-frame" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-spacer es-p10t es-p10b" style="font-size:0"><table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0"><tbody><tr><td style="border-bottom:1px solid #ccc;background:0 0;height:1px;width:100%;margin:0"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td class="esd-structure es-p20r es-p20l" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="660" class="esd-container-frame" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-spacer es-p10t es-p10b" style="font-size:0"><table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0"><tbody><tr><td style="border-bottom:1px solid #ccc;background:0 0;height:1px;width:100%;margin:0"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td class="esd-structure es-p20" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="660" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-text"><p style="line-height:150%">A trip is lived 3 times: when we dream it, when we live it and when we remember it.<br></a></p></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center"><tbody><tr><td class="esd-stripe" align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="700"><tbody><tr><td class="esd-structure es-p20" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td width="660" class="esd-container-frame" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="esd-block-image es-infoblock made_with" style="font-size:0"><a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=fashion_17&utm_content=finishing_signing_up"><img src="https://jmverr.stripocdn.email/content/guids/CABINET_279f38c4dac75c2344421db7d9c65ad6/images/logo.png" alt width="125" style="display:block"></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div>         
        `
        //codigo HTML que se renderiza en el cuerpo del mail
        //en el cuerpo envia un link de redireccion que verifique la cuenta
        //ese link se conecta con el metodo correspondiente para la verificacion 
        // elocal host se tiene que cambiar por la url del back
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