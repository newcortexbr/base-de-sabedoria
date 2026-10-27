---
id: admin-anunciantes-de-classificados
titulo: "cadastrar um anunciante de classificados"
publico:
  - admin
modulo: classificados
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - anunciante
  - cadastrar anunciante
  - loja que anuncia nos classificados
tags:
  - pessoa fisica
  - pessoa juridica
  - criar
  - anunciante
  - classificado
  - cadastro
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - Ps1cgdLQ1FI
---

## objetivo

Aqui você cadastra uma pessoa ou loja que anuncia nos classificados. O login do responsável é opcional.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## passos

1. Na parte `Conteúdo` do menu, em `Classificados`, clique em `Anunciantes`. [t=76] [guia=menu:/painel/classificados/anunciantes]
2. Clique em `+ Novo Anunciante`. [guia=anunciantes.novo]
3. Preencha `Nome *`. [guia=anunciante-form.nome]
4. Se quiser, preencha `Descrição`. [guia=anunciante-form.descricao]
5. Se quiser, envie a imagem em `Logo`. [guia=anunciante-form.logo]
6. Se quiser, escolha `Cidade`. [guia=local:cidade]
7. Se quiser, preencha o contato público em `WhatsApp`. [guia=anunciante-form.whatsapp]
8. Se quiser, preencha o contato público em `E-mail`. [guia=anunciante-form.email]
9. Se quiser criar login, em `Quem é o anunciante? *` escolha o tipo do responsável. [guia=acesso-proprietario.tipo]
10. Se quiser criar login, preencha `Nome do responsável *` em `Acesso do proprietário`. [guia=acesso-proprietario.nome]
11. Se quiser criar login, preencha `E-mail de login *`. [guia=acesso-proprietario.email]
12. Se quiser criar login, preencha `Senha *`. [guia=acesso-proprietario.senha]
13. Clique em `Criar Anunciante`. [guia=anunciante-form.criar]

## resultado

O anunciante é cadastrado. Se você pediu login, o portal tenta criá-lo depois do cadastro e mostra o resultado; confirme se o acesso ficou pronto.

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
- `frontend/src/app/painel/classificados/anunciantes/cadastrar/page.tsx:87`.
- `frontend/src/components/painel/AcessoDoProprietario.tsx:69`.
- `frontend/src/components/painel/AcessoDoProprietario.tsx:279`.
- Vídeo `Ps1cgdLQ1FI`: catálogo `portal-da-cidade/videos.json`, transcrição `videos/conteudo/Ps1cgdLQ1FI.md` e legenda `videos/legendas/Ps1cgdLQ1FI.srt`.

## lacunas

Não houve validação no navegador nem execução do produto. As regras e os rótulos descritos foram conferidos por leitura do código. Tempos indicam o trecho da transcrição/legenda, não uma reprodução validada da interface atual.

O vídeo apresenta a lista, mas não demonstra os campos de criação e acesso; esses passos foram conferidos no código. Não há tempo atribuído ao que não foi demonstrado.
