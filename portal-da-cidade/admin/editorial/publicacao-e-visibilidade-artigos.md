---
id: publicacao-e-visibilidade-artigos
titulo: "ver se um artigo está no ar"
publico:
  - administrador do portal
modulo: Artigos
categoria: conteúdo
aba: Artigos
tipo_problema: visibilidade
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - CRiUbh7wHdc
---

## objetivo
Consultar a situação de um artigo e abrir sua página pública quando estiver publicado.

## pré-requisitos/permissões
Acesso de administrador ao painel. Este caminho não é a área do colunista nem do jornalista.

## passos

1. No menu lateral, dentro de `Artigos`, clique em `Lista de Artigos`. [t=13] [guia=menu:/painel/blog]
2. Leia a coluna `Status` na linha do artigo. [t=18] [guia=blog.status-linha]
3. Se estiver `Publicado`, clique no ícone `Abrir no site` da mesma linha. [t=23] [guia=blog.abrir-site]

## resultado
As situações são `Rascunho`, `Agendado`, `Publicado` e `Arquivado`. Em `Agendado`, a lista informa a data e a hora programadas. O atalho para o site fica desabilitado nos artigos que não estão publicados.

## desvios
Para retirar um artigo da casa sem apagá-lo, veja [tirar um artigo do ar](artigos-tirar-do-ar.md). Não use regras de Notícias ou Eventos para interpretar os artigos.

## fontes
- Código b2f62d3f: `frontend/src/app/painel/blog/page.tsx:33` — estados; `:351` — situação; `:360` — link público.
- `frontend/src/app/painel/blog/[id]/page.tsx:297` — retirada do ar.
- `videos/legendas/CRiUbh7wHdc.srt` — 13 a 26 segundos.

## lacunas
Sem validação da página pública em execução. O destaque na página inicial não é comprovado apenas pela situação da lista.
