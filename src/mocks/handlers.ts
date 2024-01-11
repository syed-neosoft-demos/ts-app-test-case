import { rest } from "msw";
import { userListData } from "./data";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userListData));
  }),
  rest.post("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userListData[0]));
  }),
];
