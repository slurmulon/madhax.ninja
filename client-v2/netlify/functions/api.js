const express = require('express')
const serverless = require('serverless-http')
const bodyParser = require('body-parser')
const sanitize = require('sanitize-html')
// const cors = require('cors')
const nodemailer = require('nodemailer')

console.log('running server function')

const app = express()

app.use(bodyParser.json())
// app.use(cors())

app.get('/', (req, res) => res.json({ works: true }))

// app.get('/', (req, res) => res.json(require('../package.json')))

app.post('/contact', (req, res, next) => {
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

module.exports.handler = serverless(app)
