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
revisado_em: 2026-10-19
validacao: docs-e-codigo
---

## objetivo
encontrar vagas e consultar como a empresa responsável recebe candidaturas.

## pré-requisitos
- estar no portal que atende a cidade ou região desejada.

## passos

1. No menu do topo do portal, clique em `Vagas`. Abre a página `Vagas de Emprego`.
2. No campo `Cargo, área ou empresa…`, escreva o que você procura.
3. Use os filtros da página, como cidade, tipo de contrato (`CLT`, `Estágio`, `PJ / Autônomo`…) e os botões rápidos como home office, PCD, primeiro emprego ou urgente.
4. Clique na vaga que te interessa e leia os requisitos e como se candidatar.
5. Use o botão ou o contato que a vaga mostra (por exemplo, `Enviar currículo`). Se tiver dúvida, confirme direto com quem está contratando.

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
