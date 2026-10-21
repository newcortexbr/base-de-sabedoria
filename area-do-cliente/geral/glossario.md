---
id: ac-glossario
titulo: "glossário: negócio, licença, território, produto, instalação e outros termos"
publico:
  - cliente
modulo: geral
aba: nao-se-aplica
tipo_problema:
  - o que significa
  - o que é licença
  - o que é território
  - o que é negócio
  - o que é instalação
  - termos
  - glossário
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

explicar em palavras simples os termos que aparecem na Área do Cliente.

## explicação

- Produto — o que você comprou da New Córtex, por exemplo o Portal da Cidade. O treinamento, as ferramentas e as lives são do produto.
- Território — a cidade (com o estado) onde você tem exclusividade. Cada produto só pode ter um dono por cidade.
- Licença — o direito de operar um produto num território. Na tela, cada licença aparece como um "negócio". Em `Meus negócios`, a situação aparece como `Portal no ar`, `Instalação pendente`, `Em instalação`, `Suspenso` ou `Inativo` (cancelado) — veja `ac-negocio-situacoes`.
- Negócio — o jeito como a Área do Cliente chama cada licença: um produto numa cidade, por exemplo "Portal da Cidade · Linhares/ES". Você pode ter vários.
- Instalação / plataforma / portal — o site do seu negócio, montado pela New Córtex no seu domínio. A instalação é o caminho de colocá-lo no ar, em `Minha plataforma`. Cada negócio tem a sua.
- Domínio — o endereço do seu portal na internet (por exemplo, `www.suacidade.com.br`). Você compra no registrador; a Área do Cliente não compra domínio.
- Reserva territorial — cobrança anual que mantém a sua cidade reservada para você.
- Mensalidade — cobrança mensal de manutenção, atualizações, suporte e ferramentas. Começa depois que o portal é instalado.
- Suspensão — o negócio fica parado (portal e ferramentas) por atraso de pagamento ou por outro motivo tratado pela equipe (reembolso, contestação no cartão ou decisão da equipe). A conta continua funcionando.
- Bloqueio de conta — a conta inteira fica restrita a `Suporte` e `Minha Conta`. É diferente da suspensão de um negócio.
- Chamado — pedido de ajuda por escrito para a equipe, em `Suporte`. Cada um tem um número de protocolo.
- Convite / link de ativação — o e-mail de boas-vindas com o link para criar a senha no primeiro acesso.
- Asaas — a empresa que processa as cobranças da New Córtex. A página de pagamento e o comprovante abrem no site dela.

## fontes

- `docs/PRODUCT.md:53` — estrutura: cliente, produtos, licenças territoriais, uma plataforma por licença.
- `src/app/(cliente)/negocios/[licenseId]/labels.ts:15` — situações da licença; `:185` — negócio = produto + cidade/UF.
- `src/app/(cliente)/negocios/[licenseId]/pagamentos/page.tsx:216` — reserva territorial e mensalidade.
- `src/domain/acesso/permissions.ts:199` — o que a conta bloqueada acessa.
- `src/app/(cliente)/suporte/[ticketId]/page.tsx:200` — "Protocolo".

## lacunas

as telas usam "licença", "negócio" e "portal" quase como sinônimos; o glossário usa a mesma equivalência.
