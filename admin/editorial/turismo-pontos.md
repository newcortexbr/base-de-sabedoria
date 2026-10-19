---
id: editorial-turismo-pontos
titulo: pontos turísticos: cadastro e categorias
publico:
  - administrador do portal
modulo: Turismo
categoria: conteúdo
aba: Pontos Turísticos
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-15
validacao: docs-e-codigo
videos:
  - QrkL_nJEa-c
---

## objetivo
cadastrar e localizar pontos turísticos e entender o vínculo com categorias.

## pré-requisitos/permissões
acesse pelo painel do portal com permissão de administração e módulo Turismo disponível. O acesso é decidido pelo servidor.

## passos
1. Abra `Pontos Turísticos` em `/painel/turismo/pontos`.
2. Use `+ Novo Ponto` (`/painel/turismo/pontos/novo`) para cadastrar.
3. Preencha os campos do formulário, incluindo local e categoria quando aplicável, e salve.
4. Use `Buscar` para localizar um ponto pelo nome.
5. Use `Categorias` para abrir `/painel/turismo/categorias`; `Roteiros` e `Eventos` têm telas próprias.
6. Abra a galeria do ponto pela ação correspondente na ficha existente (`/painel/turismo/pontos/[id]/fotos`).

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
