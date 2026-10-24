---
id: turismo-roteiros-reordenar-paradas
titulo: "mudar a ordem das paradas de um roteiro"
publico:
  - administrador do portal
modulo: Turismo
categoria: conteúdo
aba: Roteiros
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - CMEOWthwqtI
---

## objetivo
Reorganizar a sequência das paradas de um roteiro existente.

## pré-requisitos/permissões
Acesso de administrador e roteiro com duas ou mais paradas.

## passos

1. No menu lateral, dentro de `Guia Turístico / Eventos`, clique em `Roteiros`. [t=7] [guia=menu:/painel/turismo/roteiros]
2. Clique em `Editar` na linha do roteiro. [guia=roteiros.editar]
3. Ao lado da parada, clique em `↑` para movê-la para cima, se necessário. [t=40] [guia=roteiros.parada-subir]
4. Ao lado da parada, clique em `↓` para movê-la para baixo, se necessário. [t=40] [guia=roteiros.parada-descer]
5. Clique em `Salvar`. [guia=roteiros.salvar]

## resultado
As setas mudam a montagem na tela; `Salvar` envia a nova ordem ao servidor. A seta de subir fica desabilitada na primeira parada e a de descer, na última.

## fontes
- Código b2f62d3f: `frontend/src/app/painel/turismo/roteiros/page.tsx:416` e `:417` — setas; `:438` — salvar.
- `videos/legendas/CMEOWthwqtI.srt` — menu em 7 segundos e ordem com setas em 40 segundos. As setas têm o mesmo comportamento na criação e edição; o vídeo não mostra abrir um roteiro existente.

## lacunas
Sem navegador. O salvamento da edição não recebeu o tempo do salvamento de criação.
