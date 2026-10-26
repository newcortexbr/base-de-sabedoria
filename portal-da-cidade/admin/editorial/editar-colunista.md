---
id: editar-colunista
titulo: "editar e controlar um colunista"
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

Aqui você muda o perfil de um colunista, desativa ou reativa a escrita e exclui o cadastro. A exclusão também apaga os artigos dele.

## pré-requisitos

- Entrar no painel como administrador.

## passos

### editar perfil

1. Na seção `Conteúdo` do menu lateral, em `Artigos`, clique em `Colunistas`. [t=50] [guia=menu:/painel/blog/colunistas]
2. Na linha da pessoa, clique no ícone de lápis. [guia=colunistas.editar]
3. Se necessário, altere `Nome *`. [guia=colunistas.nome]
4. Se necessário, envie outra foto pelo seletor no topo da janela. [guia=colunistas.foto]
5. Se necessário, ajuste o `Ponto de foco da imagem`. [guia=imagem.foco]
6. Se necessário, altere `Cargo ou especialidade`. [guia=colunistas.cargo]
7. Se necessário, altere `Descrição breve`. [guia=colunistas.descricao]
8. Se necessário, altere `Site`. [guia=colunistas.site]
9. Se necessário, altere `Instagram`. [guia=colunistas.instagram]
10. Se necessário, altere `Facebook`. [guia=colunistas.facebook]
11. Se necessário, altere `LinkedIn`. [guia=colunistas.linkedin]
12. Se necessário, altere `WhatsApp`. [guia=colunistas.whatsapp]
13. Se necessário, altere `E-mail público`. [guia=colunistas.email-publico]
14. Clique em `Salvar`. [guia=colunistas.salvar]

### desativar escrita

1. Na seção `Conteúdo` do menu lateral, em `Artigos`, clique em `Colunistas`. [t=50] [guia=menu:/painel/blog/colunistas]
2. Na linha da pessoa ativa, clique na chave `Desativar`. O nome do colunista vem depois, no nome da chave. [t=54] [guia=colunistas.alternar-ativo]
3. Na janela `Desativar colunista`, clique em `Desativar`. [guia=confirmacao.confirmar]

### reativar escrita

1. Na seção `Conteúdo` do menu lateral, em `Artigos`, clique em `Colunistas`. [t=50] [guia=menu:/painel/blog/colunistas]
2. Na linha da pessoa inativa, clique na chave `Ativar`. O nome do colunista vem depois, no nome da chave. [t=54] [guia=colunistas.alternar-ativo]

### excluir

1. Na seção `Conteúdo` do menu lateral, em `Artigos`, clique em `Colunistas`. [t=50] [guia=menu:/painel/blog/colunistas]
2. Na linha da pessoa, clique na lixeira. [guia=colunistas.excluir]
3. Após ler o aviso em `Excluir colunista`, clique em `Excluir`. [guia=confirmacao.confirmar]

## resultado

Desativar impede escrever ou publicar artigos novos, mas mantém perfil e artigos já publicados no ar. Excluir apaga permanentemente o colunista e os artigos dele, inclusive publicados.

## desvios

- Perfil e acesso de login são controles distintos; veja “criar e cuidar do acesso de um colunista”.
- Se a pessoa não aparecer, confira os filtros `Nome ou profissão`, `Status` e `Origem` da lista.

## fontes

- `frontend/src/app/painel/blog/colunistas/page.tsx:175` — campos do perfil.
- `frontend/src/app/painel/blog/colunistas/page.tsx:471` — desativar exige confirmação; ativar é direto.
- `frontend/src/app/painel/blog/colunistas/page.tsx:562` — chave e ações.
- `frontend/src/app/painel/blog/colunistas/page.tsx:604` — aviso de exclusão.
- `frontend/src/app/painel/blog/colunistas/page.tsx:618` — efeito de desativar.
- Vídeo `CRiUbh7wHdc`: lista e chave em 50s–57s.

## lacunas

Não executadas edições ou exclusões nem conferido o efeito público em runtime.
