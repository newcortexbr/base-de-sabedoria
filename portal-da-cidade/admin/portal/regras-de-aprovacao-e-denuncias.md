---
id: regras-de-aprovacao-e-denuncias
titulo: "ligar ou desligar Exigir minha aprovação e Permitir denúncias (o que acontece)"
publico:
  - admin
modulo: aprovações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
tags:
  - regras
  - aprovacao
  - denuncia
  - ligar
  - desligar
  - moderacao
  - configurar
  - fila
  - painel
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - JYDoZB_vyX8
---

## objetivo

Escolha se os envios dos clientes esperam sua aprovação e se visitantes podem denunciar conteúdo.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No começo do menu da esquerda, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes]
2. No quadro `Como funciona neste portal`, marque ou desmarque `Exigir minha aprovação antes de publicar`. [t=19] [guia=aprovacoes-config:aprovacao]
3. Marque ou desmarque `Permitir que visitantes denunciem conteúdo`. [t=33] [guia=aprovacoes-config:denuncias]

## resultado

Cada chave salva sozinha ao ser clicada. Se o salvamento falhar, a chave volta à posição anterior e aparece uma mensagem em vermelho.

## ao desligar a aprovação

- O que os clientes enviarem daí em diante vai direto ao ar.
- O que já estava esperando continua na fila até você aprovar ou recusar. Não existe botão para liberar tudo de uma vez.
  **O que fazer:** abra a aba `Aprovações` e clique em `Aprovar` em cada linha; não precisa abrir o detalhe. [guia=aprovacoes.aprovar] Para pedir essa função, use `Sugestões de Funções`, no rodapé do menu da esquerda. [guia=menu:/painel/sugestoes]
- A aba `Aprovações` mostra o selo `desligada` e um aviso amarelo. Os dois somem quando você religa a chave e abre a página de novo.

## ao ligar a aprovação

- O que já está no ar continua no ar.
- Valem para envios novos de empresas, vagas, anúncios, eventos e banners.
- Vagas e anúncios: se o cliente editar um item que está no ar, ele sai do ar até você aprovar de novo. A tela do cliente avisa antes de ele salvar. Fotos de anúncio trocadas ou apagadas também mandam o anúncio de volta.
- Eventos: se o cliente mudar o conteúdo de um evento no ar (ou a galeria de fotos), ele sai do ar até você aprovar de novo.
- Banners: se o cliente trocar a arte, o link de destino ou o título de um banner já pago, ele volta para a fila.
- Empresas do Guia: o dono não consegue mudar a situação da empresa; editar não manda uma empresa aprovada de volta para a fila.
- Qualquer tipo recusado volta para a fila quando o cliente edita e reenvia.

## o que nunca passa pela fila

- O que você, administrador, publica.
- Artigos: todo colunista publica direto, por decisão do portal.

## permitir denúncias

- Desligado: o botão `Denunciar` some do site e novas denúncias são recusadas. A aba `Denúncias` mostra `desligada` e um aviso amarelo.
- As denúncias que já chegaram continuam na lista para você resolver.

## perguntas comuns

**posso exigir aprovação só de alguns tipos, como empresas sim e classificados não?** Não. A chave vale para todos os tipos da fila ao mesmo tempo. **O que fazer:** deixe a chave ligada e aprove direto na linha os tipos que você não precisa revisar; se quiser a escolha por tipo, peça a função em `Sugestões de Funções`, no rodapé do menu da esquerda.
**por que artigos são exceção?** Foi uma decisão do portal: artigos não têm aprovação, todo colunista publica direto.

## fontes

- frontend/src/app/painel/aprovacoes/ConfigDaFila.tsx:99 (salvar, reverter e erro)
- frontend/src/app/painel/aprovacoes/AprovacoesEDenuncias.tsx:23-26,84-106
- backend/portais/moderacao.py:42-76
- backend/anuncios/serializers.py:316-325; classificados/serializers.py:332-341 (edição reenvia para análise)
- backend/denuncias/views_public.py (404 com chave desligada)
- backend/comercial/views_eventos.py:272-285,696-717 (evento); comercial/views_publicidade.py:463-488 (banner); classificados/views_admin.py:431-439 e anuncios/views_admin.py:493-501,568-580 (vaga e anúncio); guia/serializers.py:667-690 (status somente leitura para o dono da empresa)

## lacunas

- Conferido por leitura do código no HEAD 66d38db2 (wt-suporte-tool). Sem execução do produto nem validação visual.
