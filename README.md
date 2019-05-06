## Ankor API

This is a reference implementation for building a Stellar anchor.

## Technologies

- GraphQL
- TypeScript
- [Prisma](https://www.prisma.io/]

## Features

- **User sign-up and sign-in:** ...
- **Deposits**: ...
- **Withdrawals** ...
- **Payments** ...

## Getting started

```sh
# 1. Clone the project
`git clone git@github.com:mukunzidd/ankor-api.git`

# 2. Navigate to the project
cd ankor-api

# 3. Install node modules with `yarn` or `npm`

# 4. Deploy the prisma app

# 3. Start server (runs on http://localhost:4000) and open GraphQL Playground
yarn dev
```

## Documentation

### Commands

* `yarn start` starts GraphQL server on `http://localhost:4000`
* `yarn dev` starts GraphQL server on `http://localhost:4000` _and_ opens GraphQL Playground
* `yarn playground` opens the GraphQL Playground for the `projects` from [`.graphqlconfig.yml`](./.graphqlconfig.yml)
* `yarn prisma <subcommand>` gives access to local version of Prisma CLI (e.g. `yarn prisma deploy`)

### Deploying

```
# 1. Run prisma deploy
yarn prisma deploy
```
