---
id: ac-chat-de-suporte-com-ia
titulo: "usar o chat de suporte com IA"
publico:
  - cliente
modulo: suporte
aba: Suporte
tipo_problema:
  - chat
  - assistente
  - robô
  - IA
  - tirar dúvida rápida
  - conversa
  - falar com humano
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

tirar dúvidas na hora com o assistente de suporte (IA) e, se ele não resolver, abrir um chamado para a equipe sem sair da conversa.

## explicação

- O chat é um balão no canto da tela da Área do Cliente. Ele responde com base nos artigos de ajuda e nos dados da sua própria conta: seus produtos, negócios (cidades), situação da instalação, aulas, ferramentas e lives. Ele não vê dados de outros clientes nem de produtos que você não tem.
- Quando ele não consegue resolver, pode abrir um chamado com a equipe. Ele pergunta sobre qual produto é o problema, mostrando só os produtos da sua conta. O chamado aberto fica ligado à conversa: as respostas da equipe e o encerramento aparecem nela, e o chamado também aparece normalmente em `Suporte`.
- A conversa "congela" depois de 48 horas parada ou quando a equipe fecha o chamado ligado a ela. Para uma dúvida nova, comece outra conversa.
- O chat tem limite de mensagens em sequência. Se aparecer aviso de limite, espere um pouco.
- O chat não faz por você: não paga, não reembolsa, não cancela, não desbloqueia conta, não muda e-mail nem dados protegidos. Para isso ele encaminha à equipe.
- Conta bloqueada também pode usar o chat, mas ele não terá dados de conteúdo.

## passos

1. Clique no balão do chat no canto da tela.
2. Escreva a sua dúvida com as suas palavras.
3. Se a resposta não resolver, peça para falar com a equipe e confirme a abertura do chamado.

## resultado

você recebe a resposta na conversa ou um chamado aberto, com número, que aparece em `Suporte`.

## quando pedir ajuda

se o chat não abrir, abra o chamado direto em `Suporte` → `Abrir novo chamado` (veja `ac-abrir-chamado`).

## fontes

- `src/domain/suporte/assistente/contrato.ts:1` — o assistente só vê o que é do cliente.
- `src/app/(cliente)/api/suporte/ia/conversar/route.ts:1` — resposta com base nos artigos e no dossiê; conversa congelada após 48 h ou chamado encerrado; limite de mensagens.
- `src/app/(cliente)/api/suporte/ia/chamado/route.ts:1` — chamado aberto pelo chat, com escolha de produto restrita aos do cliente; vínculo com a conversa.
- `src/app/(cliente)/api/suporte/ia/dossie/route.ts:1` — conta bloqueada recebe o dossiê sem conteúdo.

## lacunas

a parte visual do chat (balão, botões e textos) não existe ainda no código lido (branch `feat/suporte-ia-chat`, em construção e sem commit); os passos acima são genéricos e precisam ser trocados pelos rótulos reais quando a tela existir. Também não foi confirmado o texto exato do aviso de limite nem quantas mensagens são permitidas.
