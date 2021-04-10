# Twitter Drop Bot



Perfect for Graphic Card Drops


## Features
- Audio Alerts
- Cell Phone Alerts
- Desktop Alerts





## Installation

1st. You need to install [Node.js](https://nodejs.org/) v10+ to run.  <br>
2nd. You need to signup for [Twitter Developer Program](https://developer.twitter.com/en) <br>
3rd. You need to signup for [Twilio](https://www.twilio.com/referral/0uYYz8) (Just use the free plan it comes with $15.50 dollars in credit) Follow these simple steps to make a number) https://www.twilio.com/docs/voice/quickstart/java  <br>

Next we are going to need to do 

```sh
git clone https://github.com/TheGoodIn/ZotacStockChecker
cd ZotacStockChecker
npm install
```

Next you need to navigate to your ZotacStockChecker File and Fill out the .env like below

```sh
keyword=Source: Zotac Store Worker (This is set for ZotacStore.com Automatically)
dropsound=Alarm.mp3 (If you want to change the sound just drag it into the ZotacStockChecker file and rename it here .mp3 or .wav only)


TWILIO_AUTH_TOKEN= (This will be on the dashboard)
TWILIO_ACCOUNT_SID= (This will also be on the dashboard)
TWILIO_PHONENUMBER=+1 (This is the number it gave you make sure to include the +1 then this format +14153339845)
YOUR_PHONENUMBER=+1 (Your phonenumber format +14153339845)


consumer_key= (This is from Twitter)
consumer_secret= (From Twittr)
access_token= (From Twitter)
access_token_secret= (From Twitter)
droptwitterid=1363974177099816968 (This is the twitter account we use it is @BotPCParts)


```

Next Rename example.env just .env

Then we need to run the bot

```sh
node .
```

If you get the 100% loading bar your bot has loaded correctly

# If you have any problems open a Issue or add me on discord Goodin#8128

