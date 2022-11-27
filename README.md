<!-- markdownlint-disable MD004 MD007 MD048 MD033-->

# :atom_symbol: Miranda React Project 1

## :open_book: Content (conteúdo)

- [:atom_symbol: Miranda React Project 1](#atom_symbol-miranda-react-project-1)
  - [:open_book: Content (conteúdo)](#open_book-content-conteúdo)
  - [:us: English](#us-english)
    - [:desktop_computer: Deploy link](#desktop_computer-deploy-link)
    - [:deciduous_tree: Development environment](#deciduous_tree-development-environment)
    - [:information_source: Project info](#information_source-project-info)
    - [:printer: Cloning the project and opening it on VSCode](#printer-cloning-the-project-and-opening-it-on-vscode)
    - [:computer: How to run it locally](#computer-how-to-run-it-locally)
    - [:whale2: How to run it through docker](#whale2-how-to-run-it-through-docker)
    - [:whale: How to run it through docker-compose](#whale-how-to-run-it-through-docker-compose)
    - [:house: Home page](#house-home-page)
    - [:iphone: Responsiveness](#iphone-responsiveness)
  - [:brazil: Português](#brazil-português)
    - [:desktop_computer: Link do deploy](#desktop_computer-link-do-deploy)
    - [:deciduous_tree: Ambiente de desenvolvimento](#deciduous_tree-ambiente-de-desenvolvimento)
    - [:information_source: Informações do projeto](#information_source-informações-do-projeto)
    - [:printer: Clonando o projeto e abrindo no VSCode](#printer-clonando-o-projeto-e-abrindo-no-vscode)
    - [:computer: Como rodar localmente](#computer-como-rodar-localmente)
    - [:whale2: Como rodar através do docker](#whale2-como-rodar-através-do-docker)
    - [:whale: Como rodar através do docker-compose](#whale-como-rodar-através-do-docker-compose)
    - [:house: Página inicial](#house-página-inicial)
    - [:iphone: Responsividade](#iphone-responsividade)

## :us: English

### :desktop_computer: Deploy link

[https://miranda-react-project1.netlify.app/](https://miranda-react-project1.netlify.app/)

### :deciduous_tree: Development environment

| Tool                                               | Version  |
| -------------------------------------------------- | -------- |
| [Node](https://nodejs.org/en/)                     | 18.12.1  |
| [Docker](https://www.docker.com/)                  | 20.10.20 |
| [Docker Compose](https://docs.docker.com/compose/) | 2.12.0   |

### :information_source: Project info

- **Why I did this project:** It was part of the React section of Luiz Otávio Miranda's course about React and Next.js;
- **Core Technologies:** React (w/ mainly class components, but also functional components mixed for learning purposes) and CSS;
- **Secondary Technologies:** create-react-app and Docker (w/ compose);
- **Description:** This project has a single page (home) where an API call is made (JSON Placeholder) to return posts with photos. There is also an input where the user can filter the posts by their title.

### :printer: Cloning the project and opening it on VSCode

**Prerequisites:** You need to have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your computer;

**1.** Clone the repository:

```bash
  git clone git@github.com:rodrigomarchisilva/miranda-react-project1.git
```

**2.** Open the project:

```bash
  cd miranda-react-project1
```

**3.** Make sure you have VSCode installed and running:

```bash
  code -v
```

**4.** If not, download and install it:

- [Download VSCode](https://code.visualstudio.com/download)

**5.** Access it through VSCode:

```bash
  code .
```

### :computer: How to run it locally

**1.** Install the dependencies:

```bash
  npm install
```

**2.** Run the app:

```bash
  npm start
```

### :whale2: How to run it through docker

**1.** Make sure you have Docker installed and running:

```bash
  docker -v
```

**2.** If not, download and install it:

- [Download Docker](https://www.docker.com/products/docker-desktop)

**3.** Build the image:

```bash
  docker build -t miranda-react-project1 .
```

**4.** Run the container:

```bash
  docker run -v ${PWD}:/app -v /app/node_modules -p 3000:3000 --rm miranda-react-project1
```

### :whale: How to run it through docker-compose

**1.** Make sure you have Docker installed and running:

```bash
  docker -v
```

**2.** If not, download and install it:

- [Download Docker](https://www.docker.com/products/docker-desktop)

**3.** Make sure you have Docker Compose installed and running:

```bash
  docker-compose -v
```

**4.** If not, download and install it:

- [Download Docker Compose](https://docs.docker.com/compose/install/)

**5.** Run the container:

```bash
  npm run compose:up
```

**6.** Stop the container:

```bash
  npm run compose:down
```

### :house: Home page

![Home page](src/gifs/miranda-react-project1-home.gif)

### :iphone: Responsiveness

![Responsiveness](src/gifs/miranda-react-project1-responsiveness.gif)

> The app is responsive across all resolutions.

## :brazil: Português

### :desktop_computer: Link do deploy

[https://miranda-react-project1.netlify.app/](https://miranda-react-project1.netlify.app/)

### :deciduous_tree: Ambiente de desenvolvimento

| Ferramenta                                         | Versão   |
| -------------------------------------------------- | -------- |
| [Node](https://nodejs.org/en/)                     | 18.12.1  |
| [Docker](https://www.docker.com/)                  | 20.10.20 |
| [Docker Compose](https://docs.docker.com/compose/) | 2.12.0   |

### :information_source: Informações do projeto

- **Por que eu fiz esse projeto:** Foi parte da seção de React do curso de React e Next.js do Luiz Otávio Miranda;
- **Tecnologias principais:** React (com componentes de classe, mas também componentes funcionais misturados para fins de aprendizado) e CSS;
- **Tecnologias secundárias:** create-react-app e Docker (com compose);
- **Descrição:** Esse projeto tem uma única página (home) onde é feita uma chamada à API (JSON Placeholder) para retornar posts com fotos. Também há um input onde o usuário pode filtrar os posts pelo título.

### :printer: Clonando o projeto e abrindo no VSCode

**Pré-requisitos:** Você precisa ter o [Node.js](https://nodejs.org/en/) e o [Git](https://git-scm.com/) instalados no seu computador;

**1.** Clone o repositório:

```bash
  git clone git@github.com:rodrigomarchisilva/miranda-react-project1.git
```

**2.** Abra o projeto:

```bash
  cd miranda-react-project1
```

**3.** Certifique-se de ter o VSCode instalado e rodando:

```bash
  code -v
```

**4.** Se não tiver, baixe e instale:

- [Download VSCode](https://code.visualstudio.com/download)

**5.** Acesse-o pelo VSCode:

```bash
  code .
```

### :computer: Como rodar localmente

**1.** Instale as dependências:

```bash
  npm install
```

**2.** Rode o app:

```bash
  npm start
```

### :whale2: Como rodar através do docker

**1.** Certifique-se de ter o Docker instalado e rodando:

```bash
  docker -v
```

**2.** Se não tiver, baixe e instale:

- [Download Docker](https://www.docker.com/products/docker-desktop)

**3.** Faça o build da imagem:

```bash
  docker build -t miranda-react-project1 .
```

**4.** Rode o container:

```bash
  docker run -v ${PWD}:/app -v /app/node_modules -p 3000:3000 --rm miranda-react-project1
```

### :whale: Como rodar através do docker-compose

**1.** Certifique-se de ter o Docker Compose instalado e rodando:

```bash
  docker-compose -v
```

**2.** Se não tiver, baixe e instale:

- [Download Docker Compose](https://docs.docker.com/compose/install/)

**3.** Rode o container:

```bash
  npm run compose:up
```

**4.** Pare o container:

```bash
  npm run compose:down
```

### :house: Página inicial

![Página inicial](src/gifs/miranda-react-project1-home.gif)

### :iphone: Responsividade

![Responsiveness](src/gifs/miranda-react-project1-responsiveness.gif)

> A aplicação é responsiva, e se adapta a qualquer tamanho de tela.
