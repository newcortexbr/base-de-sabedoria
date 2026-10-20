---
id: cadastrar-vagas-areas-e-contratantes
titulo: cadastrar vagas, áreas de vagas e contratantes
publico:
  - admin
modulo: vagas e classificados
categoria: admin
aba: nao-se-aplica
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - ufB3QTKfPsM
---

## objetivo

publicar uma vaga nova e cuidar das áreas de vagas e das empresas contratantes.

## pré-requisitos

- Ter acesso administrativo ao portal.
- A empresa que oferece a vaga precisa estar cadastrada como contratante (veja os passos 14 a 18).

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Vagas de Emprego` e depois em `Nova Vaga` (`/painel/vagas/cadastrar`). [guia=menu:/painel/vagas/cadastrar] [t=46]
2. Em `Empresa Contratante`, escolha a empresa que oferece a vaga. [guia=vaga-form.contratante] [t=49]
3. Em `Dados da Vaga`, escreva o título e escolha a área, o tipo de contrato, a carga horária, a cidade e o modelo de trabalho. Marque também se é `Vaga PCD`, `1º Emprego`, `Urgente` ou `Destaque`. [guia=vaga-form.dados] [t=52]
4. Em `Salário`, informe o valor em `Salário (R$)`, se quiser mostrar. [guia=vaga-form.salario] [t=63]
5. Em `Contato / Candidatura`, coloque o WhatsApp, o e-mail ou o link de candidatura. É por ali que o candidato chega à empresa. [guia=vaga-form.contato] [t=67]
6. Em `Descrição`, escreva a descrição, os requisitos e os benefícios (um por linha). [guia=vaga-form.descricao] [t=75]
7. Em `Configurações`, confira o `Status` e a data em `Expira em`. [guia=vaga-form.configuracoes] [t=80]
8. Clique em `Publicar vaga`. A vaga aparece na lista. [guia=vaga-form.publicar] [t=82]
9. Para criar uma área: no menu de `Vagas de Emprego`, clique em `Áreas de Vagas` (`/painel/vagas/areas`). [guia=menu:/painel/vagas/areas] [t=86]
10. Clique em `+ Nova Área`. [guia=areas-vagas.nova] [t=90]
11. Escreva o `Nome` da área. [guia=areas-vagas.nome] [t=91]
12. Escolha o `Ícone` e a `Cor`. [guia=areas-vagas.cor] [t=92]
13. Clique em `Salvar`. [guia=areas-vagas.salvar] [t=94]
14. Para cadastrar uma empresa contratante: no menu de `Vagas de Emprego`, clique em `Contratantes` (`/painel/vagas/contratantes`). [guia=menu:/painel/vagas/contratantes] [t=96]
15. Clique em `+ Criar Contratante`. [guia=contratantes.criar] [t=103]
16. Preencha o `Nome` e, se quiser, a descrição e o logo. [guia=contratante-form.nome] [t=104]
17. Preencha a localização e as redes sociais e contato. [guia=contratante-form.localizacao] [t=106]
18. Clique em `Criar Contratante`. [guia=contratante-form.criar] [t=108]

## resultado

a vaga aparece na lista do painel e na página pública de vagas, onde o visitante busca, filtra e se candidata.

## desvios

- Para achar, editar, encerrar ou excluir vagas que já existem, veja o artigo de vagas e classificados.
- Em `Contratantes` aparece o selo de verificada e quem tem acesso a cada empresa.

## quando pedir ajuda

peça ajuda se a vaga não aparecer no portal depois de publicada.

## fontes

- `portal-cidade/frontend/src/app/painel/vagas/VagaForm.tsx` — formulário da vaga.
- `portal-cidade/frontend/src/app/painel/vagas/areas/page.tsx` — áreas.
- `portal-cidade/frontend/src/app/painel/vagas/contratantes/` — contratantes.
- vídeo `ufB3QTKfPsM`.

## lacunas

não verificado visualmente; tempos tirados da legenda automática.
