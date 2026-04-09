# Podcast Manager

### Descrição

Um app ao estilo netflix, aonde possa centralizar diferentes podcasts separados por categoria

### Domínio

Poscasts feitos em vídeo

### Features

- Listar os episódios podcasts em sessões de categorias
- [saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast

### Planejamento

GET: retorna lista de episódios

#### Feature

- Listar os episódios podcasts em sessões de categorias

#### Implementação

Retornar API Rest (JSON):

- Nome do Podcast
- Nome do Episódio
- Imagem da Capa
- Link do Vídeo
- Categoria

```js
[
  {
    pocastName: "flow",
    episode: "ELIEZER DO VIDA INFINITA - Flow #566",
    videoId: "NilCYWz3Amv",
    cover:
      "https://i.ytimg.com/vi/mvNilCYWz3A/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC4dvLZiwH-v38EY2TUAZNjOSFapw",
    link: "https://www.youtube.com/watch?v=NilCYWz3Amv",
    categoria: ["viagem", "influenciadores"],
  },
  {
    pocastName: "flow",
    episode: "SGT NANTES + JORGE LORDELLO - Flow #584",
    videoId: "HUdTabCyFgE",
    cover:
      "https://i.ytimg.com/vi/HUdTabCyFgE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDqCk2zl3HnmHO3RQaZjwqnXZag4Q",
    link: "https://www.youtube.com/watch?v=HUdTabCyFgE",
    categoria: "crimes",
  },
];
```
