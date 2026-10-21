---
id: ac-navegar-pelo-menu
titulo: "como navegar: menu, troca de negócio e áreas de cada negócio"
publico:
  - cliente
modulo: geral
aba: nao-se-aplica
tipo_problema:
  - menu
  - navegar
  - trocar de negócio
  - trocar de cidade
  - onde fica o treinamento
  - onde ficam as ferramentas
  - menu sumiu no celular
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

entender o menu da esquerda e como chegar às áreas de cada negócio.

## explicação

o menu da esquerda ("Seu espaço") tem, de cima para baixo:

1. `Início` — resumo do negócio escolhido.
2. `Meus negócios` — todos os seus negócios.
3. As áreas do negócio escolhido: `Visão geral`, `Minha plataforma`, `Treinamentos`, `Ferramentas`, `Lives`.
4. `Suporte` — chamados com a equipe.
5. `Pagamentos` — cobranças do negócio escolhido.

No rodapé do menu ficam: o quadro "Conte com a gente." com `Acessar suporte`, o seu nome (que abre `Minha conta`) e `Sair`.

Cada negócio é um produto numa cidade. Treinamentos, Ferramentas e Lives aparecem dentro de cada negócio, mas o conteúdo é do produto: se você tem o mesmo produto em duas cidades, o treinamento é o mesmo nas duas (e o seu progresso também). Já instalação, domínio e pagamentos são separados por cidade.

## passos

1. Para trocar de negócio, use o seletor no topo da página ou clique em `Meus negócios` e escolha o cartão.
2. O menu passa a mostrar as áreas do negócio escolhido.
3. No celular, o menu fica escondido: toque no botão de três linhas (`Abrir menu`) no topo. Para fechar, toque em `Fechar menu` ou fora do menu.
4. A trilha no topo da página (por exemplo, "Meus negócios > Produto · Cidade/UF > Pagamentos") mostra onde você está; clique nos itens para voltar.

## desvios

- Conta bloqueada vê só `Suporte` e `Minha Conta`.
- O ícone de sino no topo (`Notificações`) leva para `Meus negócios`; não há uma central de notificações.
- Se você ainda não tem negócio, o `Início` diz "Você ainda não tem nenhum negócio ativo. Se esperava ver algo aqui, fale com o suporte."

## fontes

- `src/ui/shells/ClientShell.tsx:216`–`:274` — ordem do menu, rodapé e `Sair`; `:155` — negócio do menu; `:167` — trilha; `:284` — `Abrir menu`.
- `src/ui/nav/clientMenu.ts:21` — itens principais e menu da conta bloqueada.
- `src/app/(cliente)/negocios/[licenseId]/labels.ts:170` — áreas de cada negócio.
- `src/app/(cliente)/inicio/page.tsx:111` — sino `Notificações` aponta para `/negocios`; `:127` — sem negócio.
- `docs/DECISIONS.md` DEC-97 — navegação em árvore; conteúdo por produto, não por cidade.

## lacunas

o sino `Notificações` não abre notificações (só leva a `Meus negócios`), o que pode confundir. O seletor de negócio no topo não teve o rótulo exato conferido.
