---
id: ac-mapa-das-paginas
titulo: "mapa de todas as páginas da Área do Cliente"
publico:
  - cliente
modulo: geral
aba: nao-se-aplica
tipo_problema:
  - onde fica
  - onde encontro
  - qual página
  - mapa do site
  - não acho
  - endereço da página
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

saber, em uma linha por página, o que existe em cada endereço da Área do Cliente e quando usar.

## explicação

páginas abertas (sem login):

- `/login` — `Entrar na sua conta`. Use para entrar com e-mail e senha.
- `/ativar` — `Criar sua senha`. Aberta pelo link do e-mail de boas-vindas, no primeiro acesso.
- `/reenviar-convite` — `Solicitar novo convite`. Use quando o link de ativação venceu ou não chegou.
- `/recuperar` — `Esqueci minha senha` / `Criar nova senha`. Use quando esqueceu a senha (o link do e-mail também abre aqui).
- `/comprar` — página de compra ("O portal da sua cidade, com exclusividade."). Para quem ainda não é cliente escolher a cidade e comprar.
- `/indisponivel` — aparece na compra quando a cidade já tem dono ("... já tem dono.").

páginas da sua conta (com login):

- `/inicio` — `Início`. Resumo do negócio escolhido: próximo passo da instalação, vídeo de boas-vindas, busca no treinamento, links do portal, próxima live e `Seus pagamentos`. Use como ponto de partida.
- `/negocios` — `Meus negócios`. Um cartão por negócio (produto + cidade) com situação do portal, domínio e pagamentos. Use para escolher o negócio ou ver todos.
- `/negocios/<negócio>` — `Visão geral` do negócio. Situação do portal, `Seu próximo passo`, treinamento e pagamentos daquele negócio.
- `/negocios/<negócio>/plataforma` — `Minha plataforma`. Instalação do portal: domínio, DNS e acesso ao portal pronto.
- `/negocios/<negócio>/treinamento` — `Treinamentos`. Módulos e aulas do produto, com o seu progresso.
- `/negocios/<negócio>/treinamento/<módulo>/<aula>` — uma aula, com `Sobre esta aula` e `Materiais da aula`.
- `/negocios/<negócio>/ferramentas` — `Ferramentas`. Ferramentas do produto.
- `/negocios/<negócio>/lives` — `Lives`. Transmissões ao vivo agendadas e encerradas.
- `/negocios/<negócio>/pagamentos` — `Pagamentos`. Reserva territorial, mensalidade e histórico de cobranças daquele negócio.
- `/treinamento` — atalho: com um negócio só, leva ao treinamento dele; com mais de um, leva a `Meus negócios` para você escolher.
- `/suporte` — `Suporte`. Lista dos seus chamados (`Acompanhamento`) e `Ajuda rápida`. Use para falar com a equipe.
- `/suporte/novo` — `Novo chamado`. Formulário para abrir um chamado.
- `/suporte/<chamado>` — um chamado: histórico, resposta e dados do chamado.
- `/minha-conta` — `Minha conta`. Dados cadastrais, telefone e troca de senha.

Conta bloqueada só abre `/suporte` (e as páginas de chamado) e `/minha-conta`.

## quando pedir ajuda

se uma página mostrar "Acesso não permitido." sem a sua conta estar bloqueada, ou se uma página da lista não abrir.

## fontes

- `src/domain/acesso/permissions.ts:199` — rotas do cliente e quem acessa.
- `src/app/(public)/login/page.tsx:42`, `src/app/(public)/ativar/page.tsx:39`, `src/app/(public)/reenviar-convite/page.tsx:33`, `src/app/(public)/recuperar/page.tsx:46` — páginas abertas.
- `src/app/(public)/comprar/ComprarPage.tsx:54`, `src/app/(public)/indisponivel/page.tsx:63` — compra e cidade indisponível.
- `src/app/(cliente)/negocios/[licenseId]/labels.ts:170` — itens do negócio: Visão geral, Minha plataforma, Treinamentos, Ferramentas, Lives, Pagamentos.
- `src/app/(cliente)/negocios/page.tsx:109`, `src/app/(cliente)/negocios/[licenseId]/page.tsx:70`, `src/app/(cliente)/inicio/page.tsx:257`–`:491` — conteúdo de Meus negócios, Visão geral e Início.
- `src/app/(cliente)/treinamento/redirect-target.ts:19` — atalho `/treinamento`.
- `src/app/(cliente)/suporte/page.tsx:106`, `src/app/(cliente)/suporte/novo/page.tsx:52`, `src/app/(cliente)/minha-conta/page.tsx:38` — Suporte, Novo chamado, Minha conta.

## lacunas

o detalhe de `Minha plataforma`, `Treinamentos`, `Ferramentas` e `Lives` está nos artigos dessas áreas (outra parte da base). Não existe página de "Materiais" separada: os materiais ficam dentro de cada aula. O endereço de cada negócio usa um código interno, não o nome da cidade.
