---
id: rss-colar-endereco
titulo: "adicionar fonte de RSS colando o endereço"
publico:
  - admin
modulo: notícias
categoria: conteúdo
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - rss
  - fonte
  - link
  - noticia
  - automatico
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - r5rFCgAV0mg
---

## objetivo

Aqui você cadastra uma fonte própria usando o endereço de RSS fornecido pelo site de origem.

## pré-requisitos

- Entrar no painel como administrador.
- Ter um endereço de RSS válido.

## passos

1. Na seção `Conteúdo` do menu lateral, em `Notícias Automáticas`, clique em `Fontes de RSS`. [t=9] [guia=menu:/painel/noticias/fontes-rss]
2. Clique em `+ Cadastrar RSS`. [t=20] [guia=fontes-rss.cadastrar]
3. Clique na aba `Colar endereço`. [guia=fontes-rss-cadastrar.aba-colar]
4. Preencha `Título *`. [guia=fontes-rss-cadastrar.titulo]
5. Cole o endereço em `URL do RSS *`. [guia=fontes-rss-cadastrar.url]
6. Em `Status *`, escolha `Ligada` para permitir importações. [t=78] [guia=fontes-rss-cadastrar.status]
7. Escolha `Quantidade de notícias por vez *`. [t=80] [guia=fontes-rss-cadastrar.quantidade]
8. Para receber como rascunho e revisar, deixe `Publicar direto no site` desmarcado. [t=88] [guia=fontes-rss-cadastrar.publicar-direto]
9. Clique em `Adicionar`. [guia=fontes-rss-cadastrar.enviar]

## resultado

A tela mostra `Fonte salva` e volta à lista. Uma fonte ligada pode solicitar uma primeira importação ao salvar; com publicação direta desligada, as notícias entram como rascunho.

## desvios

- O endereço é conferido automaticamente ao sair do campo; não existe botão de verificar.
- Se houver erro no endereço, leia a mensagem junto ao campo antes de salvar novamente.
- Para importar já publicado, use “escolher se as notícias de uma fonte de RSS vão ao ar sozinhas”.
- O formulário não tem campo de categoria nem intervalo de publicação.
- Para fontes prontas do catálogo, use o artigo “notícias automáticas: cadastrar e controlar fontes de RSS”.

## cuidado

Endereços de outros sites podem dar problema na importação; prefira as fontes do catálogo (`Escolher da lista`).

## fontes

- `frontend/src/app/painel/noticias/fontes-rss/cadastrar/page.tsx:30` — Colar endereço.
- `frontend/src/components/painel/FonteRssForm.tsx:238` — título e endereço.
- `frontend/src/components/painel/FonteRssForm.tsx:273` — verificação ao sair do campo.
- `frontend/src/components/painel/FonteRssForm.tsx:345` — status, quantidade e publicação direta.
- `backend/noticias/api_admin.py:1461` — importação ao criar.
- Vídeo `r5rFCgAV0mg`, legenda em 78s–91s: configurações comuns; não demonstra preencher a aba Colar endereço.

## lacunas

Não executada verificação de um feed real, importação ou salvamento no navegador.
