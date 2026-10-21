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
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
aqui estão as funções que o painel não tem hoje, com o que existe no lugar quando há.

## o que não tem

- Enquete: não existe. Foi retirada do portal em setembro de 2026.
- Newsletter: não existe. Também foi retirada; não há lista de assinantes.
- Google AdSense: não existe campo para isso. Para vender espaço, use `Banners Publicitários`.
- Avaliação com nota feita pelos leitores: não existe. Nos planos pagos do Guia, a empresa mostra as avaliações do Google.
- Bloco "Construção" no perfil de empresa: não existe. Foi retirado porque nunca teve tela. Os blocos de empresa são cardápio, delivery, serviços, equipe, quartos e catálogo.
- Pagar a mensalidade do seu portal pelo painel: não existe tela para isso. Fale com a equipe que entregou o portal.
- SMS: o portal não envia SMS. Os avisos saem por e-mail e por notificação push.
- Aplicativo em loja (Play Store ou App Store): não existe. No celular, o site oferece ao visitante `Instalar`, que põe o portal na tela inicial como atalho.

## quando pedir ajuda

para pedir uma função nova, use `Sugestões de Funções`, no rodapé do menu da esquerda.

## fontes

- `portal-cidade/docs/PRODUCT.md:63-70,92-93,107-108` — Enquetes, Newsletter, AdSense e bloco "Construção" removidos.
- `portal-cidade/backend/portais/migrations/0040_remover_assinante_e_google_adsense.py`.
- `portal-cidade/backend/portais/views_assinatura.py` — rota de assinatura só leitura e sem cobrança; nenhuma tela do painel chama essa rota (busca por `assinatura/` em `frontend/src`).
- `portal-cidade/frontend/src/components/convites/AvisoBaixarApp.tsx` — convite "Instalar".
- `portal-cidade/frontend/src/components/painel/Sidebar.tsx:535-550` — "Sugestões de Funções".

## lacunas

não verifiquei no navegador. O convite `Instalar` depende do navegador do visitante.
