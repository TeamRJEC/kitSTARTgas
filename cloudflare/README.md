# Cloudflare Worker

This folder contains a sample Cloudflare Worker that serves a simple web page.

## Setup

1. Install the [Wrangler](https://developers.cloudflare.com/workers/wrangler/) CLI:
   ```sh
   npm install -g wrangler
   ```
2. Authenticate with your Cloudflare account:
   ```sh
   wrangler login
   ```

## Deploy manually

Run the following command inside this folder to deploy the worker:

```sh
wrangler deploy
```

## Automatic deployments

The repository includes a GitHub Actions workflow that automatically deploys this worker whenever changes are pushed to the `main` branch. Create a `CLOUDFLARE_API_TOKEN` secret in your GitHub repository to enable automatic deployments.
