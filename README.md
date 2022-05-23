![VUElAND](./public/images.marwill.svg)

Este projeto tem como objetivo construir a partir de um protótipo no Figma, um layout consumindo API da MARVEL.

# Visite o site
A aplicação pode ser visitada a qualquer momento pelo link: https://.....

- Publicação realizada pela [Vercel](https://vercel.com/).

### Tecnologias usadas
- [React](https://pt-br.reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com/)
- [Prettier](https://prettier.io/) + [ESLINT](https://eslint.org/)
- Testes unitários - Jest + React Testing Library
- Cypress - Teste E2E e Teste de integração

## Vamos começar? :smiley:

### Instalação do projeto
Após clonar o projeto do repositório do github, rode os seguintes comandos no terminal:

Instação de todos os pacotes do projeto.
```BASH
yarn
```

Após a instalação das depências, podemos utilizar alguns comando disponíveis.

### :construction: Ambiente de desenvolvimento
Executar o projeto em ambiente local de desenvolvimento.
```BASH
yarn dev
```

### :wrench: Build do projeto
Para realizar o build do projeto.
```BASH
yarn build
```

### :heart: Produção
Para rodar o modo de produção
```BASH
yarn build
```

## Estrutura de diretórios do projeto

### src
Este diretório armazena todo o código desenvolvido ou seja, lógica da aplicação, componentes, páginas, rotas, serviços e etc.

### src/components
Contém apenas componentes estáticos, poder ser utilizado pelos ```/modules``` ou até mesmo por ```/pages```.

### src/modules
Contém componentes mais robustos, aqueles que podem conter lógica e/ou receber ```props```.

### src/pages
Armazena as páginas/rotas da apalicação.

### src/services
Contém a lógica de conexão com serviços externos, por exemplo a própria [API da MARVEL](https://developer.marvel.com/). 

### src/styles
Arquivos de estilos globais e também estilos das páginas são armazenados aqui.
