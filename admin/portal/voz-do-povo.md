---
id: voz-do-povo
titulo: A Voz do Povo: ver relatos dos moradores
publico:
  - admin
modulo: utilidade
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-16
validacao: docs-e-codigo
videos:
  - 1a0wZmdXDLk
---

## objetivo

acompanhar e dar andamento aos relatos enviados pelos moradores.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Abra `A Voz do Povo` → denúncias (`/painel/utilidade/denuncias`). Por padrão aparecem os relatos em aberto.
2. Use o filtro de status (em aberto, recebida, em análise, resolvida, arquivada, todos).
3. Em cada linha, use `Em análise`, `Resolvida` ou `Arquivar`. Se errar, use `Desfazer`.
4. Clique em `Ver detalhes` para ler o relato, ver fotos, vídeo, áudio e o contato, e mudar o status.

## resultado

o relato muda de situação; o texto do morador não é editado.

## desvios

- Esta tela é diferente de `Aprovações e Denúncias`, que trata de conteúdo de empresas, vagas e eventos.
- A lista mostra só a primeira página de relatos.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento der erro ou se a opção esperada não aparecer.

## fontes

- `portal-cidade/frontend/src/app/painel/utilidade/denuncias/`
- `suporte-kb/mapa/admin/telas/painel-utilidade-denuncias.md`, `painel-utilidade-denuncias-id.md`

## lacunas

não foi feita validação visual no navegador. Os textos dos botões podem mudar.
