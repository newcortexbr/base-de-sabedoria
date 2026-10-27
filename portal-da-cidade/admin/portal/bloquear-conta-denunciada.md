---
id: bloquear-conta-denunciada
titulo: "bloquear a empresa ou conta de uma denúncia (o que sai do ar, cobrança)"
publico:
  - admin
modulo: aprovações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - bloquear
  - denuncia
  - conta
  - empresa
  - moderacao
  - no ar
  - plano
  - desbloquear
  - cobrar
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - JYDoZB_vyX8
---

## objetivo

Tire do ar o que o responsável publicou naquele módulo e impeça novas publicações dele ali.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No começo do menu da esquerda, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes]
2. Clique na aba `Denúncias`. [t=82] [guia=aprovacoes-aba:denuncias]
3. Clique na linha da denúncia. [t=84] [guia=denuncias.abrir]
4. Clique em `Bloquear empresa/conta`. [t=96] [guia=denuncias.bloquear]
5. Na confirmação `Bloquear o responsável? Tudo o que ele publicou neste módulo sai do ar. Pode ser revertido depois.`, clique em `Bloquear`. [guia=confirmacao.confirmar]

## resultado

Aparece `Responsável bloqueado` e a denúncia passa para `Resolvidas`.

## o que acontece

- Sai do ar tudo o que ele tem publicado no módulo da denúncia: a empresa no Guia, as vagas, os anúncios ou os eventos. Os outros módulos não mudam.
- Ao tentar publicar ou editar naquele módulo, ele vê `Seu cadastro está bloqueado neste portal. Fale com o portal.` e um aviso na área do cliente.
- Enquanto estiver bloqueado, ele não consegue contratar planos nem comprar banner.
- A cobrança de um plano que ele já tem continua: o bloqueio não cancela nem pausa cobranças.
- As outras denúncias contra ele continuam pendentes.

## perguntas comuns

**a pessoa sabe o motivo?** Não. Ela só vê a mensagem para falar com o portal; não há tela de contestação. **O que fazer:** se quiser explicar o motivo, fale você com ela pelo contato do cadastro. Se ela contestar e você concordar, desfaça o bloqueio.
**a cobrança para quando eu bloqueio?** Não. **O que fazer:** se não quiser continuar cobrando, abra o cliente em `Meus Clientes` e cancele a contratação dele (janela `Cancelar contratação`). [guia=menu:/painel/clientes]
**tem uma lista de bloqueados?** Não. **O que fazer:** em `Denúncias`, filtre `Status` por `Resolvidas`; as denúncias que bloquearam mostram `Desfazer bloqueio`. [guia=denuncias.filtro-status] Para pedir essa função, use `Sugestões de Funções`, no rodapé do menu da esquerda. [guia=menu:/painel/sugestoes]
**posso desfazer?** Sim, veja "desfazer o bloqueio feito por uma denúncia".
**por que `Bloquear empresa/conta` está desabilitado?** Porque a denúncia não tem responsável ou ele já está bloqueado.

## fontes

- frontend/src/app/painel/denuncias/[id]/page.tsx:15-60,93-165
- backend/denuncias/servicos.py:88-237
- backend/denuncias/middleware.py:46-88 (COMPRAS_DO_CLIENTE)
- frontend AvisoBloqueioCliente.tsx
- frontend/src/app/painel/clientes/[id]/page.tsx:455,1104 (Cancelar contratação)

## lacunas

- Conferido por leitura do código no HEAD 66d38db2 (wt-suporte-tool). Sem execução do produto nem validação visual.
