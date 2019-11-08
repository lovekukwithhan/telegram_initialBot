//npm install node-telegram-bot-api --save 해주어 Telegram 변수에 require하여 적용.
var Telegram = require('node-telegram-bot-api');

//token값은 본 코드를 얹을 봇이 바뀌지 않는 이상 그대로임으로 상수처리함
const token = '810874532:AAHhoimOsXXOyu69PJhV3Mw9vqzWCnAtel4';

//동기화처리
var opt = {polling : true};

//token값과 동기화처리를 위한 변수를 파라미터로 던져주어, 이것이 적용된 상태의 객체 생성
const bot = new Telegram(token, opt);
 
//message를 입력받으면 실행할 구문
bot.on("message", function(msg){

  //정상적으로 함수가 실행되면 콘솔에 msg를 찍음
  console.log("msg");
var chatid = msg.chat.id;
var text = msg.text;

//text가 입력되면
  if(text){
    bot.sendMessage(chatid, "안녕하세요?\n스마트스페이스 도서관리 봇을 찾아주셔서 감사합니다. \n\n무엇이 필요하신가요 ?", {
      //telegram keyboard api 적용
      'reply_markup' : {
        'inline_keyboard' : [
          [{text: "책 빌리기",
            //callback_data 공부하기
            callback_data: "whatever",
         }],
         [{text: "빌린 책 반납하기",
            callback_data: "whatever",
         }],
         [{text: "무슨 책이 있는지만 구경 할게요",
            callback_data: "whatever",
         }]
        ]

        
      }

    
    });
       

        }
 
});


// switch(text){
//   case "책 빌리기" :bot.sendMessage(chatid, "빌리실 책이 무엇인가요 ?", {
//     'reply_markup' : {
//       'inline_keyboard' : [
//         [{text: "책 이름을 알고있으니 그걸로 검색해서 빌릴게.",
//           callback_data: "whatever",
//        }],
//        [{text: "작가님만 알고있는데 ...",
//           callback_data: "whatever",
//        }],
//        [{text: "내가 원하는 키워드로 찾아서 괜찮은게 있으면 그걸로 빌릴게!",
//           callback_data: "whatever",
//        }]
//       ]
//     }
//   });
// }




// bot.on(['/good', /\/awesome/, '/perfect'], msg => {
//   return msg.reply.text('nice!');

// bot.onText(/\/echo (.+)/, msg => {
//     var fromId = msg.from.id;
//     var resp = match[1];
//     bot.sendMessage(fromId, resp);
// });

// bot.start();