---
id: cadastrar-vagas-areas-e-contratantes
titulo: cadastrar uma vaga
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

aqui você publica uma vaga nova. A empresa que oferece a vaga precisa estar cadastrada antes.

## pré-requisitos

- Ter acesso administrativo ao portal.
- A empresa que oferece a vaga precisa estar cadastrada como contratante (veja o artigo "cadastrar a empresa contratante de uma vaga").

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Vagas de Emprego` e depois em `Nova Vaga`. [guia=menu:/painel/vagas/cadastrar] [t=46]
2. Em `Empresa Contratante`, escolha a empresa que oferece a vaga. [guia=vaga-form.contratante] [t=49]
3. Em `Dados da Vaga`, escreva o título da vaga. [guia=vaga-form.dados] [t=52]
4. Escolha a área. [guia=vaga-form.dados]
5. Escolha o tipo de contrato e a carga horária. [guia=vaga-form.dados]
6. Escolha a cidade e o modelo de trabalho. [guia=vaga-form.dados]
7. Se for o caso, marque `Vaga PCD`, `1º Emprego`, `Urgente` ou `Destaque`. [guia=vaga-form.dados]
8. Em `Salário`, informe o valor em `Salário (R$)`, se quiser mostrar. [guia=vaga-form.salario] [t=63]
9. Em `Contato / Candidatura`, coloque o WhatsApp, o e-mail ou o link de candidatura. É por ali que o candidato chega à empresa. [guia=vaga-form.contato] [t=67]
10. Em `Descrição`, escreva a descrição, os requisitos e os benefícios (um por linha). [guia=vaga-form.descricao] [t=75]
11. Em `Configurações`, confira o `Status` e a data em `Expira em`. [guia=vaga-form.configuracoes] [t=80]
12. Clique em `Publicar vaga`. A vaga aparece na lista. [guia=vaga-form.publicar] [t=82]

## resultado

a vaga aparece na lista do painel e na página pública de vagas, onde o visitante busca, filtra e se candidata.

## desvios

- Para achar, editar, encerrar ou excluir vagas que já existem, veja o artigo "localizar e gerenciar vagas de emprego no painel".
- Para criar áreas de vagas, veja o artigo "criar áreas de vagas". Para cadastrar empresas, veja "cadastrar a empresa contratante de uma vaga".

## quando pedir ajuda

peça ajuda se a vaga não aparecer no portal depois de publicada.

## fontes

- `portal-cidade/frontend/src/app/painel/vagas/VagaForm.tsx` — formulário da vaga.
- `portal-cidade/frontend/src/app/painel/vagas/areas/page.tsx` — áreas.
- `portal-cidade/frontend/src/app/painel/vagas/contratantes/` — contratantes.
- vídeo `ufB3QTKfPsM`.

## lacunas

não verificado visualmente; tempos tirados da legenda automática.
