---
id: ativar-modulos-e-programa-de-parceiros
titulo: ativar ou desativar módulos do portal
publico:
  - admin
modulo: configurações
categoria: admin
aba: nao-se-aplica
tipo_problema: configuracao
status: rascunho-documental
revisado_em: 2026-10-15
validacao: docs-e-codigo
videos:
  - 8gIDPdapN0E
---

## objetivo

escolher quais módulos e se o Programa de Parceiros ficam ativos no portal.

## pré-requisitos

- Ter acesso de administrador ao portal.

## passos

1. No menu da esquerda, na parte `Sistema`, clique em `Configurações` e depois em `Módulos do Portal` (`/painel/configuracoes/modulos`).
2. Em cada parte do site (módulo), mude a chave entre `Ligado` e `Desligado`. As mudanças só valem depois que você salvar.
3. Se você desligar uma parte que estava ligada, vai aparecer uma janela pedindo confirmação. Leia e clique em `Confirmar e desligar`. Nenhum dado é apagado.
4. Clique em `Salvar módulos` e espere a mensagem "Módulos salvos. Atualizando o menu…".

## resultado

O painel atualiza os módulos ativos e recarrega o menu. Desligar um módulo o oculta; não significa apagar o conteúdo associado.

## desvios

O Programa de Parceiros aparece nessa tela, mas não é um módulo do catálogo. O Delivery acompanha o Guia e não é ligado separadamente. O Master consulta o estado; não é a tela de ativação do franqueado.

## quando pedir ajuda

peça ajuda se a opção desejada não aparecer, o salvamento falhar ou houver dúvida sobre o efeito de desligar um recurso. A IA pode explicar, mas não altera módulos nem permissões.

## fontes

- `portal-cidade/frontend/src/app/painel/configuracoes/modulos/page.tsx:24-36,49-70,79-100`
- `portal-cidade/docs/PRODUCT.md:50-61`

## lacunas

A lista concreta pode depender do catálogo habilitado no produto; este artigo não promete que todos os módulos estarão disponíveis em cada portal.
