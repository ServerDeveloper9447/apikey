const express = require('express');

const app = express();

app.use(require('cors')())

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.get('/apikey', (req, res) => {
  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
const id = makeid(6)
  if (!req.query.email || !req.query.name) {
    res.status(400).send({'error':"Request failed"})
  } else {
    const { Webhook, MessageBuilder } = require('@prince25/discord-webhook-sender');
    const hook = new Webhook(process.env.hook);
    const embed = new MessageBuilder()
    .addField('Email',req.query.email, true)
    .addField('Name', req.query.name, true)
    .setFooter(id)
    .setColor('#2f3136')

    hook.send(embed)

    const hook2 = new Webhook(process.env.hookt)
    const embed2 = new MessageBuilder()
    .addField('Email', `${req.query.email}`.substring(0, 5) + 'XXXXXX', true)
    .addField('Name', req.query.name, true)
    .setFooter(id)
    .setColor('#2f3136')

    hook2.send(embed2)
  }
})

app.listen(process.env.PORT, () => {
  console.log('server started');
});