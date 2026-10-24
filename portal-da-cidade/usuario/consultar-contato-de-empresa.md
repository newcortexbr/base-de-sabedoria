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
revisado_em: 2026-10-24
validacao: docs-e-codigo
---

## objetivo
ver os meios de contato, o endereço e o horário no perfil público de uma empresa do Guia Comercial.

## pré-requisitos
- localizar a empresa pelo Guia Comercial (veja o artigo "encontrar uma empresa no guia comercial").

## passos

1. Nos resultados do `Guia Comercial`, clique no cartão da empresa para abrir a página dela. [guia=guia.empresa]
2. No topo da página, ao lado do nome, veja o bairro e a cidade e o selo `Aberto agora`, `Fechado` ou `Horário não informado`. [guia=empresa-publica.status]
3. No quadro `Horário de funcionamento`, veja os horários de cada dia da semana. [guia=empresa-publica.horario]
4. No quadro `Contato`, clique em `WhatsApp`, `Telefone`, `Instagram` ou `Site` para falar com a empresa. [guia=empresa-publica.contato]
5. Na parte `Localização`, veja o endereço completo e clique em `Abrir no Google Maps` para ver como chegar. [guia=empresa-publica.localizacao]
6. Se a página tiver delivery, clique em `Pedir pelo Delivery Online`; se tiver cardápio, clique em `Ver Cardápio Completo →` ou `Ver Cardápio`. [guia=empresa-publica.delivery]

## resultado esperado
você vê as informações públicas liberadas para aquela empresa e pode iniciar contato pelo canal exibido. No celular, um botão fixo no rodapé chama a empresa pelo WhatsApp (ou liga, quando não há WhatsApp).

## desvios
- o quadro `Contato` só mostra os canais que a empresa preencheu; ausência de um botão não prova defeito.
- cardápio, serviços, catálogo, delivery e reserva dependem da categoria e do plano da empresa.
- horários são os informados pela empresa e podem mudar.

## quando pedir ajuda
se o perfil abrir com erro ou o contato publicado estiver incorreto, use a página `Contato` do portal. não envie documentos ou dados pessoais por canais não apresentados pelo portal.

## fontes
- `portal-cidade/frontend/src/app/guia/empresa/[cidade]/[slug]/page.tsx:239-251,311-336,466-514,671-728,793-806`
- `portal-cidade/frontend/src/components/guia/EmpresaSidebarInfo.tsx:61-173`
- `portal-cidade/frontend/src/app/guia/empresa/[cidade]/[slug]/BotoesDeDelivery.tsx:13-35`
- `portal-cidade/frontend/src/components/layout/BarraContatoFixa.tsx`

## lacunas
não executado em tela: botões de cardápio, serviços e delivery (empresa de teste sem esses recursos). Não se pode garantir que todas as empresas exibam cada meio de contato; a página pública é composta com dados condicionais.
