---
id: cliente-quem-pode-anunciar-classificados
titulo: "quem pode anunciar nos classificados e como começar"
publico:
  - cliente
  - usuario
modulo: classificados
categoria: classificados
aba: Classificados
tipo_problema: orientacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - zHOxx6KFIrk
---

## objetivo

explicar, sem complicação, quem pode colocar um anúncio de venda nos classificados do portal e como começar.

## explicação

- os classificados são anúncios de coisas à venda: carro, móvel, celular, imóvel, e assim por diante. Vagas de emprego são outra coisa.
- qualquer pessoa ou empresa pode anunciar, mas **precisa ter conta e um cadastro de anunciante no portal**. Visitante sem conta não anuncia.
- quem cria o cadastro de anunciante: o administrador do portal (cadastra você e cria o seu login; você recebe os dados por e-mail) ou você mesmo, na página `Anuncie nos Classificados` do portal, criando a conta e confirmando o e-mail.
- sem cadastro de anunciante, ao tentar publicar aparece: "Você não está vinculado a nenhum anunciante neste portal. Fale com o administrador do portal."
- todo anúncio precisa de **pelo menos uma foto**.
- quando o portal pede aprovação, o anúncio de quem se cadastrou na página `Anuncie nos Classificados` fica `Pendente` até o administrador liberar. Anúncio criado pelo administrador vai ao ar direto.

## passos

1. Na página `Anuncie nos Classificados` (bloco `Anuncie agora`), preencha o nome, o WhatsApp, o e-mail e a senha (mínimo de 8 caracteres). [guia=conta.formulario]
2. Clique em `Criar conta`. [guia=conta.criar]
3. Digite o código de 6 números que chega no seu e-mail. [guia=conta.codigo]
4. Clique em `Entrar na minha conta`. [guia=conta.entrar]
5. No menu da esquerda, clique em `Classificados`. Depois siga "publicar um anúncio novo na área do cliente". [guia=menu:/minha-conta/classificados]

## resultado

você tem conta de anunciante e pode publicar.

## desvios

- anúncio recusado pode ser corrigido e enviado de novo; ao editar, ele volta para a análise.
- anúncio vendido pode ser marcado como vendido, sem apagar.
- o formulário pode oferecer os botões `Pessoa física` e `Empresa`; o campo do nome muda para `Seu nome` ou `Nome da empresa` e pode pedir documento.

## fontes

- `backend/anuncios/views_admin.py:224`
- `backend/anuncios/views_admin.py:319`
- `backend/anuncios/models.py:26`
- `frontend/src/app/anuncie/classificados/page.tsx:84-92` — formulário `Anuncie agora`, botão `Criar conta`.
- `frontend/src/components/lp/FormularioLP.tsx:409-580` — campos, código de 6 dígitos, `Entrar na minha conta`.

## lacunas

não verificado visualmente. Que o formulário de `Anuncie nos Classificados` cria o cadastro de anunciante foi inferido de `FormularioLP` com módulo `classificados` e de `Anunciante.origem=autocadastro`. Como o visitante chega à página (link do portal) não foi mapeado.
