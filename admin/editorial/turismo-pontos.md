---
id: editorial-turismo-pontos
titulo: "pontos turísticos: cadastro e categorias"
publico:
  - administrador do portal
modulo: Turismo
categoria: conteúdo
aba: Pontos Turísticos
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - QrkL_nJEa-c
---

## objetivo
cadastrar e localizar pontos turísticos e entender o vínculo com categorias.

## pré-requisitos/permissões
acesse pelo painel do portal com permissão de administração e módulo Turismo disponível. O acesso é decidido pelo servidor.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Turístico / Eventos` e depois em `Pontos Turísticos` (`/painel/turismo/pontos`).
2. Para cadastrar, clique no botão `+ Novo Ponto` no topo da página (`/painel/turismo/pontos/novo`).
3. Envie a foto principal, que é a capa do ponto. Prefira uma imagem deitada (horizontal).
4. Preencha o nome, escolha a categoria e escreva a descrição.
5. Na parte de informações, digite o CEP: o endereço é preenchido sozinho.
6. Informe os horários de funcionamento de cada dia.
7. Clique em `Cadastrar ponto`.
8. Para achar um ponto, escreva o nome no campo `Buscar ponto turístico...` e clique em `Buscar`.
9. No topo da página há também os botões `Categorias` (`/painel/turismo/categorias`), `Roteiros` e `Eventos`, que levam às outras telas de turismo.
10. Para mudar as fotos de um ponto, clique em `Editar` na linha dele (`/painel/turismo/pontos/[id]`) e use a parte `Galeria de fotos e vídeos`.

## resultado
A listagem mostra nome, categoria, cidade e status. Um ponto pode ter imagens e a galeria deve ser gerenciada pela tela correspondente, não por nomes de arquivo improvisados.

## desvios
- Um ponto não é um evento nem um roteiro; cada tipo tem sua própria tela.
- Se a categoria não estiver disponível, confira a tela de categorias de Turismo. Não substitua catálogo por texto livre quando o seletor pedir uma opção.
- Não exclua como tentativa de corrigir falha de exibição: exclusão é irreversível na interface.

## quando pedir ajuda
peça ajuda se o local ou categoria esperados não aparecerem, se a imagem não for exibida ou se a listagem mostrar erro. Informe a rota e a mensagem, sem compartilhar dados pessoais.

## fontes
- `portal-cidade/frontend/src/app/painel/turismo/pontos/page.tsx:51` — cabeçalho e ações de navegação.
- `portal-cidade/frontend/src/app/painel/turismo/pontos/page.tsx:76` — busca.
- `portal-cidade/frontend/src/app/painel/turismo/pontos/page.tsx:107` — colunas da listagem.
- `docs/PRODUCT.md:41` — recursos de Turismo.

## lacunas
não verificado visualmente. O formulário detalhado e a exibição pública do ponto não foram cobertos por uma sessão de execução.
