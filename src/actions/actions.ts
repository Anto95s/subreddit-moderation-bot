import { reddit } from "@devvit/web/server";

export async function postCreateHandler(req: any, res: any) {
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
}

export async function postCommentHandler(req: any, res: any) {
}

export async function postDeleteHandler(req: any, res: any) {
}