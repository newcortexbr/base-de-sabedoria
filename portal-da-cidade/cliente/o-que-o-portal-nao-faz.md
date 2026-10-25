---
id: cliente-o-que-o-portal-nao-faz
titulo: "o que o portal não faz (área do cliente)"
publico:
  - cliente
modulo: geral
categoria: conta
aba: nao-se-aplica
tipo_problema:
  - o portal tem enquete
  - mandar newsletter
  - mandar sms
  - avaliação dos clientes
  - nota de estrelas
  - aplicativo na loja
  - baixar app
  - lista de faturas
  - apagar minha conta
  - excluir conta
  - verificação em duas etapas
  - autenticação de dois fatores
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
---

## objetivo
aqui estão as coisas que o portal não oferece hoje, para você não procurar à toa.

## o que não tem

- Enquete: não existe. A função foi retirada do portal.
- Newsletter (lista de e-mails para leitores): não existe. Também foi retirada.
- SMS: o portal não envia SMS. Os avisos saem por e-mail e, para quem aceitou, por notificação no celular.
- Avaliação com nota feita pelos leitores do portal: não existe. Nos planos pagos do Guia, a página da empresa mostra as avaliações do Google.
- Aplicativo em loja (Play Store ou App Store): não existe. No celular, o site pode oferecer `Instalar`, que coloca o portal na tela inicial como um atalho.
- Apagar a própria conta: não existe botão para isso na área do cliente. Para encerrar a conta, fale com o portal.
- Verificação em duas etapas no login: não existe na área do cliente. Para proteger a conta, use uma senha forte em `Segurança`.
- Lista com o histórico das suas faturas: não existe na área do cliente. A cobrança em aberto aparece no `Início` e em `Planos e assinaturas`, com o botão `Pagar agora`.

## quando pedir ajuda

se você precisa de algo que não está aqui, fale com o portal.

## fontes

- `portal-cidade/docs/PRODUCT.md:63-70` — Enquetes e Newsletter saíram em 2026-09-06.
- `portal-cidade/backend/enquetes/models.py:1-9` — app de enquetes esvaziado.
- busca por "sms" em `frontend/src` e `backend` sem resultado fora de testes.
- `portal-cidade/backend/comercial/catalogo.py:458-463` — avaliações do Google só em plano pago; nenhum model de avaliação próprio no backend.
- `portal-cidade/frontend/src/components/convites/AvisoBaixarApp.tsx` e `app/manifest.ts` — convite "Instalar" do site.
- `portal-cidade/frontend/src/app/minha-conta/_inicio/BlocoAvisos.tsx` — "Esperando pagamento".

## lacunas

não verifiquei no navegador em que aparelhos o convite `Instalar` aparece; ele depende do navegador oferecer a instalação. A notificação no celular depende do portal usar notificações push.
