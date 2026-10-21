---
id: admin-esqueci-a-senha-do-painel
titulo: "esqueci a senha do painel"
publico:
  - admin
modulo: acesso
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - esqueci minha senha
  - esqueceu a senha
  - não consigo entrar no painel
  - recuperar senha do administrador
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
aqui você sabe o que fazer se esqueceu a senha de administrador do painel.

## o que acontece

a tela de entrada do painel mostra `Esqueceu a senha?`, mas hoje esse botão não faz nada: o painel não envia e-mail de recuperação para o administrador.

## o que fazer

- Fale com a equipe que entregou o seu portal. Ela consegue definir uma senha nova para a sua conta.
- Ao receber a senha nova, entre no painel e troque por uma só sua. Veja "trocar a minha senha do painel".
- Não envie a sua senha por mensagem a ninguém.

## quando pedir ajuda

sempre que não conseguir entrar no painel por causa da senha.

## fontes

- `portal-cidade/frontend/src/app/painel/login/page.tsx:317-320` — botão "Esqueceu a senha?" sem `onClick`.
- `portal-cidade/frontend/src/lib/master-api.ts:187-188` — `resetSenha` na área da equipe da plataforma (Master).

## lacunas

o botão sem ação é um defeito do produto, registrado aqui como divergência. O canal de contato com a equipe da plataforma não está no código.
