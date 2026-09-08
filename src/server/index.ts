import { createServer, getServerPort } from '@devvit/web/server';
import { CONFIG_ACTIONS } from '../actions/config'

const server = createServer(async (req, res) => {
  actionHandler(req, res);
});

async function actionHandler(req: any, res: any) {
  //Retrieve any action to perform that matches the received req.url event
  const handler = CONFIG_ACTIONS[req.url as keyof typeof CONFIG_ACTIONS];

  if (!handler) {
    res.writeHead(404);
    res.end();
    return;
  }

  //Call the action if exists
  await handler(req, res);

  const response = {status: 'ok'};
  return response;
}

server.listen(getServerPort());