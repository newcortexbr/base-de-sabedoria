---
id: noticias-automaticas-fontes-rss
titulo: "notícias automáticas: cadastrar e controlar fontes de RSS"
publico:
  - admin
modulo: notícias
categoria: conteúdo
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - r5rFCgAV0mg
---

## objetivo

aqui você traz notícias de outros sites sozinho, por fontes de RSS. RSS é o endereço que o site oferece para outros sites lerem as notícias dele.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## veja também
- para cadastrar um site que não está na lista, veja o artigo "adicionar fonte de RSS colando o endereço".
- para conferir a última atualização das fontes, veja o artigo "ver quando cada fonte de RSS trouxe notícias".
- para publicar direto ou revisar antes, veja o artigo "escolher se as notícias de uma fonte de RSS vão ao ar sozinhas".
- para pausar ou voltar uma fonte, veja o artigo "ligar ou desligar uma fonte de RSS".
- para apagar uma fonte, veja o artigo "excluir uma fonte de RSS".

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Notícias Automáticas` e depois em `Fontes de RSS`. [guia=menu:/painel/noticias/fontes-rss] [t=7]
2. Para adicionar, clique no botão `+ Cadastrar RSS` no topo da lista. [guia=fontes-rss.cadastrar] [t=20]
3. Na aba `Escolher da lista` (a que já vem aberta), marque os sites prontos que você quer (por exemplo, do Portal G1). [guia=fontes-rss-cadastrar.lista] [t=63]
4. Clique em `Criar N fonte(s)`: o botão mostra quantas você marcou (por exemplo, `Criar 2 fontes`). [guia=fontes-rss-cadastrar.criar]

## explicação
- as categorias globais (Brasil, economia, política, tecnologia, carros) trazem notícias nacionais ou do mundo, iguais em qualquer cidade, e não filtram por região.
- para notícias da região, use a seção de notícias regionais: escolha o estado, ou uma região dentro dele, e o sistema busca as notícias do G1 daquela região.
- o portal busca novidades automaticamente às 7h e às 19h, todos os dias.

## resultado

a fonte cadastrada e ativa passa a trazer notícias para o portal.

## desvios

- Fonte desativada para de trazer notícias.
- Se a verificação do endereço falhar, confira o link do RSS.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento der erro ou se a opção esperada não aparecer.

## fontes

- `portal-cidade/frontend/src/app/painel/noticias/fontes-rss/`
- `suporte-kb/mapa/admin/telas/painel-noticias-fontes-rss.md`

## lacunas

não foi feita validação visual no navegador. Os textos dos botões podem mudar.
- revisão 2026-10-19: o formulário não tem mais campo de categoria (o artigo antigo citava). A conferência do endereço é automática ao sair do campo, não há botão de verificar. O catálogo adiciona direto pelo botão `Adicionar`, não preenche o formulário.
