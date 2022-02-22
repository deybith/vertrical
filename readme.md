# Vertrical Code Challenge
## Typescript, React Js, Next Js, Prisma and Postgres application

The application was built from scratch for the server side, integrating the decorator to build a robust http structure.

- Separate front adapting next and core structure
- Bootstrap library implementation
- Commitlint was adopted
- Prisma ORM was used to handle data information

## Features

- Core is ready for building business logic
- NextJS is adapted to use layouts
- Challenge is done
- .env file was not ignore for testing purposes

## Installation in dev mode

### Requirements

- Docker and docker compose
- NodeJs
- Yarn installed globally

Follow steps below to setup the environment

```sh
yarn install
docker-compose up -d
yarn prisma migrate dev
yarn seed
```

Run "yarn seed" it to populate first time database

## For Running

```sh
yarn dev
```
## Don't want to use docker?

Just set DATABASE_URL environment variables in .env file

## Pending

- Refactor
- Injectable decorator