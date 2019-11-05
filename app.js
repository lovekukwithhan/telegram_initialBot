const TeleBot = require('telebot');

const token = '810874532:AAHhoimOsXXOyu69PJhV3Mw9vqzWCnAtel4';

const bot = new TeleBot(token);

bot.on(/\/start/, msg =>{
  msg.reply.text('Hello, World!');
});

bot.on('sticker', (msg) =>{
  return msg.reply.sticker('image_URL...png', {asReply : true});
});

bot.on(/^\/echo (.+)$/, (msg, props) =>{
  const text = props.match[1];
  return msg.reply.text(text);
});

bot.on(['/good,', /\/awesome/, '/perfect'], msg => {
  return msg.reply.text('nice!');
});


bot.start();