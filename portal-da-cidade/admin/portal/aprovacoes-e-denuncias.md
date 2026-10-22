---
id: aprovacoes-e-denuncias
titulo: aprovar conteúdo de clientes e ver denúncias
publico:
  - admin
modulo: aprovações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - JYDoZB_vyX8
---

## objetivo

aqui você decide o que os clientes enviam antes de ir ao ar e acompanha as denúncias feitas pelos visitantes.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## veja também
- para recusar um envio e avisar o motivo, veja o artigo "recusar um envio que aguarda aprovação".
- para escolher se o portal pede aprovação e aceita denúncias, veja o artigo "escolher as regras de aprovação e denúncias do portal".
- para achar e abrir uma denúncia, veja o artigo "ver e filtrar as denúncias do portal".
- para manter o conteúdo no ar e ignorar a denúncia, veja o artigo "ignorar uma denúncia".
- para excluir o conteúdo denunciado, veja o artigo "tirar do ar o conteúdo de uma denúncia".
- para bloquear quem publicou o conteúdo denunciado, veja o artigo "bloquear a empresa ou conta de uma denúncia".

## passos

1. No menu da esquerda, logo no começo, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes]
2. Na aba `Aprovações`, clique em `Ver detalhe` na linha do envio que você quer conferir. [guia=aprovacoes.ver-detalhe] [t=56]
3. Se estiver tudo certo, clique em `Aprovar` para colocar no ar. [guia=aprovacoes.aprovar] [t=64]
4. Para não publicar, clique em `Recusar` direto no envio; o item não vai ao ar.

## explicação
- o número ao lado do item no menu avisa que há itens novos pendentes.
- a aba `Aprovações` mostra há quanto tempo cada envio espera.
- o detalhe do envio mostra descrição, salário, local e contato, conforme o tipo.
- o visitante denuncia pelo botão `Denunciar`, escolhendo o motivo e descrevendo o ocorrido; a denúncia chega na aba `Denúncias`.
- todas as ações sobre denúncias pedem confirmação.

## resultado

conteúdo aprovado vai ao ar; recusado volta com o motivo. As denúncias ficam organizadas por situação.

## desvios

- Com a fila desligada, os envios dos clientes não passam por você.
- `A Voz do Povo` é outra coisa: são relatos de moradores, em outra tela.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento der erro ou se a opção esperada não aparecer.

## fontes

- `portal-cidade/frontend/src/app/painel/aprovacoes/`: `AprovacoesEDenuncias.tsx`, `ConfigDaFila.tsx`
- `suporte-kb/mapa/admin/telas/painel-aprovacoes.md`

## lacunas

não foi feita validação visual no navegador. Os textos dos botões podem mudar.
