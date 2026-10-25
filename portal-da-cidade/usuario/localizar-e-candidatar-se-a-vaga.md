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
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - ufB3QTKfPsM
---

## objetivo
encontrar vagas e candidatar-se pelo canal que a empresa escolheu (site, WhatsApp ou e-mail).

## pré-requisitos
- estar no portal que atende a cidade ou região desejada. A seção `Vagas` precisa estar ligada no portal.

## passos

1. No menu do topo do portal, clique em `Vagas`. Abre a página `Vagas de Emprego`. [guia=topo.vagas]
2. No campo `Cargo, área ou empresa...`, escreva o que você procura. [guia=caixa-busca.campo] [t=110]
3. Abaixo do campo, escolha a cidade (`Todas as cidades`, se o portal tiver mais de uma) e o tipo de contrato (`Todos os tipos`, `CLT`, `Estágio`, `Trainee`, `PJ / Autônomo`, `Temporário` ou `Freelancer`). [guia=caixa-busca.filtros] [t=113]
4. Clique na lupa (botão `Buscar`) no fim do campo. [guia=caixa-busca.buscar]
5. Se quiser, em `Filtros rápidos`, clique em `CLT`, `PJ`, `Estágio`, `Home Office`, `PCD`, `1º Emprego` ou `Urgente` (`Todas` mostra tudo). [guia=vagas.filtros-rapidos]
6. Clique na vaga que te interessa e leia a descrição, os requisitos e os benefícios. [guia=vagas.vaga] [t=118]
7. Para se candidatar, clique no botão da vaga: `Candidatar-se` (abre o site da empresa), `Falar no WhatsApp` ou, mais abaixo, `Enviar currículo por e-mail`. [guia=vagas.candidatar] [t=120]

## resultado esperado
você localiza vagas compatíveis e se candidata pelo canal que a empresa publicou. O portal não recebe o currículo: ele só leva ao site, ao WhatsApp ou ao e-mail da empresa.

## desvios
- se a vaga não tem nenhum canal, aparece o botão `Como se candidatar`, que leva ao quadro `Pronto pra se candidatar?` com a mensagem `Entre em contato com a empresa para se candidatar.`
- sem resultados, remova filtros e tente outra palavra-chave ou cidade; `Limpar ×` remove os filtros.
- o endereço antigo `/vagas` redireciona para `Vagas de Emprego`.
- requisitos e canal de candidatura dependem de cada vaga.

## quando pedir ajuda
se a página da vaga não abrir ou o contato publicado estiver inválido, informe ao suporte o título público da vaga e o endereço da página. não envie currículo ao suporte.

## fontes
- `portal-cidade/frontend/src/app/vagasdeemprego/page.tsx:138-166,215-262`
- `portal-cidade/frontend/src/app/vagasdeemprego/[cidade]/[slug]/page.tsx:221-238,470-560`
- `portal-cidade/backend/classificados/views_public.py:318-329`
- `portal-cidade/frontend/src/components/layout/HeaderClient.tsx:566`
- vídeo `ufB3QTKfPsM` (110–122 s).

## lacunas
não executado em tela. Os nomes dos filtros rápidos vêm do servidor e podem mudar. A página da vaga repete os botões de candidatura no topo e no quadro `Pronto pra se candidatar?`; os rótulos do quadro vêm em maiúsculas (`CANDIDATAR-SE GRÁTIS`, `FALAR NO WHATSAPP`).
