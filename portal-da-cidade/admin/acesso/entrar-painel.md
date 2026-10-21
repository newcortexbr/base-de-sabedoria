---
id: acesso-painel-negado
titulo: entrar no painel do portal e entender acesso negado
publico:
  - admin
permissoes:
  - administrador-de-portal
categoria: administracao
aba: nao-se-aplica
tipo_problema:
  - entro no painel
  - acessar o painel de outro portal
  - ajudar colega no painel
modulo: acesso
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
---

## objetivo

aqui você entra no painel do portal e entende por que o acesso pode ser negado. Erro de senha é diferente de falta de permissão.

## pré-requisitos

Ter o e-mail e a senha da conta de administrador.

## passos

1. Abra a página de entrada do painel, no endereço `/painel/login`. [guia=fora]
2. Escreva seu e-mail no campo `E-mail`. [guia=login.email]
3. Escreva sua senha no campo `Senha`. [guia=login.senha]
4. Clique no botão `Efetuar Login`. [guia=login.entrar]
5. Se aparecer a mensagem de muitas tentativas, espere alguns minutos e tente só mais uma vez. [guia=fora]

## resultado

somente uma conta autorizada para administração entra no painel. O papel da conta e as permissões são verificados pelo sistema; pertencer ao mesmo portal ou ter um menu diferente não concede administração.

Cada conta de administrador entra somente no portal em que foi autorizada. Ter acesso a um portal não abre outro. Para entrar no painel de outro portal, é preciso que o responsável por esse portal conceda a você a administração dele; esta tela não libera esse acesso.

## desvios

- Cada conta de administrador entra só no portal em que foi autorizada. Para entrar no painel de outro portal, peça ao responsável por esse portal que libere a administração para você.
- Jornalista e cliente (empresa) não usam o painel: entram pela área do cliente (`/minha-conta/login`). Parceiro entra em `/parceiro/login`.
- “Esta conta não tem acesso ao painel administrativo” significa que a conta autenticada não tem permissão para essa área; não é instrução para repetir a senha.
- “Muitas tentativas seguidas” indica bloqueio temporário do login; a senha continua valendo.
- O login mostra “Esqueceu a senha?”, mas esse controle não inicia a recuperação. Peça ajuda ao suporte.
- Uma recusa pode decorrer de conta ou vínculo bloqueado/inativo; suporte deve verificar o estado, não promover a conta por suposição.

## quando pedir ajuda

se você deveria ser administrador e continuar sem acesso após aguardar, contacte o administrador responsável pelo portal ou o suporte. Informe o portal, e-mail da conta e mensagem exata; nunca envie senha. Para jornalista, cliente ou parceiro, use a entrada indicada acima.

## fontes

- `portal-cidade/frontend/src/app/painel/login/page.tsx:137-170,296-319,386-391`
- `portal-cidade/frontend/src/app/painel/login/mensagem-de-falha.ts:12-13,32-47`
- `portal-cidade/frontend/src/app/painel/login/__tests__/jornalista-nao-entra.test.tsx:59-88`
- `portal-cidade/docs/DECISIONS.md:12300-12310`
- `portal-cidade/CLAUDE.md:251-259,269-285`
- `portal-cidade/backend/portais/permissions.py:6-30,212-224` (marca de administrador por portal)
- `portal-cidade/backend/portais/tests/test_admin_escopo_por_portal.py:58-59` (conceder em um portal não vale no outro)

## lacunas

- Este material não instrui a conceder, bloquear ou desbloquear papéis. Essas ações são administrativas e devem seguir o procedimento autorizado do portal.
- Não foi identificada, no frontend, tela para o responsável de um portal conceder administração a outra conta; a marca é criada pelo fluxo de licença (SSO) e pelo código de concessão. Confirmar o procedimento real antes de orientar o usuário final.
- Não foi feita validação de tela, autenticação em serviço real ou alteração de acesso.
