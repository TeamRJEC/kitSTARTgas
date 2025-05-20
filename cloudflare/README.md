# Cloudflare Worker

This folder contains a sample Cloudflare Worker that responds with a greeting.

## Setup

1. Install the [Wrangler](https://developers.cloudflare.com/workers/wrangler/) CLI:
   ```sh
   npm install -g wrangler
   ```
2. Authenticate with your Cloudflare account:
   ```sh
   wrangler login
   ```

## Deploy

Run the following command inside this folder to deploy the worker:

```sh
wrangler deploy
```
