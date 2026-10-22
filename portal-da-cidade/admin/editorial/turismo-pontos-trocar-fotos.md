---
id: turismo-pontos-trocar-fotos
titulo: "trocar as fotos de um ponto turístico"
publico:
  - administrador do portal
modulo: Turismo
categoria: conteúdo
aba: Pontos Turísticos
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - QrkL_nJEa-c
---

## objetivo
aqui você acha um ponto turístico na lista e troca as fotos dele.

## pré-requisitos/permissões
Entrar no painel como administrador, com o módulo de turismo ativo no portal.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Turístico / Eventos` e depois em `Pontos Turísticos`. [guia=menu:/painel/turismo/pontos]
2. Para achar um ponto na lista, escreva o nome no campo `Buscar ponto turístico...`. [guia=pontos.campo-busca]
3. Clique em `Buscar`. [guia=pontos.buscar]
4. Para mudar as fotos de um ponto, clique em `Editar` na linha do ponto que você quer. [guia=pontos.editar]
5. Para trocar a capa do ponto, use a foto principal no topo do formulário. Ela fica separada da galeria. [guia=pontos-novo.foto]
6. Para trocar as demais fotos, use a parte `Galeria de fotos e vídeos`. [guia=galeria.adicionar-fotos]

## resultado
As fotos do ponto ficam como você deixou.

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
