# AI Cloudflare Connector

This folder contains utilities for connecting to Cloudflare's API.

The `cloudflare.js` module exports a `verifyCloudflareToken` function that verifies
an API token specified in the environment variable `CLOUDFLARE_API_TOKEN`.

## Usage

Run the script directly with Node to test your token:

```sh
CLOUDFLARE_API_TOKEN=<your-token> node ai/cloudflare.js
```
