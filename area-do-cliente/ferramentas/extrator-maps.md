---
id: ac-ferramentas-extrator-maps
titulo: "Extrator Maps (Extrator Google Maps): o que é e como acessar"
publico:
  - cliente
modulo: ferramentas
aba: Ferramentas
tipo_problema:
  - extrator-maps
  - extrator-google
  - creditos-do-extrator
  - prospeccao
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - F136_v1JyRY
  - R9FCgunNxFE
---

## objetivo
entender o Extrator Maps, os créditos de boas-vindas e como entrar.

## pré-requisitos
- ter um negócio (licença) na área do cliente.

## explicação
- o Extrator Maps localiza negócios no mapa do Google e monta listas para as suas ações comerciais (prospecção). no cartão de ferramentas ele aparece como `Extrator Google Maps`.
- a sua conta no Extrator é criada automaticamente quando a sua licença nasce, e já vem com 200 créditos de boas-vindas (eram 500 até 28/09/2026; contas criadas antes mantêm o que receberam).
- cada crédito corresponde a um registro extraído, e é preciso ter pelo menos 25 créditos para iniciar uma extração. quando os créditos acabarem, você compra mais dentro do próprio Extrator (pagamento pelo Asaas; o crédito entra após a confirmação).
- o guia completo de uso (nova extração, créditos, arquivos, importar no Portal) está no catálogo do Extrator Maps, artigo `ext-o-que-e` e os demais `ext-`.
- a entrada é pelo login único da área do cliente: sem senha nova.
- se o seu negócio estiver suspenso, a sua conta e os seus créditos no Extrator não são apagados.

## passos
1. No menu do negócio, clique em `Ferramentas`. [guia=menu:/negocios/[licenseId]/ferramentas]
2. No cartão `Extrator Google Maps`, clique em `Acessar ferramenta`. [guia=ferramentas.acessar]
3. Aguarde a tela `Entrando no Extrator Maps…`. [guia=fora]
4. Para aprender a usar, clique em `Ver treinamento` no mesmo cartão. [guia=fora]

## resultado
você entra no Extrator com a sua conta e os seus créditos.

## desvios
- `Nenhuma licença sua dá direito ao Extrator Maps.`: a conta não tem licença válida. fale com o suporte.
- `A licença que dava direito ao Extrator Maps foi cancelada.`
- `Sua conta está bloqueada. Regularize a pendência na Central para voltar a acessar o Extrator Maps.`
- `Acesso ainda não configurado` no cartão: a ligação com o Extrator ainda não foi configurada pela equipe.
- com o negócio suspenso, o cartão mostra `Suspenso` e `Regularizar pagamento`.

## quando pedir ajuda
se você entrou e não recebeu os 200 créditos de boas-vindas, abra um chamado em `Suporte`. a equipe tem uma lista de contas sem os créditos de boas-vindas.

## fontes
- `src/domain/acesso/sso-rps.ts:18`
- `src/domain/acesso/sso-rps.ts:140`
- `docs/SSO-EXTRATOR.md:49`
- `docs/SSO-EXTRATOR.md:62`
- `docs/SSO-EXTRATOR.md:66`
- `docs/SSO-EXTRATOR.md:238`
- `src/app/(cliente)/sso/autorizar/route.ts:122`
- `src/app/(cliente)/sso/autorizar/route.ts:123`
- `src/app/(cliente)/sso/autorizar/route.ts:124`
- `src/app/(cliente)/negocios/[licenseId]/ferramentas/page.tsx:167`

## lacunas
- o Extrator vale para licença de qualquer produto (DEC-517), por isso este artigo não tem `produto`. o cartão, porém, só aparece se a equipe cadastrou a ferramenta no seu produto.
- regra do sistema: com a licença suspensa, o Extrator ainda permite o login (para não confiscar créditos pagos), mas o cartão da área do cliente mostra `Suspenso` sem o botão de acesso. o comportamento real ao abrir o Extrator direto nessa situação não foi testado.
- o nome no cartão (`Extrator Google Maps`) é cadastrado pela equipe e pode mudar.
- regras de compra e preço de créditos são do Extrator, não da área do cliente.
