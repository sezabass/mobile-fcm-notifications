## App for testing push notifications

This is a simple node app for sending notifications with firebase on stg environment.

## Getting started
1. Install Node and npm
2. Run `npm install` inside the folder where you've cloned the project
3. Run `node app.js`

Then you can use postman/cURL to make a POST request to `localhost:3000/notification`

with these parameters:

```json
{
	"token":"<FCM device token>",
	"notification": {
		"title": "Here goes the title",
		"body": "Here goes the description"
	},
	"android": {
		"data":{
		  "title": "<title>",
		  "body" : "<body>",
		  "deeplink": "your-application://...",
		  "type": "OTHER",
		  "channel_id": "DEFAULT_CHANNEL_ID"
		}
	}
}
```

### iOS
Yet to be created :P
