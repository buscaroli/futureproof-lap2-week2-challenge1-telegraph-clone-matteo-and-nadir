# Client - Server - DB inspired by Telegra.ph

## Futureproof - Coding challenge Lap 2 - Week 2 - Day 1

## Team

Matteo and Nadir

## How to use

### To run the client:

```
cd client
npm i && npm run dev
```

Open the browser to `localhost:8080/`

### To run the server:

```
cd server/api
npm i
cd ../
docker compose up
docker system prune // (select Y)
docker compose up
```

### To enter and test the database:

```
cd server
docker exec -it server-db-1 psql -U teluser -W posts
```

To find all the posts run the following command:

```
SELECT * FROM posts;
```

## How to use

Enter your data in the appropriate fields, with the following limits:

- Title should not be longer than 100 characters
- Username should not be longer than 50 characters
- Story should not be longer than 2000 characters

If the user tries to enter data that doesn't conform to those rules an alert will be displayed and the window will refresh to a blank form.

## Challenges

- could not get the content of the fields to the database then realised we were sending the HTML element instead of the value
- figuring out to use the '?' before the linkId in the address bar

## Victories

- setup docker
- database is working with the server
- server is working with the client
- client is working

## BUGS 🐛

- If using Live Server or alternative servers the page might refresh incorrectly and the styling might not appear correctly
