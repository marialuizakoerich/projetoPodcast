import { repositoryPodcast } from "../repositories/podcasts-repository";
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined,
): Promise<PodcastTransferModel> => {
  //definir interface de retorno
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  //buscando os dados
  const queryString = podcastName?.split("?p=")[1] || "";
  const data = await repositoryPodcast(queryString);

  //verificando se tem conteudo
  responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
    body: data,
  };

  return responseFormat;
};
