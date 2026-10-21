---
id: ac-ferramentas-nao-abre
titulo: "a ferramenta não abre ou diz que não posso entrar"
publico:
  - cliente
modulo: ferramentas
aba: Ferramentas
tipo_problema:
  - ferramenta-nao-abre
  - acesso-negado
  - em-breve
  - nao-foi-possivel-entrar
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
descobrir por que uma ferramenta não abre e o que fazer.

## pré-requisitos
- ter entrado na área do cliente.

## passos
1. Em `Ferramentas` (`/negocios/<negócio>/ferramentas`), leia a etiqueta e o texto do cartão. [guia=menu:/negocios/[licenseId]/ferramentas]
2. Se for `Suspenso`, clique em `Regularizar pagamento` e pague a pendência. [guia=pagamentos.pagar]
3. Se for `Em breve` com `Disponível em breve` ou `Acesso ainda não configurado`, a ferramenta ainda não foi liberada. Aguarde. [guia=fora]
4. Se for `Disponível` e, ao clicar em `Acessar ferramenta`, aparecer `Não foi possível entrar no <ferramenta>`, leia o motivo na tela e clique em `Voltar para a Central`. [guia=ferramentas.acessar]
5. Se a nova aba não abrir, permita janelas (pop-ups) para a área do cliente no navegador e tente de novo. [guia=fora]

## resultado
você identifica se é pagamento, liberação pendente ou algo para o suporte.

## explicação
motivos que a tela `Não foi possível entrar` pode mostrar:
- `Sua conta está bloqueada. Regularize a pendência na Central...`
- `Nenhuma licença sua dá direito ao <ferramenta>.`
- `A licença que dava direito ao <ferramenta> foi cancelada.`
- `Sua plataforma está suspensa. Regularize a pendência na Central para voltar a usar o <ferramenta>.`

## desvios
- se a ferramenta pedir login ou senha dela, volte à área do cliente e entre de novo pelo botão `Acessar ferramenta`.

## quando pedir ajuda
se a etiqueta é `Disponível`, os pagamentos estão em dia e mesmo assim não abre, abra um chamado em `Suporte` com um print da tela.

## fontes
- `src/app/(cliente)/negocios/[licenseId]/ferramentas/page.tsx:50`
- `src/app/(cliente)/negocios/[licenseId]/ferramentas/page.tsx:163`
- `src/app/(cliente)/negocios/[licenseId]/ferramentas/page.tsx:167`
- `src/domain/conteudo/tools.ts:1`
- `src/app/(cliente)/sso/autorizar/route.ts:120`
- `src/app/(cliente)/sso/autorizar/route.ts:139`
- `src/app/(cliente)/sso/autorizar/route.ts:141`

## lacunas
não testado em tela.
