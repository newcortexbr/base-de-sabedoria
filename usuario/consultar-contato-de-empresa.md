---
id: usuario-consultar-contato-empresa
titulo: consultar contato e horário de uma empresa
publico:
  - usuario
modulo: guia-comercial
categoria: guia-comercial
aba: nao-se-aplica
tipo_problema:
  - contato-da-empresa
  - horario-de-funcionamento
status: rascunho-documental
revisado_em: 2026-10-15
validacao: docs-e-codigo
---

## objetivo
ver os meios de contato e informações disponíveis no perfil público de uma empresa.

## pré-requisitos
- localizar a empresa pelo Guia Comercial.

## passos
1. abra o perfil da empresa a partir do cartão nos resultados.
2. confira as informações de endereço, horário e descrição que estiverem disponíveis (sem horário cadastrado aparece `Horário não informado`).
3. use os botões `WhatsApp` ou `Telefone`, ou outro link de contato exibido no perfil, se disponível.
4. se o perfil tiver link para cardápio, serviços ou delivery, abra-o para consultar aquela informação.

## resultado esperado
você vê as informações públicas liberadas para aquela empresa e pode iniciar contato pelo canal exibido.

## desvios
- telefone, links externos e blocos podem variar conforme os recursos liberados à empresa; ausência de um botão não prova defeito.
- horários são os informados pela empresa e podem mudar.

## quando pedir ajuda
se o perfil abrir com erro ou o contato publicado estiver incorreto, use a página `Contato` do portal. não envie documentos ou dados pessoais por canais não apresentados pelo portal.

## fontes
- `portal-cidade/frontend/src/app/guia/empresa/[cidade]/[slug]/page.tsx:47`
- `portal-cidade/frontend/src/app/guia/empresa/[cidade]/[slug]/page.tsx:73`
- `portal-cidade/docs/PRODUCT.md:95`

## lacunas
não executado em tela: link de cardápio, serviços ou delivery (empresa de teste sem esses recursos). não é possível garantir que todas as empresas exibam cada meio de contato; a página pública é composta com dados condicionais.
