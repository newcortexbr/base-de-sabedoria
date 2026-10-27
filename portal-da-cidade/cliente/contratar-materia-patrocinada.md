---
id: cliente-contratar-materia-patrocinada
titulo: "contratar uma matéria patrocinada"
publico:
  - cliente
modulo: noticias
categoria: conta
aba: nao-se-aplica
tipo_problema:
  - matéria patrocinada
  - publicar notícia da minha empresa
  - notícia paga
tags:
  - contratar
  - patrocinada
  - noticia
  - materia
  - pagamento
  - empresa
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - -Islw_h8OhU
---

## objetivo
aqui você paga para o portal publicar uma notícia sobre a sua empresa. O pagamento é único, por notícia, e a equipe do portal escreve e publica com você.

## pré-requisitos

- Estar logado na área do cliente como empresa.

## passos

1. Na parte `O que eu publico` do menu da esquerda, clique em `Notícias`. A página se chama `Matéria patrocinada`. [guia=menu:/minha-conta/materia-patrocinada]
2. Clique em `Contratar matéria patrocinada`. A tela desce até o `Plano de Notícias`. [guia=materia.contratar]
3. No quadro do plano, clique em `Contratar minha notícia`. [guia=materia.comprar]
4. Pague com Pix ou cartão na janela que abre. [guia=pagamento.janela]
5. Depois do pagamento, clique em `Falar com a equipe no WhatsApp` e conte o que você quer publicar. [guia=materia.whatsapp]

## resultado
a matéria não é publicada sozinha: a equipe prepara o texto, você aprova e recebe o link. Depois do pagamento a tela mostra `Plano de Notícias contratado`.

## como funciona

1. Você conta a ideia.
2. A equipe produz a matéria com você, que confere os dados.
3. O portal publica e você recebe o link para compartilhar com clientes, seguidores e parceiros.

Serve para inauguração, lançamento de projeto e outras histórias da empresa. Tem formato de notícia, o que gera mais engajamento que post ou publicidade. Também pode ser uma entrevista com influenciador, profissional ou personalidade da região.

## desvios

- Fechou sem pagar: a tela mostra `Aguardando pagamento` com as instruções; para abrir o plano de novo, use `Pagar minha notícia`.
- Para outra matéria, clique em `Contratar outra matéria`. Cada contratação vale uma matéria.
- Temas políticos passam por análise editorial e jurídica antes da contratação (aviso da tela).
- Sem WhatsApp configurado, o botão vira `Falar com a equipe` e abre a página de contato.
- Aparece "Este portal não está vendendo matérias patrocinadas no momento.": o portal não oferece esse serviço agora.

## quando pedir ajuda

peça ajuda se pagou e a tela não mostrar "Plano de Notícias contratado".

## fontes

- `frontend/src/app/minha-conta/materia-patrocinada/page.tsx:151-166` — título da página; `:168-230` pós-pagamento e WhatsApp; `:288` `Contratar matéria patrocinada`; `:322-324` `Contratar minha notícia`/`Pagar minha notícia`.
- `frontend/src/app/minha-conta/secoes-do-cliente.ts:52-56` — rota `materia-patrocinada` da seção `noticias`.
- `backend/comercial/catalogo.py:49` — rótulo `Notícias`.

## lacunas

tela não validada no navegador nesta tarefa. O nome no menu vem do servidor (rótulo da seção); `Notícias` é o rótulo padrão do catálogo. O vídeo é de divulgação e não mostra a tela; por isso não há marcas de tempo.
