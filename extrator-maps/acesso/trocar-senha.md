---
id: ext-trocar-senha
titulo: "trocar a senha no Extrator Maps (e a faixa de senha temporária)"
publico:
  - cliente
modulo: acesso
aba: Conta
tipo_problema:
  - trocar-senha
  - senha-temporaria
  - extrator-maps
status: rascunho-documental
revisado_em: 2026-10-21
validacao: codigo
videos: []
---

## objetivo
trocar a senha do Extrator, ou entender por que a troca não está disponível.

## pré-requisitos
- estar logado no Extrator.

## explicação
- vale para contas com senha própria do Extrator. conta vinculada à Área do Cliente mostra `Sua senha é gerida na Área do Cliente. Troque por lá.` (veja `ac-trocar-senha-logado`).
- enquanto a senha for temporária, todas as telas mostram a faixa `Você ainda está usando a senha temporária. Trocar senha`. ela não bloqueia nada.
- a nova senha precisa ter pelo menos 12 caracteres. limite de 10 trocas em 15 minutos.

## passos
1. no menu lateral, no bloco do seu perfil, clique em `Trocar senha`.
2. preencha `Senha atual` e `Nova senha`.
3. clique em `Trocar senha`.

## resultado
aparece `Senha alterada. As sessões abertas em outros navegadores foram encerradas; esta continua ativa.`

## se der errado
- `Não foi possível trocar a senha. Confira os dados e tente novamente.`: senha atual errada ou nova fora da regra.
- `Não foi possível conectar. Tente novamente.`: erro de rede.
