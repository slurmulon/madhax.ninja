const express = require('express')
const serverless = require('serverless-http')
const bodyParser = require('body-parser')
const sanitize = require('sanitize-html')
const nodemailer = require('nodemailer')

const app = express()
const router = express.Router()

router.get('/', (req, res) => res.json(require('../../package.json')))

router.post('/contact', (req, res, next) => {
  const { from, email, reason, message } = req.body

  const transporter = nodemailer.createTransport({
    host: process.env.NODE_EMAIL_HOST,
    secure: false,
    auth: {
      user: process.env.NODE_EMAIL_USER,
      pass: process.env.NODE_EMAIL_PASS
    }
  })

  const opts = {
    to: process.env.NODE_EMAIL_TO,
    from: email,
    subject: `madhax.ninja: Contact form [${reason}]`,
    html: sanitize(message)
  }

  transporter.sendMail(opts, (err, info) => {
    if (err) {
      next(err)
    } else {
      res.status(204).send()
    }
  })
})

app.use(bodyParser.json())
app.use('/.netlify/functions/api', router)

// @see: https://github.com/neverendingqs/netlify-express/blob/0780127cd575704e2a2a00a1a648ba5a5a66c388/express/server.js
module.exports = app
module.exports.handler = serverless(app)
