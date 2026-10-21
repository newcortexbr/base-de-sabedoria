---
id: ac-o-que-e-a-area-do-cliente
titulo: "o que é a Área do Cliente New Córtex"
publico:
  - cliente
modulo: geral
aba: nao-se-aplica
tipo_problema:
  - o que é
  - para que serve
  - central de negócios
  - área de membros
  - primeiro acesso
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

entender para que serve a Área do Cliente e o que você encontra nela.

## explicação

a Área do Cliente (na tela de login ela aparece como "Central de Negócios") é o lugar onde quem comprou um negócio da New Córtex coloca esse negócio para funcionar e acompanha tudo dele. Como diz a tela de entrada: "Suas licenças por território, a instalação da plataforma, o treinamento do produto e o suporte — no mesmo lugar."

Com um único login você:

- vê todos os seus negócios (cada produto em cada cidade) em `Meus negócios`;
- instala o seu portal em `Minha plataforma` (domínio, DNS e publicação);
- estuda o treinamento do produto em `Treinamentos`, assiste às `Lives` e usa as `Ferramentas`;
- acompanha a reserva territorial e a mensalidade em `Pagamentos`;
- fala com a equipe em `Suporte`;
- cuida dos seus dados e da senha em `Minha conta`.

A conta é criada pela New Córtex depois da contratação: não há cadastro aberto. O primeiro acesso é pelo e-mail de boas-vindas (veja `ac-ativar-conta-pelo-convite`).

O caminho natural é: instalar o portal → aprender pelo treinamento → operar e vender → pedir suporte quando precisar.

## fontes

- `src/app/(public)/login/page.tsx:28` — "Central de Negócios" e a frase de apresentação; texto "Não há cadastro aberto.".
- `docs/PRODUCT.md:14` — a Área do Cliente é a Central dos Negócios do Cliente; implantar → operar → vender → escalar → receber suporte.
- `src/app/(cliente)/negocios/[licenseId]/labels.ts:170` — áreas de cada negócio.
- `src/ui/nav/clientMenu.ts:21` — itens principais do menu.

## lacunas

a mesma área aparece com nomes diferentes nas telas: "Central de Negócios" (login), "Área do Cliente" (e-mails) e "Área de Membros" (Minha conta e vídeo do Início). O cliente pode achar que são coisas diferentes.
