---
id: pj-entrar-pela-area-do-cliente
titulo: "entrar no Dados PJ pela Área do Cliente (sem senha própria)"
publico:
  - cliente
modulo: acesso
aba: Login
tipo_problema:
  - login
  - acesso
  - sso
  - entrar
  - senha
  - dados-pj
status: rascunho-documental
revisado_em: 2026-10-21
validacao: codigo-e-video
videos:
  - JXWDV_IiAWQ
produto: dados-pj
---

## objetivo
entrar no Dados PJ.

## pré-requisitos
- conta na Área do Cliente e ao menos uma licença ativa.

## explicação
- o Dados PJ não tem senha própria para cliente: o login é o mesmo da Área do Cliente. não existe "esqueci a senha" nem cadastro no Dados PJ.
- a conta é criada automaticamente; no primeiro acesso você já entra.
- há dois caminhos: pela Área do Cliente ou pela tela de login do Dados PJ.
- pela tela do Dados PJ, o botão abre uma janelinha da Área do Cliente. se o navegador bloquear janelas, a página inteira vai para a Área do Cliente e volta sozinha.
- a sessão é conferida com a Área do Cliente a cada poucos minutos. se a licença for suspensa ou cancelada, o Dados PJ desconecta.
- a sessão dura até 7 dias sem uso contínuo; depois disso, entre de novo.

## passos
pela Área do Cliente:
1. no menu do negócio, clique em `Ferramentas`.
2. no cartão `Extrator da Receita Federal`, clique em `Acessar ferramenta`.

pela tela do Dados PJ:
1. abra o Dados PJ; na tela `Acessar plataforma`, clique em `Entrar com a Área do Cliente`.
2. na janelinha, entre com o e-mail e a senha da Área do Cliente (se ainda não estiver logado).
3. a janelinha fecha e você cai no `Dashboard`.

## resultado
você está no `Dashboard` do Dados PJ.

## se der errado
- mensagem na tela de login: `pj-erros-de-login`.
- acesso recusado por licença: `pj-licenca-suspensa-ou-sem-acesso`.
- esqueceu a senha: troque pela Área do Cliente, não pelo Dados PJ.
