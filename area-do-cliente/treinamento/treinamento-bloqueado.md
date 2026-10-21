---
id: ac-treinamento-bloqueado
titulo: "não consigo ver o treinamento (acesso suspenso)"
publico:
  - cliente
modulo: treinamento
aba: Treinamentos
tipo_problema:
  - treinamento-bloqueado
  - acesso-suspenso
  - aulas-sumiram
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
entender por que as aulas não aparecem e como voltar a vê-las.

## pré-requisitos
- ter entrado na área do cliente.

## explicação
- o treinamento é bloqueado quando todos os seus negócios daquele produto estão suspensos. se pelo menos uma cidade do produto está ativa, você continua vendo as aulas.
- nesse caso a tela mostra `Como voltar a ter acesso`, com links `Situação de <cidade>/<UF>` para cada negócio suspenso e `Falar com o suporte`.
- os módulos aparecem como `Acesso suspenso por pendência de pagamento`.
- se a licença foi cancelada (e não há outra do produto), a tela mostra `Como conseguir uma licença`, com `Ver Meus Negócios` e `Falar com o suporte`.
- se a sua conta inteira estiver bloqueada, a área do cliente mostra só `Suporte` e `Minha Conta`.

## passos
1. Na tela `Treinamentos`, clique em `Situação de <cidade>/<UF>`.
2. Na `Visão geral` do negócio, veja o pagamento em aberto e clique para ver os pagamentos.
3. Pague a pendência.

## resultado
quando o pagamento é confirmado, o negócio volta a ficar ativo e as aulas reaparecem, com o seu progresso.

## desvios
- `O treinamento volta a ficar disponível após a regularização.` aparece na `Visão geral` enquanto houver pendência.

## quando pedir ajuda
se você pagou e as aulas não voltaram, abra um chamado em `Suporte`.

## fontes
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/_conteudo/Regularizacao.tsx:30`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/_conteudo/Regularizacao.tsx:37`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/_conteudo/Regularizacao.tsx:61`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/treinamento/CarrosselModulos.tsx:41`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/page.tsx:175`
- `area-clientes/docs/REQUIREMENTS.md:348`

## lacunas
não foi conferido se o progresso fica guardado durante a suspensão (a lógica indica que sim, porque é gravado por aula).
