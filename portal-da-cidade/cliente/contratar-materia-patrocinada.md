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
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - -Islw_h8OhU
---

## objetivo
aqui você paga para o portal publicar uma notícia sobre a sua empresa. O pagamento é único, por notícia, e a equipe do portal escreve e publica com você.

## pré-requisitos

- Estar logado na área do cliente como empresa.

## passos

1. No menu da esquerda da sua área, clique em `Notícias`. [guia=menu:/minha-conta/materia-patrocinada]
2. Clique em `Contratar minha notícia`. [guia=fora]
3. Pague com Pix ou cartão na janela que abre. [guia=fora]
4. Depois do pagamento, clique em `Falar com a equipe no WhatsApp` e conte o que você quer publicar. [guia=fora]

## resultado
a matéria não é publicada sozinha: a equipe prepara o texto, você aprova e recebe o link.

## desvios

- Fechou sem pagar: a tela mostra "Aguardando pagamento"; clique em `Pagar minha notícia`.
- Para outra matéria, clique em `Contratar outra matéria`. Cada contratação vale uma matéria.
- Temas políticos passam por análise antes da contratação.
- Aparece "Este portal não está vendendo matérias patrocinadas no momento.": o portal não oferece esse serviço agora.

## quando pedir ajuda

peça ajuda se pagou e a tela não mostrar "Plano de Notícias contratado".

## fontes

- `portal-cidade/frontend/src/app/minha-conta/materia-patrocinada/page.tsx:160-330` — textos e botões.
- `portal-cidade/frontend/src/app/minha-conta/secoes-do-cliente.ts:55` — rota `materia-patrocinada` da seção `noticias`.
- `portal-cidade/backend/portais/modulos.py:13` — rótulo "Notícias".

## lacunas

tela não validada no navegador nesta tarefa. O nome no menu vem do servidor (rótulo da seção); confirmei "Notícias" como padrão.
