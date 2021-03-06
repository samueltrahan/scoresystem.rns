# Caddie Scoring

##

## This template contains a basic navbar that will display the name of the logged in user.

### How to contribute:

#### 1. Clone this repository to your local machine.

```
git clone https://github.com/samueltrahan/scoresystem.rns.git
```

#### 2. Navigate into the repository and install node modules.

```
cd scoresystem.rns
npm i
```

#### 3. Create a .env file and add values for your MySQL password, a key for signing tokens to securely reset passwords, your client's url, and login info for a google account that does not have 2FA enabled. (nodemailer will not work with 2FA enabled)

```
touch .env
```

```
MYSQL_PW=<your MySQL password>
SECRET=<any string>
CLIENT_URL=http://localhost:3000 (note: When deploying change this to your site's url)
RESET_PASSWORD_KEY=<any string>
GOOGLE_APP_EMAIL=<google account email>
GOOGLE_APP_PW=<google account password>
```

# Caddie

## Things that need to get done

- [ ] Clean up the code on Front end. (Way too much clutter and confusion)
- [ ] Decouple the front and back end.
- [ ] Integrate greens hit, fairways hit, and putts made.
- [ ] Get pictures of the course to add to the record score page.
- [ ] Currently can start a new round and can record a score, but need to figure out how to get score for individual holes back.
- [ ] Leaderboard 
