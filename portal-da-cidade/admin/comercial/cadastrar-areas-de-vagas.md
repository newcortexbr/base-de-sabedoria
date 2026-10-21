---
id: cadastrar-areas-de-vagas
titulo: criar áreas de vagas
publico:
  - admin
modulo: vagas e classificados
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-20
validacao: docs-e-codigo
videos:
  - ufB3QTKfPsM
---

## objetivo

aqui você cria as áreas de vagas, como Vendas ou Saúde, que organizam as vagas do portal.

## pré-requisitos

- Ter acesso administrativo ao portal.

## passos

1. No menu de `Vagas de Emprego`, clique em `Áreas de Vagas`. [guia=menu:/painel/vagas/areas] [t=86]
2. Clique em `+ Nova Área`. [guia=areas-vagas.nova] [t=90]
3. Escreva o `Nome` da área. [guia=areas-vagas.nome] [t=91]
4. Escolha o `Ícone`. [guia=areas-vagas.cor] [t=92]
5. Escolha a `Cor`. [guia=areas-vagas.cor]
6. Clique em `Salvar`. [guia=areas-vagas.salvar] [t=94]

## resultado

a área nova fica disponível para escolher ao cadastrar uma vaga.

## desvios

- Para publicar uma vaga, veja o artigo "cadastrar uma vaga".

## quando pedir ajuda

peça ajuda se a área não aparecer na lista depois de salvar.

## fontes

- `portal-cidade/frontend/src/app/painel/vagas/VagaForm.tsx` — formulário da vaga.
- `portal-cidade/frontend/src/app/painel/vagas/areas/page.tsx` — áreas.
- `portal-cidade/frontend/src/app/painel/vagas/contratantes/` — contratantes.
- vídeo `ufB3QTKfPsM`.

## lacunas

não verificado visualmente; tempos tirados da legenda automática.
