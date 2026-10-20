---
id: cadastrar-contratante-de-vagas
titulo: cadastrar a empresa contratante de uma vaga
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

aqui você cadastra a empresa que oferece vagas. Sem a empresa contratante cadastrada, não dá para publicar a vaga dela.

## pré-requisitos

- Ter acesso administrativo ao portal.

## passos

1. No menu de `Vagas de Emprego`, clique em `Contratantes`. [guia=menu:/painel/vagas/contratantes] [t=96]
2. Clique em `+ Criar Contratante`. [guia=contratantes.criar] [t=103]
3. Preencha o `Nome` da empresa. [guia=contratante-form.nome] [t=104]
4. Se quiser, preencha a descrição e envie o logo. [guia=contratante-form.nome]
5. Preencha a localização. [guia=contratante-form.localizacao] [t=106]
6. Preencha as redes sociais e o contato. [guia=contratante-form.localizacao]
7. Clique em `Criar Contratante`. [guia=contratante-form.criar] [t=108]

## resultado

a empresa aparece na lista de contratantes e pode ser escolhida ao cadastrar uma vaga.

## desvios

- Em `Contratantes` aparece o selo de verificada e quem tem acesso a cada empresa.
- Para publicar uma vaga, veja o artigo "cadastrar uma vaga".

## quando pedir ajuda

peça ajuda se a empresa não aparecer na lista depois de criada.

## fontes

- `portal-cidade/frontend/src/app/painel/vagas/VagaForm.tsx` — formulário da vaga.
- `portal-cidade/frontend/src/app/painel/vagas/areas/page.tsx` — áreas.
- `portal-cidade/frontend/src/app/painel/vagas/contratantes/` — contratantes.
- vídeo `ufB3QTKfPsM`.

## lacunas

não verificado visualmente; tempos tirados da legenda automática.
