---
id: ac-negocios-ver-lista
titulo: "ver meus negócios e entrar em um deles"
publico:
  - cliente
modulo: negocios
aba: Meus negócios
tipo_problema:
  - onde-ficam-meus-negocios
  - escolher-cidade
  - navegar-area-do-cliente
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - ZY0xttnJyzI
---

## objetivo
ver todos os seus negócios (cidades) e abrir o que você quer gerenciar.

## pré-requisitos
- ter entrado na área do cliente.

## passos
1. No menu da esquerda, em `Seu espaço`, clique em `Meus negócios` (`/negocios`). [guia=menu:/negocios]
2. Na seção `Seus portais`, encontre o cartão da cidade que você quer. [guia=fora]
3. Leia a etiqueta de situação do cartão (por exemplo `Portal no ar` ou `Instalação pendente`) e o campo `Endereço do portal`. [guia=fora]
4. Clique em `Acessar meu negócio` para abrir a `Visão geral` daquele negócio. [guia=negocios.acessar-negocio]

## resultado
você entra no negócio escolhido e o menu da esquerda passa a mostrar as áreas dele: `Visão geral`, `Minha plataforma`, `Treinamentos`, `Ferramentas`, `Lives` e `Pagamentos`.

## o que o cartão mostra

- no topo, a quantidade de portais. com mais de um, cada um tem seu cartão: escolha o negócio que quer gerenciar.
- cada cartão mostra cidade, produto, a etiqueta de situação e `Endereço do portal` (o domínio). ao lado, a situação dos pagamentos: reserva territorial e mensalidade, cada uma com o próximo vencimento.
- etiqueta `Instalação pendente`: um aviso pede para informar o domínio e o botão é `Iniciar instalação`. depois de informar o domínio vira `Em instalação`, o cartão mostra o que falta (por exemplo, trocar os name servers) e o botão passa a `Ver o que fazer`. com o portal publicado, a etiqueta fica verde (`Portal no ar`), o aviso some e o cartão confirma "Instalação concluída" e plataforma disponível, com `Abrir portal` e `Acessar meu negócio`.
- reserva territorial e mensalidade precisam estar em dia: com 5 dias de atraso em qualquer uma, o portal e as ferramentas são suspensos até a regularização (veja `ac-atraso-e-suspensao`).

## desvios
- se a instalação do site ainda não terminou, no lugar de `Acessar meu negócio` o cartão mostra `Iniciar instalação`, `Continuar instalação`, `Ver o que fazer`, `Conferir e confirmar` ou `Acompanhar instalação`, conforme a etapa. clicar leva para `Minha plataforma`.
- se a instalação precisa do suporte, o botão é `Falar com o suporte`.
- quando o portal já está no ar, aparece também `Abrir portal`, que abre o seu site.
- o botão `Ver pagamentos` (ou `Regularizar pagamento`, se o negócio estiver suspenso) leva aos pagamentos daquele negócio.
- se a lista estiver vazia, a tela diz `Você ainda não tem nenhum portal vinculado. Se esperava ver um negócio aqui, fale com o suporte.`

## quando pedir ajuda
se um negócio que você comprou não aparece, abra um chamado em `Suporte` informando a cidade e o e-mail usado na compra.

## fontes
- `src/ui/nav/clientMenu.ts:22`
- `src/app/(cliente)/negocios/page.tsx:109`
- `src/app/(cliente)/negocios/page.tsx:118`
- `src/app/(cliente)/negocios/page.tsx:124`
- `src/app/(cliente)/negocios/page.tsx:244`
- `src/app/(cliente)/negocios/page.tsx:249`
- `src/app/(cliente)/negocios/page.tsx:256`
- `src/app/(cliente)/negocios/page.tsx:266`
- `src/app/(cliente)/inicio/pendencia-instalacao.ts:1`

## lacunas
não testado em tela. a ordem dos cartões quando há várias cidades não foi conferida.
