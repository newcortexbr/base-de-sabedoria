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
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - o-YLH2-8w8I
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

## faixa de situação e botões

- No topo há o guia da visão geral em vídeo.
- Faixa de situação: antes da instalação, avisa que a cidade ainda não está no ar, com o botão `Iniciar instalação`; em instalação, explica o que falta e o botão passa a ser o da pendência atual (ex.: `Ver o que fazer`); com o portal publicado, mostra o domínio e os botões `Abrir portal` e `Painel administrativo`; suspenso, mostra `Regularizar pagamento`.
- `Seu próximo passo`: `Continuar meu Start` retoma o treinamento de onde parou. `Seus pagamentos`: reserva territorial e mensalidade, com próximo vencimento e situação; `Ver pagamentos` abre os detalhes.
- `Ver meus links` (áreas de login, páginas de vendas e recursos) só aparece depois que o portal é publicado. `Acessar suporte` fica no fim da página.

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
