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
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - r5rFCgAV0mg
---

## objetivo

trazer notícias de outros sites automaticamente, por fontes de RSS.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Notícias Automáticas` e depois em `Fontes de RSS` (`/painel/noticias/fontes-rss`). [guia=menu:/painel/noticias/fontes-rss] [t=7]
2. A lista mostra cada site de onde vêm as notícias e, na coluna `Última Atualização`, quando ele trouxe notícias pela última vez. [guia=fontes-rss.ultima-atualizacao] [t=13]
3. Para adicionar, clique no botão `+ Cadastrar RSS` no topo da lista. [guia=fontes-rss.cadastrar] [t=20]
4. Na aba `Escolher da lista` (a que já vem aberta), marque os sites prontos que você quer (por exemplo, do Portal G1). [guia=fontes-rss-cadastrar.lista] [t=63]
5. Clique em `Criar N fonte(s)`: o botão mostra quantas você marcou (por exemplo, `Criar 2 fontes`). [guia=fontes-rss-cadastrar.criar]
6. Se o site que você quer não está na lista, clique na aba `Colar endereço`. [guia=fontes-rss-cadastrar.aba-colar]
7. Preencha o `Título`. [guia=fontes-rss-cadastrar.titulo]
8. Cole o endereço em `URL do RSS`. Ao sair do campo, o sistema confere sozinho se ele funciona. [guia=fontes-rss-cadastrar.url]
9. Escolha a `Quantidade de notícias por vez`. [guia=fontes-rss-cadastrar.quantidade] [t=81]
10. Escolha o `Status`: `Ligada` ou `Desligada`. [guia=fontes-rss-cadastrar.status]
11. Clique em `Adicionar`. Você volta para a lista. [guia=fontes-rss-cadastrar.enviar]
12. Para escolher se as notícias de uma fonte vão ao ar sozinhas, clique no lápis na linha da fonte que você quer. [guia=fontes-rss.editar] [t=75]
13. Marque `Publicar direto no site` para as notícias irem ao ar sozinhas. Desmarcado, elas entram como rascunho para você revisar. [guia=fontes-rss-cadastrar.publicar-direto] [t=83]
14. Clique em `Salvar`. [guia=fontes-rss-cadastrar.enviar]
15. Na lista, clique na chavinha da coluna `Status` para ligar ou desligar a fonte. [guia=fontes-rss.status] [t=78]
16. Para excluir, clique na lixeira na linha da fonte. As fontes da plataforma não têm lixeira: desligue pelo `Status`. [guia=fontes-rss.excluir]

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
