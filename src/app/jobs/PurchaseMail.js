
const Mail = require('../services/mail')

class PurchaseMail {
  get key() {
    return 'PurchaseMail'
  }

  async handle(job, done) {
    const { ad, user, content } = job.data
    await Mail.sendMail({
      from: '"Crisman Bernado dos Santos" <kima.gamerock@hotmail.com>',
      to: ad.author.email,
      subject: `solicitação de compra: ${ad.title}`,
      html:
        (
          `<strong>Olá, ${ad.author.name}</strong>
        <p>Você tem uma nova solicitação de compra para o anúncio ${ad.title}</p>
        <br>
        <strong>${user.name} (${user.email}):</strong>
        <p>${content}</p>
        `
        )
    })
    return done()
  }
}

module.exports = new PurchaseMail()
