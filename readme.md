# 🎧 Projeto Podcast API

API simples desenvolvida em Node.js com TypeScript para listagem e filtragem de episódios de podcasts.

## 🚀 Tecnologias utilizadas

- Node.js
- TypeScript
- TSX (execução em ambiente de desenvolvimento)
- TSUP (build do projeto)
- HTTP nativo (sem frameworks)

---

## 📁 Estrutura do projeto

```
PROJETOPODCAST/
├── docs/
│   └── arch/
│       ├── arch.excalidraw
│       └── readme.md
├── node_modules/
├── src/
│   ├── controllers/
│   │   └── podcasts-controller.ts
│   ├── models/
│   │   ├── podcast-model.ts
│   │   └── podcast-transfer-model.ts
│   ├── repositories/
│   │   ├── podcasts-repository.ts
│   │   └── podcasts.json
│   ├── routes/
│   │   └── routes.ts
│   ├── services/
│   │   ├── filter-episodes-services.ts
│   │   └── list-episode-services.ts
│   ├── utils/
│   │   ├── content-type.ts
│   │   ├── http-methods.ts
│   │   └── status-code.ts
│   ├── app.ts
│   └── server.ts
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── tsconfig.json
```

## ⚙️ Como rodar o projeto

### 1. Instalar dependências

```bash
npm install
```

## 📁 Observações

- Os dados são armazenados em arquivo JSON (mock).
- Projeto com foco educacional para aprendizado de arquitetura backend.
- Não utiliza frameworks como Express para reforçar conceitos básicos do Node.
