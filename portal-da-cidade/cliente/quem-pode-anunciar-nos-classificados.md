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
revisado_em: 2026-10-22
validacao: docs-e-codigo
---

## objetivo

explicar, sem complicação, quem pode colocar um anúncio de venda nos classificados do portal e como começar.

## explicação

- os classificados são anúncios de coisas à venda: carro, móvel, celular, imóvel, e assim por diante. Vagas de emprego são outra coisa.
- qualquer pessoa ou empresa pode anunciar, mas **precisa ter conta e um cadastro de anunciante no portal**. Visitante sem conta não anuncia.
- são dois jeitos de ter esse cadastro:
  1. **sozinho**: pela página `Anuncie nos Classificados` (`/anuncie/classificados`) você cria a conta, confirma o e-mail e já pode anunciar.
  2. **pelo portal**: o administrador cadastra você como anunciante e cria o seu login. Você recebe os dados por e-mail.
- sem cadastro de anunciante, ao tentar publicar aparece: "Você não está vinculado a nenhum anunciante neste portal. Fale com o administrador do portal."
- todo anúncio precisa de **pelo menos uma foto**.
- quando o portal pede aprovação, o anúncio de quem se cadastrou sozinho fica `Pendente` até o administrador liberar. Anúncio criado pelo administrador vai ao ar direto.

## passos

1. Abra `/anuncie/classificados` e preencha o formulário de cadastro. [guia=menu:/anuncie/classificados]
2. Digite o código de 6 números que chega no seu e-mail.
3. Entre em `/minha-conta/login` e, no menu, clique em `Classificados`. Siga "publicar um anúncio novo na área do cliente". [guia=menu:/minha-conta/classificados]

## resultado

você tem conta de anunciante e pode publicar.

## desvios

- anúncio recusado pode ser corrigido e enviado de novo; ao editar, ele volta para a análise.
- anúncio vendido pode ser marcado como vendido, sem apagar.

## fontes

- `portal-cidade/backend/anuncios/views_admin.py:224`
- `portal-cidade/backend/anuncios/views_admin.py:319`
- `portal-cidade/backend/anuncios/models.py:26`
- `portal-cidade/frontend/src/app/anuncie/classificados/page.tsx:1`

## lacunas

não verificado visualmente. Que o formulário de `/anuncie/classificados` cria o cadastro de anunciante foi inferido de `FormularioLP` com módulo `classificados` e de `Anunciante.origem=autocadastro`; o passo a passo exato do formulário não foi transcrito.
