---
id: acesso-colunista
titulo: "criar e cuidar do acesso de um colunista"
publico:
  - admin
modulo: artigos
categoria: conteúdo
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - CRiUbh7wHdc
---

## objetivo

Aqui você cria o login de um colunista já cadastrado, redefine a senha ou remove o acesso à área do cliente.

## pré-requisitos

- Entrar no painel como administrador.
- Ter o perfil do colunista cadastrado.

## passos

### criar acesso

1. Na seção `Conteúdo` do menu lateral, em `Artigos`, clique em `Colunistas`. [t=50] [guia=menu:/painel/blog/colunistas]
2. Na linha da pessoa, clique no lápis. [guia=colunistas.editar]
3. Em `Acesso do proprietário`, preencha `Nome do responsável *`, se ainda não houver login. [guia=acesso-proprietario.nome]
4. Preencha `E-mail de login *`. [guia=acesso-proprietario.email]
5. Preencha `Senha inicial *`. [guia=acesso-proprietario.senha]
6. Clique em `Criar acesso`. [guia=acesso-proprietario.criar]
7. Anote os dados mostrados em `Painel do proprietário`. [guia=acesso-proprietario.dados]
8. Clique em `Anotei, ocultar a senha`. [guia=acesso-proprietario.confirmar-dados]

### redefinir senha

1. Na seção `Conteúdo` do menu lateral, em `Artigos`, clique em `Colunistas`. [t=50] [guia=menu:/painel/blog/colunistas]
2. Na linha da pessoa, clique no lápis. [guia=colunistas.editar]
3. Em `Painel do proprietário`, clique em `Redefinir senha`. [guia=acesso-proprietario.abrir-redefinicao]
4. Preencha `Nova senha *`. [guia=acesso-proprietario.senha]
5. Clique em `Redefinir senha`, junto ao campo da nova senha. [guia=acesso-proprietario.redefinir]
6. Anote os dados mostrados no cartão. [guia=acesso-proprietario.dados]
7. Clique em `Anotei, ocultar a senha`. [guia=acesso-proprietario.confirmar-dados]

### remover acesso

1. Na seção `Conteúdo` do menu lateral, em `Artigos`, clique em `Colunistas`. [t=50] [guia=menu:/painel/blog/colunistas]
2. Na linha da pessoa, clique no lápis. [guia=colunistas.editar]
3. Em `Painel do proprietário`, clique em `Remover acesso`. [guia=acesso-proprietario.remover]
4. Depois de ler o aviso, clique em `Remover acesso` na confirmação. [guia=confirmacao.confirmar]

## resultado

Criar ou redefinir mostra a senha uma vez e informa o resultado do envio de e-mail. Remover mostra `Acesso removido.` e corta o acesso indicado na confirmação. Esses botões executam a ação sem depender do `Salvar` do perfil.

## desvios

- Se houver aviso de conta compartilhada, redefinir ou remover vale para todos os vínculos indicados pelo aviso.
- Não confunda `E-mail público` com `E-mail de login *`.
- Cadastrar um perfil sem preencher o acesso opcional não cria login.

## fontes

- `frontend/src/app/painel/blog/colunistas/page.tsx:311` — serviços de acesso.
- `frontend/src/components/painel/AcessoDoProprietario.tsx:409` — criar.
- `frontend/src/components/painel/AcessoDoProprietario.tsx:429` — redefinir.
- `frontend/src/components/painel/AcessoDoProprietario.tsx:452` — remover.
- `frontend/src/components/painel/AcessoDoProprietario.tsx:506` — botões.
- `frontend/src/components/painel/AcessoDoProprietario.tsx:578` — confirmação e conta compartilhada.
- Vídeo `CRiUbh7wHdc`: contexto da lista em 50s; não detalha login.

## lacunas

Não executados login, redefinição, remoção ou envio real de e-mail.
