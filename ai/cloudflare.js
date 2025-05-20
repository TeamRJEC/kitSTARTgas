export async function verifyCloudflareToken() {
  const token = process.env.CLOUDFLARE_API_TOKEN;
  if (!token) {
    throw new Error('CLOUDFLARE_API_TOKEN is not defined');
  }

  const response = await fetch(
    'https://api.cloudflare.com/client/v4/user/tokens/verify',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Cloudflare API error: ${response.status}`);
  }

  const data = await response.json();
  console.log(data);
  return data;
}

// Execute if this file is run directly via `node ai/cloudflare.js`
if (import.meta.url === `file://${process.argv[1]}`) {
  verifyCloudflareToken().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
