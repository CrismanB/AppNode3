const nodemailer = require('nodemailer')
const path = require('path')
const hbs = require('nodemailer-express-handlebars')
const exphbs = require('express-handlebars')
const mailConfig = require('../../config/mail')

const transport = nodemailer.createTransport(mailConfig)

const viewpath = path.resolve(__dirname, '..', 'views', 'emails')

transport.use('compile', hbs({
  viewEngine: exphbs.create({
    partialsDir: path.resolve(viewpath, 'emails')
  }),
  viewpath,
  extName: '.hbs'
}))

module.exports = transport

