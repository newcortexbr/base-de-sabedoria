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
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - ufB3QTKfPsM
---

## objetivo

Aqui você cadastra a empresa que oferece vagas. O login do responsável é opcional.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Vagas de Emprego`, clique em `Contratantes`. [t=97] [guia=menu:/painel/vagas/contratantes]
2. Clique em `+ Criar Contratante`. [t=103] [guia=contratantes.criar]
3. Preencha `Nome *`. [t=105] [guia=contratante-form.nome]
4. Se quiser, preencha `Descrição`. [guia=contratante-form.descricao]
5. Se quiser, envie a imagem em `Logo`. [t=105] [guia=contratante-form.logo]
6. Se quiser, escolha `Cidade`. [t=105] [guia=local:cidade]
7. Se quiser, preencha o contato público em `WhatsApp`. [guia=contratante-form.whatsapp]
8. Se quiser, preencha o contato público em `E-mail`. [guia=contratante-form.email]
9. Se quiser criar login, preencha `Nome do responsável *` em `Acesso do proprietário`. [guia=acesso-proprietario.nome]
10. Se quiser criar login, preencha `E-mail de login *`. [guia=acesso-proprietario.email]
11. Se quiser criar login, preencha `Senha *`. [guia=acesso-proprietario.senha]
12. Clique em `Criar Contratante`. [guia=contratante-form.criar]

## resultado

O contratante é cadastrado. Se você pediu login, o portal tenta criá-lo depois do cadastro e mostra o resultado; confirme se o acesso ficou pronto.

## desvios

- Para cadastrar sem login, deixe vazios os campos de nome, e-mail e senha em `Acesso do proprietário`.
- Se começar a preencher o acesso, complete os campos obrigatórios; o formulário bloqueia o salvamento se estiverem inválidos.
- E-mail público de contato e e-mail de login são campos diferentes.
- O cadastro pode estar salvo mesmo se a criação do acesso falhar. Não cadastre de novo; use a opção de acesso na edição.
- A mensagem final informa se o e-mail de acesso foi enviado; salvar o cadastro não comprova entrega do e-mail.

## quando pedir ajuda

Peça ajuda se a tela não carregar ou se a ação mostrar erro. Informe a mensagem e a ação tentada, sem enviar senha.

## fontes

- Código do portal no HEAD `b2f62d3f`; base revisada a partir de `814f097`.
- `frontend/src/app/painel/vagas/contratantes/cadastrar/page.tsx:87`.
- `frontend/src/components/painel/AcessoDoProprietario.tsx:69`.
- `frontend/src/components/painel/AcessoDoProprietario.tsx:279`.
- Vídeo `ufB3QTKfPsM`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/ufB3QTKfPsM.md` e legenda `videos/legendas/ufB3QTKfPsM.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.

A criação do acesso do proprietário não é demonstrada no vídeo. Não há tempo atribuído ao que não foi demonstrado.
