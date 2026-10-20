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
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - JYDoZB_vyX8
---

## objetivo

decidir o que os clientes enviam antes de ir ao ar e acompanhar as denúncias feitas por visitantes.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, logo no começo, clique em `Aprovações e Denúncias` (`/painel/aprovacoes`). [guia=menu:/painel/aprovacoes]
2. No topo da página, no quadro `Como funciona neste portal`, marque ou desmarque `Exigir minha aprovação antes de publicar`. Marcado, o que os clientes enviam só vai ao ar depois que você aprovar. Muda na hora. [guia=aprovacoes-config:aprovacao] [t=16]
3. No mesmo quadro, marque ou desmarque `Permitir que visitantes denunciem conteúdo`. Desmarcado, o botão "Denunciar" some do site. [guia=aprovacoes-config:denuncias] [t=31]
4. Na aba `Aprovações`, clique em `Ver detalhe` na linha do envio que você quer conferir. [guia=aprovacoes.ver-detalhe] [t=56]
5. Se estiver tudo certo, clique em `Aprovar` para colocar no ar. [guia=aprovacoes.aprovar] [t=64]
6. Para não publicar, clique em `Recusar`. [guia=aprovacoes.recusar] [t=67]
7. Escreva o motivo da recusa (é obrigatório). O cliente recebe o motivo para corrigir e reenviar. [guia=aprovacoes.motivo]
8. Clique em `Confirmar recusa`. [guia=aprovacoes.confirmar-recusa]
9. Para ver as denúncias, clique na aba `Denúncias`. [guia=aprovacoes-aba:denuncias] [t=80]
10. Escolha quais quer ver no filtro `Status`: `Pendentes`, `Resolvidas` ou `Ignoradas`. [guia=denuncias.filtro-status]
11. Escolha de qual parte do site no filtro `Módulo`: `Todos`, `Guia`, `Vagas`, `Classificados` ou `Eventos`. [guia=denuncias.filtro-modulo]
12. Clique na denúncia que você quer ver, para abrir os detalhes. [guia=denuncias.abrir]
13. Na denúncia aberta, se quiser ver o conteúdo, clique em `Ver página denunciada`. [guia=denuncias.ver-pagina] [t=85]
14. Escolha o que fazer. Se está tudo bem, clique em `Ignorar denúncia` (o item continua no ar). [guia=denuncias.ignorar] [t=90]
15. Para tirar o conteúdo do ar, clique em `Excluir item`. [guia=denuncias.excluir-item] [t=92]
16. Para tirar do ar tudo o que aquele responsável publicou nessa parte do site, clique em `Bloquear empresa/conta` (pode ser desfeito depois). [guia=denuncias.bloquear] [t=95]
17. Confirme na janela que aparece. [guia=denuncias.bloquear]

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
