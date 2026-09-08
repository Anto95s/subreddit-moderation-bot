import { postCreateHandler, postCommentHandler, postDeleteHandler } from "./actions";


export const CONFIG_ACTIONS = {
  '/internal/on/post/create': postCreateHandler,
  '/internal/on/comment/create': postCommentHandler,
  '/internal/on/post/delete': postDeleteHandler,
};