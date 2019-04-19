// with thanks to https://github.com/Urigo/graphql-modules/blob/8cb2fd7d9938a856f83e4eee2081384533771904/website/lambda/contact.js
const sendMail = require('sendmail')()
const { validateEmail, validateLength } = require('./validations')

exports.handler = (event, context, callback) => {
  // if (!process.env.CONTACT_EMAIL) {
  //   return callback(null, {
  //     statusCode: 500,
  //     body: "process.env.CONTACT_EMAIL must be defined"
  //   });
  // }

  const body = JSON.parse(event.body)

  try {
    validateLength('body.from', body.from, 3, 50)
  } catch (e) {
    return callback(null, {
      statusCode: 403,
      body: e.message,
    })
  }

  try {
    validateEmail('body.emailTo', body.emailTo)
  } catch (e) {
    return callback(null, {
      statusCode: 403,
      body: e.message,
    })
  }

  try {
    validateLength('body.message', body.message, 10, 1000)
  } catch (e) {
    return callback(null, {
      statusCode: 403,
      body: e.message,
    })
  }

  const descriptor = {
    from: `"${body.from}" <no-reply@andrie.com>`,
    to: `scott.tolinski@gmail.com`,
    subject: `Andrie Contact Form`,
    text: body.message,
  }
  //TODO add email from to this

  sendMail(descriptor, e => {
    if (e) {
      callback(null, {
        statusCode: 500,
        body: e.message,
      })
    } else {
      callback(null, {
        statusCode: 200,
        body: 'Success',
      })
    }
  })
}
