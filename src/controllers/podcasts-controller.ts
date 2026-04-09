import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episode-services";
import { serviceFilterEpisodes } from "../services/filter-episodes-services";
import { StatusCode } from "../utils/status-code";
import { ContentType } from "../utils/content-type";
import { FilterPodCastModel } from "../models/filter-podcast-models";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const content = await serviceListEpisodes();

  res.writeHead(StatusCode.OK, { "content-type": ContentType.JSON });
  res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const content: FilterPodCastModel = await serviceFilterEpisodes(req.url);
  res.writeHead(content.statusCode, { "content-type": ContentType.JSON });
  res.end(JSON.stringify(content.body));
};
