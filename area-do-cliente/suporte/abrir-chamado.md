---
id: ac-abrir-chamado
titulo: "abrir um chamado com a equipe de suporte"
publico:
  - cliente
modulo: suporte
aba: Suporte
tipo_problema:
  - abrir chamado
  - abrir ticket
  - falar com o suporte
  - pedir ajuda
  - novo chamado
  - reclamação
  - falar com atendente
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

mandar um pedido de ajuda por escrito para a equipe da New Córtex e acompanhar a resposta.

## pré-requisitos

- Estar logado (conta ativa ou bloqueada).

## passos

1. No menu da esquerda, clique em `Suporte` (`/suporte`). Também dá para usar `Acessar suporte`, no rodapé do menu. [guia=menu:/suporte]
2. Clique em `Abrir novo chamado`. Abre `Novo chamado` (`/suporte/novo`). [guia=suporte.novo-chamado]
3. Em `Negócio vinculado`, escolha o negócio (produto e cidade) sobre o qual é o pedido. Se não for sobre um negócio, escolha `Nenhum: é sobre minha conta` ou `Nenhum: outro assunto`. [guia=chamado-novo.negocio]
4. Em `Assunto`, escolha o tema: `Instalação e domínio`, `Portal e conteúdo`, `Ferramentas`, `Treinamentos`, `Pagamentos`, `Minha conta` ou `Outro assunto`. [guia=chamado-novo.assunto]
5. Em `Título`, resuma a dúvida em uma frase. [guia=chamado-novo.titulo]
6. Em `Mensagem`, conte o que você tentou fazer, o que esperava e o que apareceu na tela. [guia=chamado-novo.mensagem]
7. Se quiser mandar print ou documento, clique em `Anexar arquivo` (veja `ac-anexar-arquivo-no-chamado`). [guia=chamado-novo.anexar]
8. Clique em `Enviar chamado`. [guia=chamado-novo.enviar]

## resultado

aparece "Chamado #N aberto e enviado para a equipe." com o link `Ver o chamado`. O chamado entra na lista `Acompanhamento` da tela `Suporte`. Quando a equipe responder, você recebe um e-mail "Resposta ao seu chamado ..." com a resposta.

## desvios

- O seletor `Negócio vinculado` mostra só os negócios da sua conta. Se você tem mais de um, a tela avisa "Você tem mais de um negócio: confira se este é o certo."
- "Escolha o negócio e o assunto e preencha título e mensagem para abrir o chamado.": falta preencher algo. Os quatro campos são obrigatórios.
- "Esta licença não pertence a você. Escolha novamente.": o negócio escolhido não é da sua conta; escolha de novo na lista.
- "Você abriu muitos chamados em pouco tempo. Aguarde alguns minutos ou responda um chamado existente.": limite de chamados novos (padrão de 5 a cada 10 minutos). Use um chamado já aberto.
- A mensagem tem limite de 10.000 caracteres e o título de 200.
- Não envie senhas, códigos de acesso ou chaves na mensagem nem nos anexos.
- Atalho: a tela `Suporte` mostra `Ajuda rápida` com links para `Instalação e domínio`, `Treinamentos e ferramentas` e `Pagamentos e acesso` do negócio, que podem resolver antes de abrir chamado.
- Outro caminho: o chat de suporte com IA também pode abrir o chamado para você (veja `ac-chat-de-suporte-com-ia`).

## quando pedir ajuda

este artigo é o caminho para pedir ajuda. Se nem o chamado abre, tente mais tarde ou fale com quem atendeu você na contratação.

## fontes

- `src/app/(cliente)/suporte/page.tsx:106` — tela "Suporte", botão `Abrir novo chamado`; `:73` — atalhos da `Ajuda rápida`.
- `src/ui/shells/ClientShell.tsx:239` — item `Suporte` no menu; `:258` — `Acessar suporte`.
- `src/app/(cliente)/suporte/novo/page.tsx:52` — "Novo chamado" e "Negócio, assunto, título e mensagem são obrigatórios.".
- `src/app/(cliente)/suporte/novo/NovoTicketForm.tsx:148`–`:272` — campos, opções, aviso de senha, mensagem de sucesso e `Enviar chamado`.
- `src/ui/status/businessLabels.ts:412` — nomes dos assuntos.
- `src/app/(cliente)/suporte/deps.ts:199` — lista só os negócios da conta.
- `src/app/(cliente)/suporte/novo/actions.ts:70`, `:92`, `:98`, `:108` — mensagens de erro.
- `src/app/(cliente)/suporte/rate-limit.ts:25` — limite de chamados (5 em 600 s, configurável).
- `src/domain/suporte/types.ts:29` — limite da mensagem; `src/domain/suporte/ticket-service.ts:74` — e-mail de resposta sai sempre.

## lacunas

não há prazo de resposta (SLA) para o cliente no código nem nas docs; o chat não deve prometer prazo. Tela não validada no navegador.
