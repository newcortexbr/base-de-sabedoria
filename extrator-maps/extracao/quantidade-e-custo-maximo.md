---
id: ext-quantidade-e-custo-maximo
titulo: "quantidade máxima, número de buscas e quanto a extração pode custar"
publico:
  - cliente
modulo: extracao
aba: Nova extração
tipo_problema:
  - quantidade-de-registros
  - custo-da-extracao
  - buscas
  - gastou-mais-que-pedi
  - extrator-maps
status: rascunho-documental
revisado_em: 2026-10-21
validacao: codigo-e-video
videos:
  - R9FCgunNxFE
  - F136_v1JyRY
---

## objetivo
calcular o gasto máximo de uma extração e evitar surpresa no saldo.

## pré-requisitos
- estar na etapa `Quantidade` (veja `ext-nova-extracao-passo-a-passo`).

## explicação
- número de buscas = cidades × categorias × bairros. a tela mostra "N cidade(s) × N categoria(s) × N bairro(s) = N buscas."
- a `Quantidade máxima de registros` vale para CADA busca ("por busca").
- gasto máximo = quantidade × buscas. exemplos do vídeo: 2 cidades e 1 nicho com 100 de limite = "São duas buscas, então a extração pode consumir até 200 créditos"; com 50, até 100.
- o gasto real é só o que vier: 1 crédito por registro retornado. se você pede 100 e o Google só tem 80 empresas, gasta 80.
- o gasto máximo precisa caber no saldo. pedir 100 com 3 buscas exige 300 créditos de saldo; sem isso a tela bloqueia.
- extrações que gastam mais que o esperado quase sempre têm mais buscas do que se imaginava (o resumo da etapa `Confirmação` mostra o número de buscas e o gasto máximo).
- não há deduplicação garantida entre buscas que se sobrepõem (por exemplo, bairros vizinhos): a mesma empresa pode aparecer, e ser cobrada, em duas buscas.

## passos
1. na etapa `Quantidade`, digite o número em `Quantidade máxima de registros`.
2. leia a linha de buscas e o gasto máximo informado.
3. compare com "Saldo disponível: X créditos."
4. se não couber, reduza a quantidade, tire uma categoria ou bairro, ou compre créditos (veja `ext-comprar-creditos`).

## resultado
você inicia sabendo o teto de gasto.

## se der errado
- `Informe uma quantidade de ao menos 1 registro.`
- `Seu saldo disponível é X créditos, abaixo da quantidade solicitada.`
- `São N buscas, então esta extração pode consumir até X créditos. Seu saldo é de Y: reduza a quantidade, tire uma categoria ou compre créditos.`
