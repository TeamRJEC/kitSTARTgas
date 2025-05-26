import indexHtml from './index.html';

export default {
  async fetch(request, env, ctx) {
    return new Response(indexHtml, {
      headers: { 'Content-Type': 'text/html' }
    });
  }
};
