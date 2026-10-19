---
id: acesso-entrar-area-cliente
titulo: entrar na área do cliente
publico:
  - cliente
  - parceiro
  - jornalista
  - visitante
categoria: conta
aba: nao-se-aplica
tipo_problema: orientacao
modulo: acesso
status: rascunho-documental
revisado_em: 2026-10-15
validacao: docs-e-codigo
---

## objetivo

acessar os recursos da sua conta pela área do cliente.

## pré-requisitos

- Ter uma conta criada para este portal e saber o e-mail e a senha cadastrados.
- Jornalistas usam esta área; parceiros têm uma área de entrada própria.

## passos

1. Abra `/minha-conta/login` no portal em que sua conta foi criada.
2. Informe o e-mail e a senha do cadastro.
3. Se a senha estiver correta e a conta tiver acesso, o portal abre a área correspondente ao perfil.

## resultado

você entra na área do cliente. O menu disponível depende do perfil da conta; o perfil não pode ser escolhido livremente na tela.

## desvios

- Se a conta for de jornalista, não use o login do painel: o acesso editorial é pela área do cliente.
- Se aparecer “E-mail ou senha inválidos”, confira o e-mail e tente novamente sem compartilhar sua senha.
- O acesso pode ser recusado por bloqueio ou por a conta não ter vínculo ativo com esta área.

## quando pedir ajuda

se os dados estiverem corretos e a recusa continuar, peça ao suporte do portal para verificar se a conta e o vínculo estão ativos. Não envie sua senha.

## fontes

- `portal-cidade/frontend/src/app/minha-conta/login/page.tsx:45-47,82-94,206-232`
- `portal-cidade/frontend/src/app/painel/login/__tests__/jornalista-nao-entra.test.tsx:59-88`
- `portal-cidade/docs/DECISIONS.md:12092-12100,12300-12310`
- `portal-cidade/docs/PRODUCT.md:22-27`

## lacunas

- Não foi identificada uma tela de login de visitante/leitor comum. O produto mantém cadastro de leitor para avaliações, mas não há fluxo geral de conta de visitante documentado aqui.
- Não há validação de tela nesta documentação; os passos refletem código e documentação consultados.
