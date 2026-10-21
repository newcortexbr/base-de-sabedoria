---
id: ac-negocio-visao-geral
titulo: "o que aparece na visão geral do meu negócio"
publico:
  - cliente
modulo: negocios
aba: Visão geral
tipo_problema:
  - navegar-area-do-cliente
  - proximo-passo
  - onde-fica
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
usar a `Visão geral` para saber como está o negócio e qual é o próximo passo.

## pré-requisitos
- ter pelo menos um negócio em `Meus negócios`.

## passos
1. No menu da esquerda, clique em `Meus negócios` (`/negocios`). [guia=menu:/negocios]
2. No cartão da cidade, clique em `Acessar meu negócio`. [guia=negocios.acessar-negocio]
3. No menu do negócio, clique em `Visão geral` (`/negocios/<negócio>`). [guia=menu:/negocios/[licenseId]]

## resultado
a tela mostra:
- a situação do portal (`Portal ativo`, `Instalação pendente`, `Em instalação` ou `Portal suspenso`) e um botão para o próximo passo da instalação, quando houver.
- `Seu próximo passo`: o treinamento para continuar.
- `Seus pagamentos`: as duas cobranças do negócio e os vencimentos. antes da instalação, o vencimento pode aparecer como `após a instalação`.
- `Precisa de um link do seu portal?`: depois que o portal é publicado, os links ficam reunidos em `Minha plataforma`.

## desvios
- se aparecer `Não foi possível carregar a situação dos pagamentos. Atualize a página em instantes.`, recarregue a página depois de alguns minutos.
- se o treinamento estiver bloqueado, aparece `O treinamento volta a ficar disponível após a regularização.`

## quando pedir ajuda
se a situação mostrada não bater com o que você sabe (por exemplo, pagamento feito e negócio suspenso), abra um chamado em `Suporte`.

## fontes
- `src/app/(cliente)/negocios/[licenseId]/page.tsx:70`
- `src/app/(cliente)/negocios/[licenseId]/page.tsx:100`
- `src/app/(cliente)/negocios/[licenseId]/page.tsx:154`
- `src/app/(cliente)/negocios/[licenseId]/page.tsx:175`
- `src/app/(cliente)/negocios/[licenseId]/page.tsx:182`
- `src/app/(cliente)/negocios/[licenseId]/page.tsx:186`
- `src/app/(cliente)/negocios/[licenseId]/page.tsx:198`
- `src/app/(cliente)/negocios/[licenseId]/page.tsx:220`

## lacunas
não testado em tela.
