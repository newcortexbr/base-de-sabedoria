---
id: ver-denuncias
titulo: "ver e filtrar as denúncias de conteúdo do portal (lista, filtros e detalhe)"
publico:
  - admin
modulo: aprovações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - ver
  - filtrar
  - denuncia
  - moderacao
  - lista
  - status
  - modulo
  - painel
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - JYDoZB_vyX8
---

## objetivo

Veja as denúncias que visitantes fizeram sobre empresas, vagas, classificados e eventos.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No começo do menu da esquerda, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes]
2. Clique na aba `Denúncias`. [t=82] [guia=aprovacoes-aba:denuncias]
3. No filtro `Status`, escolha `Pendentes`, `Resolvidas` ou `Ignoradas`. [guia=denuncias.filtro-status]
4. No filtro `Módulo`, escolha a parte do portal ou `Todos`. [guia=denuncias.filtro-modulo]
5. Clique na linha da denúncia. [t=84] [guia=denuncias.abrir]
6. Para ver o conteúdo no site, clique em `Ver página denunciada`. [t=87] [guia=denuncias.ver-pagina]

## resultado

Você vê o item, o responsável, o motivo, a descrição e as imagens. Abrir a denúncia não muda nada.

## o que pode ser denunciado

Só há botão `Denunciar` no Guia Comercial, em Vagas, em Classificados e em Eventos. Por isso o filtro `Módulo` tem só essas opções. Notícias, artigos, cupons e banners não podem ser denunciados.

## a lista

- `Pendentes` esperam sua decisão. `Resolvidas` são as que terminaram com o item excluído ou o responsável bloqueado. `Ignoradas` são as que você ignorou.
- O número ao lado de `Pendentes` aparece quando o filtro é `Pendentes` e o módulo é `Todos`.
- A mais nova fica em cima. Cada denúncia é uma linha: dez pessoas denunciando o mesmo item geram dez linhas.
- O clipe com número mostra quantas imagens foram anexadas; `—` quando nenhuma.
- `Item removido` aparece quando o item não tem mais título guardado.
- Data e hora aparecem como dia/mês e hora, sem o ano, no horário de Brasília.

## o detalhe

- `Denúncia #N`: N é um número de controle do sistema, não a contagem do seu portal.
- `Responsável` mostra o nome e o tipo: empresa do Guia, contratante de Vagas, anunciante de Classificados ou organizador de Eventos. `(bloqueado)` em vermelho indica bloqueio ativo.
- `Motivo` é um destes: Golpe ou fraude; Informação falsa ou enganosa; Conteúdo ofensivo; Produto ou serviço proibido; Spam ou duplicado; Outro.
- `Descrição do denunciante` mostra `—` quando a pessoa não escreveu nada; escrever é opcional.
- As imagens anexadas abrem em outra aba, onde podem ser salvas. Não há botão para baixar todas.
- Se o item foi apagado depois, o nome e o responsável continuam aparecendo, porque foram guardados na denúncia.
- `Ver página denunciada` abre o site em outra aba. Se o item estiver pausado, pendente ou bloqueado, a página pode mostrar "não encontrada".
- `Voltar para Denúncias` volta à lista com os filtros no começo (`Pendentes` e `Todos`).

## fontes

- frontend/src/app/painel/denuncias/ListaDeDenuncias.tsx:12-18,42-47,66-98
- frontend/src/app/painel/denuncias/[id]/page.tsx:60,93-140
- backend/denuncias/alvos.py (ALVOS, rotulo_responsavel); models.py:17,44-59; serializers.py:10; servicos.py:63-86

## lacunas

- Conferido por leitura do código no HEAD e8f43702 (wt-suporte-tool). Sem execução do produto nem validação visual.
- O texto exato do link de voltar e o rótulo "Item removido" vêm da resolução anterior; não relidos linha a linha.
