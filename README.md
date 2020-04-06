# jsforce-oauth2

Using [node](https://nodejs.org/en/), [express](https://expressjs.com/), and [jsforce](https://jsforce.github.io/).

### Setup

Clone this repo to your local machine, and

```
npm install
```

Next, create a connected app in a Salesforce developer org.

You'll need the Client ID, Client Secret, and to properly set the callback URL. If the callback URL doesn't match exactly, you'll get an error.

Now,

```
touch .env
```

Inside of .env, put your Client ID, Client Secret, and base URL:

```
CLIENT_ID=XXXX
CLIENT_SECRET=XXXX
BASE_URL=http://localhost:8080
```

...and save.

_Note: Base URL must change if you deploy this to a server, as well as you'll need to update the connected app in your dev org (and wait for it to propogate those changes - sometimes can take several minutes.)_

Next,

```
node server.js
```

You should see `App now running on port 8080`.

In your browser, visit [http://localhost:8080/oauth2/authorize](http://localhost:8080/oauth2/authorize).

You should automatically be redirected to a Salesforce login page, and after logging in you should be kicked back to
[http://localhost:8080/oauth2/callback](http://localhost:8080/oauth2/callback), with a valid session token.

All done!

---
