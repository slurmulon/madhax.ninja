const express = require('express')
const serverless = require('serverless-http')
const bodyParser = require('body-parser')
const sanitize = require('sanitize-html')
// const cors = require('cors')
const nodemailer = require('nodemailer')

console.log('running server function')

const app = express()
const router = express.Router()

// app.use(cors())

router.get('/', (req, res) => res.json({ works: true }))

// app.get('/', (req, res) => res.json(require('../package.json')))

router.post('/contact', (req, res, next) => {
  console.log('sending email', req.body)
  const { from, email, reason, message } = req.body

  const transporter = nodemailer.createTransport({
    host: 'smtp.madhax.io',
    secure: false,
    auth: {
      user: process.env.NODE_EMAIL_USER,
      pass: process.env.NODE_EMAIL_PASS
    }
  })

  const opts = {
    to: 'me@madhax.io',
    from: email,
    subject: `Contact form [${reason}]`,
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
