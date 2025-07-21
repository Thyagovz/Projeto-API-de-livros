# Projeto - API de Livros

Este projeto foi desenvolvido com foco em TDD (Test Driven Development), aplicando conceitos de arquitetura de software, middleware e validações em uma API RESTful para gerenciar uma coleção de livros.

## Funcionalidades

- Criação de livros (`POST /books`)
- Listagem de todos os livros (`GET /books`)
- Leitura de livro por ID (`GET /books/:id`)
- Atualização parcial de dados (`PATCH /books/:id`)
- Remoção de livros (`DELETE /books/:id`)
- Busca de livros por nome via query string (`GET /books?search=`)
- Middleware global de tratamento de erros
- Middleware de verificação de existência do livro
- Middleware para impedir duplicação de nomes
- Middleware de validação com Zod
- IDs sequenciais para cada novo livro
- Testes automatizados prontos para validar todos os requisitos
- Segurança reforçada com Helmet

## Tecnologias Utilizadas

- **Node.js** e **Express** — base do servidor e gerenciamento de rotas
- **TypeScript** — tipagem estática e segurança na escrita do código
- **Helmet** — proteção de cabeçalhos HTTP
- **Zod** — validação de dados de entrada
- **Express-async-errors** — tratamento adequado de erros assíncronos
- **Vitest** — framework de testes
- **ts-node-dev** — ambiente de desenvolvimento com reinicialização automática
- **@types/express** — suporte a TypeScript no Express

## Requisitos para Funcionamento

### Pré-requisitos

- Node.js
- npm instalado

### Instalação

Você poderá rodar os testes automáticos preparádos para essa aplicação rodando o comando:

```
npm run test
```
