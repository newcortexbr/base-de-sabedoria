---
id: admin-trocar-a-propria-senha
titulo: "trocar a minha senha do painel"
publico:
  - admin
modulo: acesso
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - trocar minha senha
  - alterar senha do painel
  - mudar a senha do administrador
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
aqui você troca a senha que usa para entrar no painel, sabendo a senha atual.

## pré-requisitos

- Estar logado no painel.
- Saber a senha atual.

## passos

1. Na barra de endereço do navegador, logo depois do endereço do portal, escreva `/painel/alterar-senha` e aperte Enter. O menu do painel não tem um link para esta página. [guia=fora]
2. Escreva a senha que você usa hoje em `Senha atual`. [guia=fora]
3. Escreva a senha nova em `Nova senha`. [guia=fora]
4. Repita a senha nova em `Confirmar nova senha`. [guia=fora]
5. Clique em `Alterar Senha`. [guia=fora]

## resultado
aparece "Senha alterada com sucesso.". Na próxima entrada, use a senha nova.

## desvios

- Aparece "As senhas não conferem.": a confirmação está diferente da senha nova.
- A senha nova precisa ter pelo menos 8 caracteres, não pode ser só números nem uma senha comum.
- Não sabe a senha atual: veja "esqueci a senha do painel".

## quando pedir ajuda

peça ajuda se aparecer "Erro ao alterar a senha." mesmo com a senha atual certa.

## fontes

- `portal-cidade/frontend/src/app/painel/alterar-senha/page.tsx:23-97` — campos, mensagens e botão.
- `portal-cidade/frontend/src/lib/politica-de-senha.ts:4-7` — regra da senha.
- `portal-cidade/frontend/src/components/painel/Sidebar.tsx` e `Header.tsx` — nenhum link para `/painel/alterar-senha`.

## lacunas

tela não validada no navegador nesta tarefa. A tela não tem marcas `data-guia`, por isso os passos usam `fora`. Não confirmei no código se a troca desconecta outros aparelhos.
