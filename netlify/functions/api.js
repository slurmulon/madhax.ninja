const express = require('express')
const serverless = require('serverless-http')
const bodyParser = require('body-parser')
const sanitize = require('sanitize-html')
const nodemailer = require('nodemailer')
// const tls = require('tls')

const app = express()
const router = express.Router()

const transporter = nodemailer.createTransport({
  host: process.env.NODE_EMAIL_HOST,
  port: process.env.NODE_EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.NODE_EMAIL_USER,
    pass: process.env.NODE_EMAIL_PASS
  },
  // tls: {
  //   checkServerIdentity: (_hostname, cert) =>
  //     tls.checkServerIdentity(process.env.NODE_TLS_HOST_IDENTITY, cert)
  // }
})

router.get('/', (req, res) => res.json(require('../../package.json')))

router.post('/contact', async (req, res, next) => {
  const { email, reason, message } = req.body

  const opts = {
    to: process.env.NODE_EMAIL_TO,
    from: process.env.NODE_EMAIL_TO,
    // from: email,
    subject: `madhax.ninja: Contact form [${email}] [${reason}]`,
    html: sanitize(message)
  }

  try {
    await transporter.verify()
  } catch (err) {
    console.error('SMTP transport verification failed:', err)
    console.table({
      email_to: process.env.NODE_EMAIL_TO,
      email_user: process.env.NODE_EMAIL_USER,
      host: process.env.NODE_EMAIL_HOST,
      port: process.env.NODE_EMAIL_PORT,
      tls_host: process.env.NODE_TLS_HOST_IDENTITY,
    })

    return res.status(502).send()
  }

  transporter.sendMail(opts, (err, info) => {
    if (err) {
      console.error('Failed to send email:', err)
      next(err)
    } else {
      return res.status(204).send()
    }
  })
})

app.use(bodyParser.json())
app.use('/.netlify/functions/api', router)

// @see: https://github.com/neverendingqs/netlify-express/blob/0780127cd575704e2a2a00a1a648ba5a5a66c388/express/server.js
module.exports = app
module.exports.handler = serverless(app)
