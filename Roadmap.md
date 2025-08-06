# Roadmap do Projeto AutoElite

Este documento descreve o plano de desenvolvimento para evoluir o AutoElite, focando em melhorias de fundação, novas funcionalidades e visão de longo prazo.

---

## Fase 1: Melhorias Fundamentais (Refatoração e Otimização)

O objetivo desta fase é fortalecer a base do projeto, garantindo performance, escalabilidade e uma melhor experiência de desenvolvimento.

- [ ] **Implementar TanStack (React) Query:** Substituir a lógica de `useEffect` para data fetching, otimizando o carregamento, caching e revalidação de dados.
- [ ] **Adotar Zustand:** Centralizar o estado global da UI (filtros, temas, etc.) para evitar "prop drilling" e simplificar a gestão de estado.
- [ ] **Refatorar a UI com Skeletons e Modais:** Substituir textos de "loading" por *skeletons* e adicionar modais de confirmação para ações destrutivas, melhorando a UX.
- [ ] **Criar Hooks Customizados:** Abstrair a lógica de acesso a dados (`useCars`, `useUserCars`) para limpar os componentes e reutilizar código.
- [ ] **Implementar Paginação:** Adicionar paginação na `HomePage` e `ManageCar` para lidar com um grande volume de dados de forma eficiente.

---

## Fase 2: Expansão de Funcionalidades Essenciais

Com a base sólida, esta fase foca em adicionar funcionalidades cruciais para o utilizador final.

- [ ] **Sistema de Filtro e Pesquisa Avançada:** Permitir filtrar por múltiplos critérios (marca, modelo, ano, preço) e pesquisa por texto.
- [ ] **Página de Perfil do Utilizador:** Área para o utilizador gerir seus dados pessoais e anúncios.
- [ ] **Sistema de Favoritos:** Permitir que utilizadores salvem anúncios de interesse.
- [ ] **Implementar Regras de Segurança no Firebase:** Definir `firestore.rules` para garantir que utilizadores só possam modificar os seus próprios dados.

---

## Fase 3: Funcionalidades Avançadas e Visão de Produto

Esta fase visa transformar o AutoElite num produto competitivo e completo.

- [ ] **Painel de Administrador (Admin Dashboard):** Área restrita para gestão de utilizadores, anúncios e visualização de estatísticas.
- [ ] **Sistema de Notificações:** Alertar utilizadores sobre interações, alterações de preço em favoritos, etc.
- [ ] **Analytics por Anúncio:** Fornecer dados de visualizações para os vendedores.
- [ ] **Otimização para SEO:** Utilizar `react-helmet-async` para meta tags dinâmicas e melhorar o ranking em motores de busca.
- [ ] **Comparador de Veículos:** Ferramenta para comparar especificações de múltiplos carros lado a lado.
