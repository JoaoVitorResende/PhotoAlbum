# PhotoAlbum (gallery-plus)

Aplicação web para criar álbuns, carregar fotos e organizar suas fotos dentro dos álbuns.

## Funcionalidades

- Criação e gerenciamento de álbuns
- Upload de fotos
- Organização de fotos dentro dos álbuns
- Visualização das fotos em galeria

> Ajuste esta seção conforme as funcionalidades forem implementadas.

## Tecnologias

**Front-end**

![React](https://img.shields.io/badge/-React-20232A?logo=react&logoColor=61DAFB&style=for-the-badge)
![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge)
![Radix UI](https://img.shields.io/badge/-Radix%20UI-161618?logo=radixui&logoColor=white&style=for-the-badge)
![React Hook Form](https://img.shields.io/badge/-React%20Hook%20Form-EC5990?logo=reacthookform&logoColor=white&style=for-the-badge)
![Zod](https://img.shields.io/badge/-Zod-3E67B1?logo=zod&logoColor=white&style=for-the-badge)
![React Router](https://img.shields.io/badge/-React%20Router-CA4245?logo=reactrouter&logoColor=white&style=for-the-badge)

**Back-end**

![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge)
![Fastify](https://img.shields.io/badge/-Fastify-000000?logo=fastify&logoColor=white&style=for-the-badge)
![tsup](https://img.shields.io/badge/-tsup-000000?logo=esbuild&logoColor=FFCF00&style=for-the-badge)

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [pnpm](https://pnpm.io/) como gerenciador de pacotes

## Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd gallery-plus

# Instale as dependências
pnpm install
```

## Como executar

### Ambiente de desenvolvimento

Rode o front-end e o back-end em terminais separados:

```bash
# Front-end (Vite)
pnpm dev

# Back-end (Fastify, com watch + restart automático)
pnpm dev-server
```

### Build de produção

```bash
# Gera o build do servidor e do front-end
pnpm build
```

### Rodando em produção

```bash
# Executa o servidor já buildado
pnpm run-server
```

## Scripts disponíveis

| Script            | Descrição                                                          |
|-------------------|----------------------------------------------------------------------|
| `pnpm dev`         | Inicia o front-end em modo desenvolvimento (Vite)                  |
| `pnpm dev-server`   | Inicia o back-end em modo desenvolvimento com auto-reload (tsup)   |
| `pnpm build`        | Compila o servidor (TypeScript) e gera o build do front-end        |
| `pnpm build-server` | Type-check e build apenas do servidor                              |
| `pnpm run-server`   | Executa o servidor já compilado                                    |
| `pnpm preview`      | Pré-visualiza o build do front-end                                 |
| `pnpm lint`         | Executa o ESLint no projeto                                        |

## Estrutura do projeto

```
gallery-plus/
├── src/            # Código do front-end (React)
├── server/         # Código do back-end (Fastify)
│   └── dist/       # Build do servidor (gerado pelo tsup)
├── public/         # Arquivos estáticos
├── package.json
├── vite.config.ts
└── tsconfig.server.json
```

> Ajuste esta estrutura para refletir a organização real do seu projeto.

## Roadmap

- [ ] CRUD de álbuns
- [ ] Upload múltiplo de fotos
- [ ] Organização/movimentação de fotos entre álbuns
- [ ] Exclusão de fotos e álbuns
- [ ] Autenticação de usuário (se aplicável)

## Licença

Defina a licença do projeto aqui (ex: MIT).
