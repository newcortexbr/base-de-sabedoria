---
id: admin-o-que-o-portal-nao-faz
titulo: "o que o portal não faz (painel)"
publico:
  - admin
modulo: geral
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - criar enquete
  - newsletter
  - colocar adsense
  - google adsense
  - avaliação de leitores
  - bloco construção
  - pagar a mensalidade do portal
  - pagar minha assinatura
  - enviar sms
  - aplicativo do portal
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
---

## objetivo

Entenda limites confirmados do painel e como pedir uma função que falta.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No rodapé do menu da esquerda, clique em `Sugestões de Funções`. [guia=menu:/painel/sugestoes]
2. Explique o recurso desejado em `Descrição`, no formulário de sugestão. [guia=sugestoes.descricao]

## resultado

O pedido pode ser detalhado pelo artigo “pedir uma função nova (Sugestões de Funções)”, que orienta todos os campos e o envio.

## limites conferidos

- O campo antigo de Google AdSense foi retirado do estado do modelo. Para publicidade, existe `Banners Publicitários` no menu.
- O botão `Esqueceu a senha?` do painel não inicia recuperação; veja “esqueci a senha do painel”.
- Não confunda um módulo desligado com uma função inexistente. Para tirar Sorteios do ar, existem rascunho e desligamento do módulo; veja os artigos específicos.

## fontes

- `backend/portais/migrations/0040_remover_assinante_e_google_adsense.py:14`
- `frontend/src/app/painel/login/page.tsx:304`
- `frontend/src/app/painel/sugestoes/page.tsx:295`

## lacunas

- Não foi identificado vídeo específico desta tarefa no catálogo; nenhum tempo foi atribuído.
- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
- Não foi comprovada por esta auditoria a inexistência geral de SMS, aplicativo em lojas, avaliações de leitores ou cobrança da licença. O código local não prova serviços externos; não negar essas funções por suposição.
