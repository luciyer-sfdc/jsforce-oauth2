require("dotenv").config()
const jsforce = require("jsforce")
const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())

const server = app.listen(process.env.PORT || 8080, () => {
  const port = server.address().port
  console.log("App now running on port", port)
})

let connection = null

const oauth2 = new jsforce.OAuth2({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.BASE_URL + '/oauth2/callback'
});


app.get('/oauth2/authorize', function(req, res) {
  res.redirect(oauth2.getAuthorizationUrl())
})

app.get('/oauth2/callback', function (req, res) {

  const conn = new jsforce.Connection({ oauth2 : oauth2 })

  conn.authorize(req.query.code, function(err, userInfo) {

    if (err) {
      console.error(err)
      res.status(500).json({ message: "Authorization failed", error: err})
    }

    else {

      console.log("Successful Authorization at", conn.instanceUrl)
      console.log("User ID:", userInfo.id, "at Org ID:", userInfo.organizationId)
      console.log("Access Token: " + conn.accessToken);
      console.log("Refresh Token: " + conn.refreshToken);

      connection = conn;

      res.status(200).json({ message: "Authentication succeeded." });

      // Or redirect to home page of your app like..
      // res.redirect("index.html?token=" + conn.accessToken)

    }

  })

})
