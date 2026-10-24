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
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - ufB3QTKfPsM
---

## objetivo

Aqui você cadastra uma vaga de emprego no painel. A empresa contratante precisa estar cadastrada antes.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- Ter a empresa cadastrada em `Contratantes`.

## passos

1. Na parte `Conteúdo` do menu, em `Vagas de Emprego`, clique em `Nova Vaga`. [t=46] [guia=menu:/painel/vagas/cadastrar]
2. Escolha `Contratante *`. [t=48] [guia=vaga-form.contratante]
3. Preencha `Título *`. [t=50] [guia=vaga-form.titulo]
4. Se quiser, escolha `Área`. [t=53] [guia=vaga-form.area]
5. Escolha `Tipo de contrato`. [t=53] [guia=vaga-form.tipo-contrato]
6. Se quiser, preencha `Carga horária`. [t=53] [guia=vaga-form.carga-horaria]
7. Escolha `Cidade`. [t=56] [guia=local:cidade]
8. Se quiser, escolha `Bairro`. [guia=local.bairro]
9. Escolha uma opção em `Modelo de trabalho`. [t=58] [guia=vaga-form.modelo-trabalho]
10. Se a vaga aceitar pessoas com deficiência, marque `Vaga PCD`. [t=60] [guia=vaga-form.pcd]
11. Se a vaga for para quem busca o primeiro emprego, marque `1º Emprego`. [t=63] [guia=vaga-form.primeiro-emprego]
12. Se quiser esse selo, marque `Urgente`. [t=63] [guia=vaga-form.urgente]
13. Se quiser esse selo, marque `Destaque`. [t=63] [guia=vaga-form.destaque]
14. Para informar um salário, desmarque `A combinar`. [t=65] [guia=vaga-form.salario-combinar]
15. Se desmarcou `A combinar`, preencha `Salário (R$)`. [t=65] [guia=vaga-form.salario-valor]
16. Se a candidatura for por site, preencha `URL de candidatura (site externo)`. [t=71] [guia=vaga-form.candidatura]
17. Se a candidatura for por WhatsApp, preencha `WhatsApp para contato`. [t=68] [guia=vaga-form.whatsapp]
18. Se receber currículos por e-mail, preencha `E-mail para currículo`. [t=68] [guia=vaga-form.email]
19. Preencha `Descrição da vaga *`. [t=75] [guia=vaga-form.descricao-texto]
20. Se quiser, preencha `Requisitos`. [t=75] [guia=vaga-form.requisitos]
21. Se quiser, preencha `Benefícios (um por linha)`. [t=77] [guia=vaga-form.beneficios]
22. Para publicar, deixe `Status` como `Ativa`. [t=80] [guia=vaga-form.status]
23. Confira ou altere `Expira em`. [t=80] [guia=vaga-form.expira-em]
24. Clique em `Publicar vaga`. [t=82] [guia=vaga-form.publicar]

## resultado

A vaga é gravada e aparece na lista do painel. Para a publicação no site, também se aplicam as regras de visibilidade do contratante.

## desvios

- `A combinar` marcado dispensa o valor do salário. Esse valor é a remuneração da vaga, não o preço cobrado para anunciar.
- `Requisitos` e `Benefícios (um por linha)` têm campos próprios; não precisam ficar na descrição.
- Se a cidade ou o contratante não aparecerem, resolva o cadastro antes de publicar.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/vagas/VagaForm.tsx:205`.
- `frontend/src/app/painel/vagas/VagaForm.tsx:299`.
- `frontend/src/app/painel/vagas/VagaForm.tsx:525`.
- `backend/classificados/views_public.py:30`.
- Vídeo `ufB3QTKfPsM`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/ufB3QTKfPsM.md` e legenda `videos/legendas/ufB3QTKfPsM.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.
