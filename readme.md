# Setup
* [Create an OAuth2.0 client ID via Google Cloud Console](https://support.google.com/cloud/answer/6158849?hl=en)
* Download the JSON, you'll need to provide this to the plugin directly, via a path, or via promise
* If you are using your OAuth2.0 credentials for the first time, you'll need to generate a token:
  * Indicate a path to store your token (.json)
  * Run gatsby develop
  * Visit the url provided
  * Approve access to the requested scopes
  * Copy the response code and paste it into the terminal
  * Hit return

# Options
    options: {
      // Optional, defaults to the primary calendar
      calendarId: `your.calendar_id@group.calendar.google.com`,
      // Provide your OAuth2.0 credentials via one of the three following means:
      credentials: { the credentials },
      credentialsPath: `path/to/credentials.json`,
      credentialsPromise: Promise(credentials),
      // Provide a token via one of the three following means,
      // or indicate a path at which to store your token after authenticating via console:
      token: ,
      tokenPath: `./path/to/store/token.json`,
      tokenPromise: ,
      // How many calendar entries to get
      // Optional, defaults to 10
      limit: 10000,
      // A javascript date
      startDate: new Date(`1979`),
    }
