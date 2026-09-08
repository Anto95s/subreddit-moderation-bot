import { createServer, getServerPort, reddit } from '@devvit/web/server';

const server = createServer(async (req, res) => {
  if (req.url === '/internal/on/post/create' && req.method === 'POST') {
    let body = '';

    for await (const chunk of req) {
      body += chunk;
    }

    const event = JSON.parse(body);
    const postId = event.post?.id;

    if (postId) {
      await reddit.submitComment({
        id: postId,
        text: 'Aceto Bot È QUI!',
        runAs: 'APP',
      });
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  res.writeHead(404);
  res.end();
});

server.listen(getServerPort());