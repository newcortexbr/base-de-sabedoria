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
videos:
  - oZf-HGbQC9c
---

## objetivo

tirar dúvidas na hora com o assistente de suporte (IA) e, se ele não resolver, abrir um chamado para a equipe sem sair da conversa.

## explicação

- O chat é um balão no canto da tela da Área do Cliente. A janela se chama `Suporte New Cortex` ("Tire suas dúvidas aqui") e começa com "Olá! Sou o suporte da Área do Cliente da New Cortex. Me conte o que você precisa fazer."
- Ele responde com base nos artigos de ajuda e nos dados da sua própria conta: seus produtos, negócios (cidades), situação da instalação, aulas, ferramentas e lives. Ele não vê dados de outros clientes nem de produtos que você não tem. Embaixo da resposta aparece "Baseado em:" com os artigos usados.
- Para algumas dúvidas ele mostra um passo a passo, um passo por vez ("Passo 1 de 3"). Em cada passo, clique em `Consegui` para ir ao próximo ou em `Não consegui` para explicar onde travou.
- No fim de uma resposta ele pode perguntar "Resolvi seu problema?" (ou "Conseguiu entender?"). Responda `Sim` ou `Não`.
- Você pode mandar um print da tela: clique no botão de anexar (`Anexar print da tela`), escolha a imagem (PNG, JPG ou WEBP) e envie, com ou sem texto.
- O chat fica num assunto por conversa. Para ver conversas antigas, clique em `Conversas`; para começar outra, clique em `Nova conversa`.
- Ele não faz por você: não paga, não reembolsa, não cancela, não desbloqueia conta, não muda e-mail nem dados protegidos. Nesses casos ele encaminha à equipe.
- Conta bloqueada também pode usar o chat, mas ele não terá dados de treinamento, ferramentas e lives.

## quando o chat abre um chamado

o chat abre um chamado sozinho, sem pedir confirmação, quando:

- você diz que quer falar com uma pessoa (por exemplo, "quero falar com um atendente");
- você responde `Não` ou `Não consegui` duas vezes no mesmo assunto;
- ele não encontra resposta para a sua dúvida.

Ele avisa "Vou abrir um chamado para a equipe da New Cortex resolver isso com você...". Se você tem mais de um produto, pergunta "Esse chamado é sobre qual produto?" e mostra só os seus produtos: clique no certo. Depois aparece o resumo do chamado e o botão `Ver chamado #N`.

A equipe responde no chamado, e a resposta também aparece na conversa do chat, com o nome "Equipe New Cortex". O chamado aparece normalmente em `Suporte`.

## passos

1. Clique no balão do chat no canto da tela.
2. Escreva a sua dúvida com as suas palavras e envie.
3. Se vier um passo a passo, faça cada passo e clique em `Consegui` ou `Não consegui`.
4. Se a resposta não resolver, responda `Não` e conte o que aconteceu, ou peça para falar com a equipe.

## resultado

você recebe a resposta na conversa ou um chamado aberto, com número, que aparece em `Suporte`.

## desvios

- "Esta conversa foi encerrada. Para continuar, comece uma nova conversa.": a conversa ficou parada (24 horas esperando você clicar num botão, ou 48 horas sem nenhuma mensagem). Clique em `Começar nova conversa`.
- "Este chamado foi encerrado pela equipe. Para continuar, abra um novo chamado.": o chamado ligado à conversa foi fechado. Clique em `Começar nova conversa` ou responda o chamado em `Suporte` (veja `ac-responder-chamado-fechado`).
- "Você mandou muitas perguntas em pouco tempo. Aguarde alguns minutos e tente de novo.": limite de mensagens (o padrão é 40 a cada 10 minutos). Espere um pouco.
- "Você abriu muitos chamados em pouco tempo. Aguarde alguns minutos ou responda um chamado existente na tela de Suporte.": o mesmo limite de chamados novos da tela `Suporte`.
- "Não consegui abrir o chamado agora. Pode tentar de novo daqui a pouco, ou abrir pela tela de Suporte.": abra pela tela `Suporte` (veja `ac-abrir-chamado`).
- "A imagem ficou grande demais. Tente um print menor." ou "Escolha uma imagem (um print da tela).": o print não serve; mande outro.
- Se você tem o mesmo produto em duas cidades, o chamado aberto pelo chat fica ligado a um dos negócios daquele produto. Diga na conversa de qual cidade é o problema.
- Não escreva senhas nem códigos no chat.

## quando pedir ajuda

se o balão do chat não aparecer ou não responder, abra o chamado direto em `Suporte` → `Abrir novo chamado` (veja `ac-abrir-chamado`).

## fontes

- `src/app/(cliente)/layout.tsx:30` — o balão só aparece quando o chat está configurado.
- `src/ui/suporte-ia/SuporteIA.tsx:559` — saudação; `:547` — botões `Consegui` / `Não consegui` e `Sim` / `Não`; `:704` — `Anexar print da tela`; `:745` — `Nova conversa`; `:772` — título `Suporte New Cortex`; `:799` — `Conversas`; `:598` — "Baseado em:"; `:577` — "Equipe New Cortex"; `:645` — avisos de conversa encerrada; `:356` — `Ver chamado #N`.
- `src/ui/suporte-ia/BarraDeSaida.tsx:21` — `Começar nova conversa`.
- `src/ui/suporte-ia/anexoDePrint.ts:8` — mensagens de print inválido; `SuporteIA.tsx:696` — PNG, JPG e WEBP.
- `src/domain/suporte/assistente/chat/fluxo.ts:45` — "Resolvi seu problema?", "Conseguiu entender?"; `:56` — encaminha depois de 2 respostas negativas.
- `src/domain/suporte/assistente/chat/texto.ts:88` — pedido de falar com pessoa encaminha.
- `src/domain/suporte/assistente/chat/chamado.ts:12` — textos do chamado; `:41` — chamado ligado ao primeiro negócio do produto escolhido, ou à conta se não houver produto.
- `src/app/(cliente)/api/suporte/ia/chamado/route.ts:91` — produto que não é do cliente é recusado; limite de chamados.
- `src/app/(cliente)/api/suporte/ia/conversar/route.ts:176` — aviso de limite de mensagens; `:183` — conversa congelada.
- `src/domain/suporte/assistente/chat/limite.ts:10` — 40 mensagens a cada 600 s (padrão).
- `src/domain/suporte/assistente/conversas-contrato.ts:59` — 24 h esperando botão encerra; 48 h parada congela.
- `src/app/(cliente)/api/suporte/ia/dossie/route.ts:6` — conta bloqueada recebe os dados sem conteúdo.

## lacunas

tela não validada no navegador; a posição exata do balão e o ícone não estão descritos. O código não define o `Assunto` que o chamado do chat recebe na lista de `Suporte`. O chat escreve "New Cortex" sem acento, enquanto o resto da Área do Cliente escreve "New Córtex".
