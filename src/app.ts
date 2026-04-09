import * as http from "http";
import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse,
) => {
  //querystring
  const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];
  console.log(baseUrl);
  console.log(queryString);

  //listar podcasts
  if (request.method == HttpMethod.GET && request.url === Routes.LIST) {
    await getListEpisodes(request, response);
  }
  if (request.method === HttpMethod.GET && request.url === Routes.EPISODE) {
    await getFilterEpisodes(request, response);
  }
};
