# jsforce-oauth2

Using [node](), [express](), and [jsforce]().

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

_Note: Base URL must change if you deploy this to a server, as well as you'll need to update the connected app in your dev org (and wait for it to propogate those changes - sometimes can take several minutes.)_
