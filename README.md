# AutoElite

<div align="center">
  <strong>EN:</strong> A modern, responsive, and intuitive platform for managing and showcasing vehicles for sale.
  <br />
  <strong>PT:</strong> Uma plataforma intuitiva, moderna e completamente responsiva para a gestão e visualização de veículos à venda.
</div>

<br />

<div align="center">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)

</div>

<p align="center">
  <a href="#-about-the-project">About</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-roadmap">Roadmap</a>
</p>

![Cover](screenshot/home.jpeg)

## 🚀 About the Project / Sobre o Projeto

**EN:** AutoElite is a full-stack web application designed to provide a seamless experience for both car sellers and buyers. Sellers can easily manage their listings through a secure dashboard, while buyers can browse, filter, and view detailed information about each vehicle. The project was built with a modern, scalable, and maintainable tech stack, focusing on performance and user experience.

---

**PT:** AutoElite é uma aplicação web full-stack projetada para fornecer uma experiência fluida tanto para vendedores quanto para compradores de carros. Vendedores podem gerir facilmente seus anúncios através de um painel seguro, enquanto compradores podem navegar, filtrar e ver informações detalhadas sobre cada veículo. O projeto foi construído com um stack tecnológico moderno, escalável e de fácil manutenção, com foco em performance e na experiência do utilizador.

## ✨ Features / Funcionalidades

-   👤 **User Authentication:** Secure registration and login system using Firebase Auth.
-   🚗 **Vehicle Management:** Users can create, read, update, and delete their own car listings.
-   🖼️ **Image Uploads:** Multiple image uploads for each vehicle, handled by Firebase Storage.
-   🔍 **Public Showcase:** A public gallery to display all available cars with detailed pages for each one.
-   📱 **Responsive Design:** A mobile-first approach ensuring a great experience on all devices.
-   🔐 **Protected Routes:** Secure dashboard area accessible only to authenticated users.

---

-   👤 **Autenticação de Utilizadores:** Sistema seguro de registo e login com Firebase Auth.
-   🚗 **Gestão de Veículos:** Utilizadores podem criar, ler, atualizar e apagar os seus próprios anúncios de carros.
-   🖼️ **Upload de Imagens:** Upload de múltiplas imagens para cada veículo, gerido pelo Firebase Storage.
-   🔍 **Vitrini Pública:** Uma galeria pública para exibir todos os carros disponíveis, com páginas de detalhe para cada um.
-   📱 **Design Responsivo:** Abordagem mobile-first que garante uma ótima experiência em todos os dispositivos.
-   🔐 **Rotas Protegidas:** Área de painel segura, acessível apenas a utilizadores autenticados.

## 🛠️ Tech Stack / Stack Tecnológico

**EN:** The project uses a modern and robust stack to ensure a high-quality final product. The main technologies and the reasons for their choice are listed below.

**PT:** O projeto utiliza um stack moderno e robusto para garantir um produto final de alta qualidade. Abaixo estão as principais tecnologias e as razões por trás de sua escolha.

| Technology | Rationale (EN) | Justificativa (PT) |
| :--- | :--- | :--- |
| **React** | A component-based architecture for building scalable and maintainable UIs. | Arquitetura baseada em componentes para construir UIs escaláveis e de fácil manutenção. |
| **TypeScript** | Ensures type safety, reducing bugs and improving developer experience. | Garante segurança de tipos, reduzindo bugs e melhorando a experiência de desenvolvimento. |
| **Vite** | A modern build tool that provides an extremely fast development environment. | Ferramenta de build moderna que oferece um ambiente de desenvolvimento extremamente rápido. |
| **TailwindCSS** | A utility-first CSS framework for rapidly building custom user interfaces. | Framework CSS utility-first para construir interfaces de utilizador personalizadas rapidamente. |
| **Firebase** | An all-in-one Backend-as-a-Service (BaaS) for Auth, Database, and Storage. | Um Backend-as-a-Service (BaaS) completo para Autenticação, Banco de Dados e Armazenamento. |
| **React Hook Form** | For building performant and flexible forms with easy-to-manage validation. | Para construir formulários performáticos e flexíveis com validação fácil de gerir. |
| **Zod** | For schema declaration and validation, ensuring data integrity from client to server. | Para declaração e validação de schemas, garantindo a integridade dos dados do cliente ao servidor. |

## 🖼️ Screenshots / Telas da Aplicação

| Login (Desktop / Mobile) | Home (Desktop / Mobile) |
| :---: | :---: |
| <img src="screenshot/login.png" alt="Login Screen" width="400"/> <img src="screenshot/login-mobile.jpeg" alt="Login Screen Mobile" width="150"/> | <img src="screenshot/home.jpeg" alt="Home Screen" width="400"/> <img src="screenshot/home-mobile.jpeg" alt="Home Screen Mobile" width="150"/> |
| **Vehicle Details / Detalhes do Veículo** | **Management Dashboard / Painel de Gestão** |
| <img src="screenshot/detailcar.png" alt="Details Screen" width="400"/> | <img src="screenshot/manager.jpeg" alt="Dashboard Screen" width="400"/> |

## 🚀 Getting Started / Como Executar

**EN:** To run this project locally, follow the steps below.

**PT:** Para executar este projeto localmente, siga os passos abaixo.

1.  **Clone the repository / Clone o repositório:**
    ```bash
    git clone https://github.com/Leonildo-Gomes/auto-elite.git
    ```

2.  **Navigate to the directory / Navegue até o diretório:**
    ```bash
    cd auto-elite
    ```

3.  **Install dependencies / Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Set up environment variables / Configure as variáveis de ambiente:**
    -   **EN:** Create a `.env` file in the root of the project and add the Firebase variables as shown in `.env.example`.
    -   **PT:** Crie um ficheiro `.env` na raiz do projeto e adicione as variáveis do Firebase, conforme o exemplo em `.env.example`.
    ```bash
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    ```

5.  **Run the project / Execute o projeto:**
    ```bash
    npm run dev
    ```
    **EN:** The application will be available at `http://localhost:5173`.
    <br/>
    **PT:** A aplicação estará disponível em `http://localhost:5173`.

## 🗺️ Roadmap

**EN:** This project has a documented plan for future features and improvements. You can check it out here: [**Project Roadmap**](./Roadmap.md).

---

**PT:** Este projeto possui um plano documentado para futuras funcionalidades e melhorias. Pode consultá-lo aqui: [**Roadmap do Projeto**](./Roadmap.md).