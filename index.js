

require('dotenv').config();
const notifier = require('node-notifier');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
var figlet = require('figlet');
 
figlet('Made  By  Goodin', async (err, data) => {
    
    await console.log(data)
    console.log(" ")
    console.log('Thanks for installing the Zotac Stock Checker, Please make sure to fill out the example.env and rename it .env')
    console.log(' ')
    var	bar	= require('progress-bar').create(process.stdout);
 

bar.update(0.1);
wait(1000)
bar.update(0.3);
wait(1000)
bar.update(0.8)
wait(1000)
bar.update(1)
console.log(" ")
});




const play = require('audio-play');
const load = require('audio-loader');



const Twitter = require('twit');
const twitterConf = {
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret,
  }

const twitterClient = new Twitter(twitterConf);



const stream = twitterClient.stream('statuses/filter', {
  follow: `${process.env.droptwitterid}`, 
});

stream.on('tweet', tweet => {
    if (tweet.retweeted_status == undefined) {

     
        if(tweet.user.id_str == `${process.env.droptwitterid}`){
       
   
       const zotac = `${process.env.keyword}`
    

       const card = `${process.env.GPU}`
    

       
       if (tweet.text.toLowerCase().includes(zotac.toLowerCase()) && tweet.text.toLowerCase().includes(card.toLowerCase())){

        console.log('New Tweet Detected')
        load(`./${process.env.dropsound}`).then(play);

           notifier.notify({
            title: 'Drop Alert',
            message: `${tweet.user.name} Posted: ${tweet.text}`
          });
          console.log('Sound Sent')
          console.log('Desktop Notification Sent')
          client.calls.create({
            url: 'http://demo.twilio.com/docs/voice.xml',
            to: `${process.env.YOUR_PHONENUMBER}`,
            from: `${process.env.TWILIO_PHONENUMBER}`
          })
         .then(call => console.log(`Call Sent to ${process.env.YOUR_PHONENUMBER}`));
          
       }
    }
    }
});

setInterval( async() => {
    
    stream.stop()
    console.log("Stream Restarted | This is normally it happens every 10 minutes")
    stream.start()

}, 600000);


