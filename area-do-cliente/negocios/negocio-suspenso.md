---
id: ac-negocio-suspenso
titulo: "meu negócio está suspenso: o que acontece e como voltar"
publico:
  - cliente
modulo: negocios
aba: Meus negócios
tipo_problema:
  - licenca-suspensa
  - portal-fora-do-ar
  - pagamento-atrasado
  - ferramenta-bloqueada
  - treinamento-bloqueado
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
entender por que o negócio ficou suspenso, o que para de funcionar e como reativar.

## pré-requisitos
- ter entrado na área do cliente.

## passos
1. No menu da esquerda, clique em `Meus negócios` (`/negocios`). [guia=menu:/negocios]
2. No cartão com a etiqueta `Suspenso`, clique em `Regularizar pagamento`. [guia=pagamentos.pagar]
3. Na tela de `Pagamentos` do negócio, no cartão marcado `Suspenso` ou `Em atraso`, clique em `Regularizar pagamento` e pague na página que abre (veja `ac-pagar-cobranca-pendente`). [guia=pagamentos.pagar]
4. Aguarde a confirmação do pagamento. Não é preciso avisar ninguém. [guia=fora]

## resultado
`Assim que o pagamento for confirmado, o acesso é reativado.` o portal e as ferramentas voltam a funcionar. você não perde a cidade nem o conteúdo do portal por causa da suspensão.

## explicação
- cada negócio tem duas cobranças: a mensalidade e a reserva territorial (anual). as duas precisam estar em dia.
- a tela avisa: `Após mais de 5 dias de atraso em qualquer uma delas, o portal e as ferramentas são suspensos até a regularização.`
- enquanto está suspenso: o site sai do ar, as ferramentas mostram `Suspenso`, as lives mostram `As lives estão indisponíveis enquanto houver pendência financeira.`
- o treinamento só fica bloqueado se todos os seus negócios daquele produto estiverem suspensos. se você tem outra cidade ativa do mesmo produto, continua vendo as aulas.
- a cidade continua reservada para você durante a suspensão; ela não é vendida para outra pessoa enquanto você pode regularizar.

## desvios
- se a sua conta inteira estiver bloqueada (não só um negócio), você só consegue ver `Suporte` e `Minha Conta`.
- se pagou e o acesso não voltou, aguarde a confirmação do pagamento (boleto e Pix podem levar um tempo para compensar) e depois fale com o suporte.

## quando pedir ajuda
se você pagou, o pagamento aparece como pago e o negócio continua `Suspenso`, abra um chamado em `Suporte`. se a suspensão foi por reembolso ou contestação no cartão, só a equipe resolve.

## fontes
- `src/app/(cliente)/negocios/page.tsx:43`
- `src/app/(cliente)/negocios/page.tsx:244`
- `src/app/(cliente)/negocios/page.tsx:277`
- `src/app/(cliente)/inicio/page.tsx:235`
- `src/app/(cliente)/negocios/[licenseId]/lives/page.tsx:102`
- `src/app/(cliente)/negocios/[licenseId]/ferramentas/page.tsx:52`
- `docs/REQUIREMENTS.md:153`
- `docs/REQUIREMENTS.md:348`
- `src/domain/acesso/sso-rps.ts:120`

## lacunas
- a regra diz suspensão no 5º dia de atraso (rotina diária às 00:01); a tela diz "mais de 5 dias". o dia exato não foi testado.
- o tempo de compensação de cada forma de pagamento não está no código da área do cliente.
- detalhes de pagamento são do artigo de financeiro (outra pasta).
