# 📝 Todo App Fullstack (.NET Web API & React)

Este é um aplicativo completo de lista de tarefas desenvolvido com um backend em ASP.NET Core Web API e um frontend em React. Ele permite que os usuários criem, visualizem, editem e excluam tarefas, demonstrando uma integração funcional entre as duas tecnologias.

## ✨ Funcionalidades

* **Adicionar Tarefas:** Crie novas tarefas com título e descrição.
* **Listar Tarefas:** Visualize todas as tarefas existentes.
* **Editar Tarefas:** Modifique o título e a descrição de tarefas já criadas.
* **Excluir Tarefas:** Remova tarefas da lista permanentemente.
* **Persistência de Dados:** As tarefas são armazenadas em um banco de dados relacional (SQL Server, configurado via Entity Framework Core).
* **Design Responsivo:** Interface de usuário amigável, construída com Material-UI.

## 🚀 Tecnologias Utilizadas

**Backend (API):**

* **ASP.NET Core 8 Web API:** Framework para construção de APIs RESTful.
* **Entity Framework Core:** ORM (Object-Relational Mapper) para interação com o banco de dados.
* **SQL Server:** Sistema de gerenciamento de banco de dados relacional.
* **Swagger/OpenAPI:** Documentação e teste interativo da API.

**Frontend (React):**

* **React.js:** Biblioteca JavaScript para construção de interfaces de usuário.
* **Material-UI (MUI):** Biblioteca de componentes React que implementa o Material Design do Google.
* **Axios:** Cliente HTTP para fazer requisições à API.
* **LocalStorage:** Usado para um cache básico de dados offline.

## 💻 Como Rodar o Projeto

Siga os passos abaixo para configurar e executar a aplicação em sua máquina local.

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

* [.NET SDK 8.0](https://dotnet.microsoft.com/download/dotnet/8.0) (ou versão superior)
* [Node.js](https://nodejs.org/en/download/) (inclui npm) - Versão LTS recomendada
* Um servidor de banco de dados SQL Server (local ou remoto)

### 1. Configuração do Backend (.NET Web API)

1.  **Navegue até a pasta da API:**
    Abra seu terminal (PowerShell, CMD ou Bash) e vá para o diretório do backend:
    ```bash
    cd TodoApp/TodoApp.Api
    ```

2.  **Restaure as dependências:**
    ```bash
    dotnet restore
    ```

3.  **Configurações do Banco de Dados:**
    * Abra o arquivo `appsettings.json` na pasta `TodoApp.Api`.
    * Atualize a `ConnectionStrings` para apontar para a sua instância do SQL Server. Exemplo:
        ```json
        "ConnectionStrings": {
          "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=TodoDb;Trusted_Connection=True;MultipleActiveResultSets=true"
        }
        ```
        *(A string acima é um exemplo para LocalDB. Ajuste conforme sua configuração do SQL Server.)*

4.  **Aplique as Migrações do Entity Framework Core:**
    Isso criará o banco de dados e as tabelas necessárias.
    ```bash
    dotnet ef database update
    ```

5.  **Confie no Certificado de Desenvolvimento HTTPS:**
    Se você ainda não confiou no certificado HTTPS de desenvolvimento, execute este comando (pode precisar de permissões de administrador):
    ```bash
    dotnet dev-certs https --trust
    ```

6.  **Inicie a API:**
    É crucial iniciar a API usando o perfil HTTPS para que o frontend possa se comunicar.
    ```bash
    dotnet run --launch-profile https
    ```
    A API estará escutando em `https://localhost:7273` e `http://localhost:5041`. Você pode testar a API acessando a documentação Swagger em `https://localhost:7273/swagger`.

### 2. Configuração do Frontend (React)

1.  **Navegue até a pasta do frontend:**
    Em um **novo terminal**, vá para o diretório do frontend:
    ```bash
    cd todo-app-frontend
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o Aplicativo React:**
    ```bash
    npm start
    ```
    O aplicativo será aberto automaticamente no seu navegador em `http://localhost:3000`.

## 📂 Estrutura do Projeto

todo-app-dotnet-react/
├── TodoApp/
│   └── TodoApp.Api/             # Backend ASP.NET Core Web API
│       ├── Controllers/         # Lógica da API (TodoItemsController.cs)
│       ├── Data/                # Contexto do banco de dados (AppDbContext.cs)
│       ├── Models/              # Modelos de dados (TodoItem.cs)
│       ├── Migrations/          # Migrações do Entity Framework Core
│       ├── Properties/          # launchSettings.json (configurações de inicialização)
│       └── ... outros arquivos .NET
└── todo-app-frontend/         # Frontend React
├── public/                  # Arquivos estáticos
├── src/
│   ├── components/          # Componentes reutilizáveis (TodoForm, TodoItem)
│   ├── pages/               # Páginas da aplicação (TodoListPage.js)
│   ├── services/            # Lógica de comunicação com a API (todoService.js)
│   ├── utils/               # Utilitários (LocalStorage.js)
│   └── App.js               # Componente principal
└── ... outros arquivos React

---

Sinta-se à vontade para ajustar qualquer parte deste `README` para melhor se adequar ao seu estilo ou a detalhes específicos que você queira destacar!



