---
id: admin-insights-de-vaga
titulo: "ver quantas pessoas viram uma vaga"
publico:
  - admin
modulo: vagas
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - insights da vaga
  - visualizações da vaga
  - quantas pessoas viram
  - quando a vaga expira
tags:
  - ver
  - vaga
  - visualizacao
  - numeros
  - periodo
  - contratante
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - ufB3QTKfPsM
---

## objetivo

Aqui você vê as visualizações registradas para uma vaga, a média por dia e os dados de publicação e expiração. Visualizações não significam pessoas únicas.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Em `Conteúdo`, em `Vagas de Emprego`, clique em `Listar Vagas`. [t=18] [guia=menu:/painel/vagas]
2. Digite o cargo ou a empresa em `Buscar por cargo ou empresa...`. [t=34] [guia=vagas.busca]
3. Clique em `Filtrar`. [t=36] [guia=vagas.filtrar]
4. Clique em `Insights` na linha da vaga. [t=42] [guia=vagas.insights]

## resultado

A tela mostra `Visualizações totais`, `Média por dia`, `Dias restantes` e a `Linha do tempo`. Sem prazo, mostra `Sem prazo definido`.

## desvios

- Se aparecer `Vaga não encontrada. Ela pode ter sido excluída.`, volte à lista e confirme qual vaga abriu.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/vagas/page.tsx:263`.
- `frontend/src/app/painel/vagas/[id]/insights/page.tsx:121`.
- Vídeo `ufB3QTKfPsM`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/ufB3QTKfPsM.md` e legenda `videos/legendas/ufB3QTKfPsM.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.
