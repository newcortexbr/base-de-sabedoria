---
id: ac-ferramentas-dadospj
titulo: "DadosPJ (Extrator da Receita Federal): o que é e como acessar"
publico:
  - cliente
modulo: ferramentas
aba: Ferramentas
tipo_problema:
  - dadospj
  - extrator-receita-federal
  - buscar-empresas-cnpj
  - prospeccao
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - JXWDV_IiAWQ
  - IKdKLgi-e94
---

## objetivo
entender o DadosPJ e como entrar.

## pré-requisitos
- ter um negócio com licença ativa.

## explicação
- o DadosPJ encontra empresas por critérios de localização e atividade, para organizar a sua prospecção. no cartão de ferramentas ele aparece como `Extrator da Receita Federal`.
- é gratuito para quem tem licença ativa.
- a conta é criada no seu primeiro acesso; não precisa cadastro.
- a entrada é pelo login único da área do cliente: sem senha nova.
- diferente do Extrator Maps, o DadosPJ fica indisponível se todos os seus negócios estiverem suspensos.

## passos
1. No menu do negócio, clique em `Ferramentas`. [guia=menu:/negocios/[licenseId]/ferramentas]
2. No cartão `Extrator da Receita Federal`, clique em `Acessar ferramenta`. [guia=ferramentas.acessar]
3. Aguarde a tela `Entrando no DadosPJ…`. [guia=fora]

## resultado
você entra no DadosPJ com a sua conta.

## desvios
- `Sua plataforma está suspensa. Regularize a pendência na Central para voltar a usar o DadosPJ.`: pague a pendência; o acesso volta depois da confirmação.
- `Nenhuma licença sua dá direito ao DadosPJ.`
- `A licença que dava direito ao DadosPJ foi cancelada.`
- `Sua conta está bloqueada. Regularize a pendência na Central para voltar a acessar o DadosPJ.`
- `Acesso ainda não configurado` no cartão: a ligação ainda não foi configurada pela equipe.

## quando pedir ajuda
se a tela de entrada ficar parada ou voltar para o login, abra um chamado em `Suporte`.

## fontes
- `src/domain/acesso/sso-rps.ts:19`
- `src/domain/acesso/sso-rps.ts:35`
- `src/domain/acesso/sso-rps.ts:141`
- `src/app/(cliente)/sso/autorizar/route.ts:122`
- `src/app/(cliente)/sso/autorizar/route.ts:128`
- `docs/SSO-RPS.md:1`
- `docs/DECISIONS.md:726`

## lacunas
- vale para licença de qualquer produto, por isso não tem `produto`; o cartão só aparece se cadastrado no seu produto.
- o nome no cartão (`Extrator da Receita Federal`) é cadastrado pela equipe; a descrição citada é do ambiente conferido em 21/10/2026.
- o antigo plano "DADOS B2B, 2 extrações por semana" aparece em documento antigo; não foi confirmado se há limite de uso no DadosPJ.
