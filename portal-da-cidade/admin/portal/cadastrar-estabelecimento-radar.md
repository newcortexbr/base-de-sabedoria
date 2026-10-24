---
id: cadastrar-estabelecimento-radar
titulo: "cadastrar um estabelecimento no Radar de Preços"
publico:
  - admin
modulo: radar
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - Xfc771aD4z8
---

## objetivo

Cadastre um supermercado, uma farmácia ou um posto de combustível no Radar.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Radar de Preços`, clique em `Estabelecimentos`. [guia=menu:/painel/radar/mercados]
2. Clique em `Cadastrar estabelecimento`. [t=36] [guia=radar-mercados.novo]
3. Escolha `Categoria *`.  [t=39] [guia=radar-mercados.categoria]
4. Preencha `Nome *`.  [t=39] [guia=radar-mercados.nome]
5. Se houver, preencha `Endereço`.  [t=41] [guia=radar-mercados.endereco]
6. Se houver, escolha `Cidade`.  [t=41] [guia=radar-mercados.cidade]
7. Se houver, escolha `Bairro`.  [t=41] [guia=radar-mercados.bairro]
8. Clique em `Salvar`. [t=43] [guia=radar-mercados.salvar]

## resultado

O estabelecimento fica cadastrado no Radar. Para mudar seus dados depois, use o lápis da linha e salve o formulário.

## fontes

- `frontend/src/app/painel/radar/mercados/page.tsx:100`
- `frontend/src/app/painel/radar/mercados/page.tsx:274`

- Catálogo: `portal-da-cidade/videos.json`; legendas: `videos/legendas/Xfc771aD4z8.srt`.

## lacunas

- Conferido por leitura do código no HEAD b2f62d3f. Sem execução do produto ou validação visual nesta auditoria.
