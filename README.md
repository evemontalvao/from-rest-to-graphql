# From REST to GraphQL

This repository is part of a presentation of how to move from REST to GraphQL. It contains a simple GraphQL Server that communicates with Postgres through Prisma.

# Requirements

- Docker installed. You can learn how to [here](https://docs.docker.com/v17.12/)
- Prisma installed globally. Learn more [here](https://github.com/prisma/prisma)

# Getting started

Open your terminal and type:

1. `cd {WORKSPACE}/from-rest-to-graphql`
2. `npm i`
3. `docker-compose up -d`
4. `npm start`

# Folder Structure

## ./config
Contains the database configuration. We're going to use PostgreSQL, but if you already have a configured database, you can change the configuration.

## ./db
### connection.js
Contains the database's instance to be used on all handlers.
### init.sql
Contains the basic database setup to be used by Docker on build.

## docker-compose.yml
The docker configuration file. It builds up the PostgreSQL container.


  