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
aqui você cadastra e encontra os pontos turísticos da cidade, cada um com sua categoria. Ponto turístico não é evento nem roteiro: cada um tem tela própria.

## pré-requisitos/permissões
Entrar no painel como administrador, com o módulo de turismo ativo no portal.

## veja também
- para achar um ponto e mudar as fotos dele, veja o artigo "trocar as fotos de um ponto turístico".

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Turístico / Eventos` e depois em `Pontos Turísticos`. [guia=menu:/painel/turismo/pontos] [t=7]
2. Para cadastrar, clique no botão `+ Novo Ponto` no topo da página. [guia=pontos.novo] [t=15]
3. Envie a foto principal, que é a capa do ponto, clicando em `Escolher foto`. Prefira uma imagem deitada (horizontal). [guia=pontos-novo.foto] [t=18]
4. Em `Dados básicos`, escreva o `Nome *` do ponto. [guia=pontos-novo.nome] [t=26]
5. Escolha a `Categoria` (ou crie uma nova ali mesmo). [guia=pontos-novo.categoria] [t=28]
6. Escreva a `Descrição` do ponto. [guia=pontos-novo.descricao] [t=30]
7. Na parte `Informações`, digite o `CEP`: o endereço é preenchido sozinho. [guia=campo-cep.cep] [t=47]
8. Informe os horários de funcionamento de cada dia. Marque `Fechado` ou `24 horas` quando for o caso. [guia=pontos-novo.horarios] [t=57]
9. Se quiser, adicione mais fotos ou vídeos do YouTube na `Galeria de fotos e vídeos`. [guia=galeria.adicionar-fotos] [t=69]
10. Clique em `Cadastrar ponto`. [guia=pontos-novo.cadastrar] [t=80]

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
