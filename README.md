# 🐶 ADOPET

Projeto desenvolvido durante o curso **“JavaScript: implementando CRUD com requisições HTTP”** da Alura, atualizando dados de animais disponíveis para adoção.

O ADOPET permite buscar, adicionar e editar informações sobre animais utilizando uma **API REST** simulada. Foi criado para praticar operações **CRUD** e manipulação assíncrona com **fetch / async-await**.

---

## 📚 Funcionalidades

- 🔍 **Listagem** de animais disponíveis para adoção.
- ➕ **Cadastro** de um novo animal (CRUD – CREATE).
- ✏️ **Edição** de informações de um animal existente (CRUD – UPDATE).
- 🔄 **Requisições HTTP** usando `axios` e `async/await`.
- ⚠️ Tratamento de erros com `try/catch` e feedback ao usuário.
- 🌱 Renderização dinâmica do DOM usando `document.createElement` e `innerHTML`.

---

## 🧩 Tecnologias utilizadas

`JavaScript`: Linguagem de programação utilizada para desenvolver a lógica do aplicativo.

`Fetch API`: Utilizada para realizar requisições HTTP para comunicação com o servidor.

`Axios`: Biblioteca usada para facilitar e simplificar as requisições HTTP.

`Node.js`: Plataforma utilizada para executar o ambiente de desenvolvimento.

`JSON Server`: Utilizado para simular um backend e facilitar o desenvolvimento e teste das operações CRUD.

`CSS`: Utilizado para estilização da interface do aplicativo.

---

## 🚀 Como executar localmente
Para executar a API fake, você vai precisar do NodeJS; a versão utilizada foi a 20.12.2.

Instale o JSON Server globalmente (se ainda não estiver instalado):

```bash
npm install -g json-server
```

Crie o arquivo package.json:

```bash
npm init -y
```

Para executar, abra um novo terminal e, dentro da pasta backend, execute:

```bash
npm start
```

Acesse o backend localmente em seu navegador:

http://localhost:3000

Para executar o frontend, abra o projeto no Visual Studio Code. Com a extensão Live Server instalada, clique com o botão direito no arquivo index.html e selecione "Open with Live Server" no menu de contexto.

Acesse o frontend localmente em seu navegador:

http://localhost:5500

---

## 💡 Aprendizados
Uso de fetch ou axios + async/await para requisições HTTP.

Manipulação dinâmica do DOM (createElement, append, innerHTML).

Organização modular do código (funções separadas por responsabilidade).

Boas práticas no tratamento de erros e UX básico.

---

## 📝 Autoria
Projeto desenvolvido por Mylena Marques durante o curso da Alura. Consulte o repositório no GitHub para mais detalhes.
