---
id: ver-denuncias
titulo: "ver e filtrar as denúncias do portal"
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
aqui você vê as denúncias enviadas por visitantes, filtra por situação ou parte do site e abre os detalhes.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. No menu da esquerda, logo no começo, clique em `Aprovações e Denúncias`. [guia=menu:/painel/aprovacoes]
2. Para ver as denúncias, clique na aba `Denúncias`. [guia=aprovacoes-aba:denuncias]
3. Escolha quais quer ver no filtro `Status`: `Pendentes`, `Resolvidas` ou `Ignoradas`. [guia=denuncias.filtro-status]
4. Escolha de qual parte do site no filtro `Módulo`: `Todos`, `Guia`, `Vagas`, `Classificados` ou `Eventos`. [guia=denuncias.filtro-modulo]
5. Clique na denúncia que você quer ver, para abrir os detalhes. [guia=denuncias.abrir]
6. Na denúncia aberta, se quiser ver o conteúdo, clique em `Ver página denunciada`. [guia=denuncias.ver-pagina]

## explicação

- ver a denúncia não obriga a excluir nem bloquear: pode ignorar. Denúncia não é aprovação; aprovação é de envios de clientes ainda fora do ar.

## resultado
Você vê os detalhes da denúncia escolhida.

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

