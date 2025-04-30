## App for testing push notifications

This is a simple node app for sending notifications with Firebase.

## Getting started

1. Open the [How to generate private key file] image in order to 
see how to get the Firebase credentials file for your application;
2. Save the downloaded file on the application root as `your-application-firebase-adminsdk.json`;
3. Install Node and npm;
4. Run `npm install` inside the folder where you've cloned the project;
5. Run `npm start`.

Then you can make a POST request to `localhost:3000/notification` with these parameters:

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
