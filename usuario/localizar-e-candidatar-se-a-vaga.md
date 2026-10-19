---
id: usuario-localizar-candidatar-vaga
titulo: localizar uma vaga e seguir as instruções para candidatura
publico:
  - usuario
modulo: vagas
categoria: vagas
aba: nao-se-aplica
tipo_problema:
  - procurar-vaga
  - candidatura
status: rascunho-documental
revisado_em: 2026-10-15
validacao: docs-e-codigo
videos:
  - D21vBBhzlhg
---

## objetivo
encontrar vagas e consultar como a empresa responsável recebe candidaturas.

## pré-requisitos
- estar no portal que atende a cidade ou região desejada.

## passos
1. abra `Vagas de Emprego` pelo menu do portal.
2. no campo `Cargo, área ou empresa…`, informe um termo.
3. use os filtros disponíveis, como cidade, tipo de contrato, `Home office`, `PCD`, `Primeiro emprego` ou `Urgente`.
4. abra a vaga de interesse e leia os requisitos e as instruções de contato/candidatura que ela apresenta.
5. siga o canal ou instrução publicado pela vaga; confirme os dados diretamente com o contratante se houver dúvida.

## resultado esperado
você localiza vagas compatíveis e encontra na página da vaga as informações que o contratante publicou. este guia não presume envio de currículo dentro do portal.

## desvios
- `/vagas` redireciona para a seção `Vagas de Emprego`.
- sem resultados, remova filtros e tente outra palavra-chave ou cidade.
- requisitos e canal de candidatura dependem de cada vaga.

## quando pedir ajuda
se a página da vaga não abrir ou o contato publicado estiver inválido, informe ao suporte o título público da vaga e o endereço da página. não envie currículo ao suporte.

## fontes
- `portal-cidade/frontend/src/app/vagas/page.tsx:3`
- `portal-cidade/frontend/src/app/vagasdeemprego/page.tsx:51`
- `portal-cidade/frontend/src/app/vagasdeemprego/page.tsx:133`
- `portal-cidade/docs/PRODUCT.md:43`

## lacunas
não confirmei no código um formulário público para candidatura; os passos ficam limitados a consultar a vaga e seguir as instruções do contratante.
