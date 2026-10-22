---
id: ext-entrar-pela-area-do-cliente
titulo: "entrar no Extrator Maps pela Área do Cliente (sem senha nova)"
publico:
  - cliente
modulo: acesso
aba: Login
tipo_problema:
  - entrar-no-extrator
  - login-unico
  - sso
  - extrator-maps
status: rascunho-documental
revisado_em: 2026-10-21
validacao: codigo-e-video
videos:
  - F136_v1JyRY
---

## objetivo
abrir o Extrator Maps usando a sua conta da Área do Cliente.

## pré-requisitos
- ter um negócio (licença) ativo na Área do Cliente.
- ter feito login na Área do Cliente (ver `ac-entrar-na-area-do-cliente`).

## explicação
- não existe cadastro no Extrator. a sua conta é criada automaticamente pela Área do Cliente, e você entra por ela, sem senha nova.
- o Extrator também tem a própria tela `/login` ("Entrar", com `E-mail` e `Senha`). contas criadas pela Área do Cliente não têm senha utilizável ali: e-mail e senha dão `E-mail ou senha inválidos.`. para essas contas, use o botão `Entrar com a Área do Cliente`.
- o botão `Entrar com a Área do Cliente` (tela de login do Extrator, abaixo do separador "ou", com o texto "Comprou o Portal da Cidade? Sua conta já existe — entre por aqui.") abre uma janelinha (pop-up) na Área do Cliente. se o navegador bloquear o pop-up, a página inteira é redirecionada e o login funciona igual.
- a sessão no Extrator dura 7 dias.

## passos
1. na Área do Cliente, abra o menu do negócio e clique em `Ferramentas`.
2. no cartão `Extrator Google Maps`, clique em `Acessar ferramenta`.
3. aguarde a tela `Entrando no Extrator Maps…`.
4. você cai no `Dashboard` do Extrator.

caminho alternativo, a partir do Extrator: na tela de login clique em `Entrar com a Área do Cliente`, digite a senha da Área do Cliente na janela que abrir e volte logado para o Dashboard.

## resultado
você entra no Extrator já com a sua conta e os seus créditos (veja `ext-creditos-como-funcionam`).

## se der errado
- voltou para a tela de login sem mensagem: pode ser conta sem vínculo, conta bloqueada ou muitas tentativas. o Extrator não mostra o motivo na tela. veja `ext-login-nao-funciona`.
- `Nenhuma licença sua dá direito ao Extrator Maps.` / `Acesso ainda não configurado`: mensagens da Área do Cliente; veja `ac-ferramentas-extrator-maps` e `ac-ferramentas-nao-abre`.
- negócio suspenso ou conta bloqueada: veja `ext-licenca-suspensa-ou-conta-bloqueada`.
