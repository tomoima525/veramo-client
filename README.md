# Veramo client

Veramo client that interacts with the Veramo agent.

See [Veramo](https://veramo.io/) for more information.

## Installation

This project uses pnpm

```
pnpm install
```

## Veramo agent

https://veramo.io/docs/basics/introduction
Veramo agent can be run locally with veramo cli:

```
// Create agent.yml file
veramo config create
// Run veramo agent locally
veramo server --config=./agent.yml
```

## Usage

For Veramo agent that runs locally, set up .env file with the following variables:

```
API_KEY=test123
AGENT_OPEN_API=http://localhost:3332/open-api.json
```

Run the client:

```
// Creates a new identifier(issuer)
pnpm create-identifier
// List all identifiers
pnpm list-identifiers
// Creates a new credential
pnpm create-credential
// verify credential
pnpm verify-credential
```
