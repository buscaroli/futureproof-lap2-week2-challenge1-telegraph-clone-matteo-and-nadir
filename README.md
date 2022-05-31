# Client - Server - DB inspired by Telegra.ph

## Futureproof - Coding challenge Lap 2 - Week 2 - Day 1

## Team

Matteo and Nadir

## How to use

To run the client:

```
cd client
npm i && npm run dev
```

To run the server:

```
cd server/api
npm run i
cd ../
docker compose up
docker system prune // (select Y)
docker compose up
```

## How to use

Enter your data in the appropriate fields and it will be stored in a local postgres database.

## Challenges

- could not get the content of the fields to the database then realised we were sending the HTML element instead of the value
- setting up the scripts for the database

## Victories

- setup docker
- database is working with the server
- server is working with the client

## BUGS 🐛

- The client doesn't display the result yet
