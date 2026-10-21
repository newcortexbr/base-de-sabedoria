---
id: ac-lives-entrar
titulo: "entrar na live na hora marcada"
publico:
  - cliente
modulo: lives
aba: Lives
tipo_problema:
  - entrar-na-live
  - link-da-live
  - assistir-ao-vivo
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
assistir a uma live ao vivo.

## pré-requisitos
- ter um negócio com licença ativa.

## passos
1. No menu do negócio, clique em `Lives` (`/negocios/<negócio>/lives`).
2. No cartão da live, clique em `Acessar live`. Durante a transmissão, o destaque mostra `Ao vivo agora` e o botão vira `Assistir agora`.
3. A live abre no YouTube em uma nova aba.

## resultado
você assiste à live no YouTube. as lives são `Treinamento ao vivo no YouTube`.

## desvios
- `Link disponível em breve`: o link da live ainda não foi publicado. volte mais perto do horário.
- `Cancelada: esta live não vai acontecer.`: a live foi cancelada.
- `Esta live foi encerrada e a gravação não está disponível.`: a live já passou e não tem gravação.
- se o YouTube não abrir, confira se o navegador bloqueou a nova aba.

## quando pedir ajuda
se na hora marcada o botão não aparecer, abra um chamado em `Suporte`.

## fontes
- `src/app/(cliente)/negocios/[licenseId]/lives/LivesCliente.tsx:116`
- `src/app/(cliente)/negocios/[licenseId]/lives/LivesCliente.tsx:118`
- `src/app/(cliente)/negocios/[licenseId]/lives/LivesCliente.tsx:126`
- `src/app/(cliente)/negocios/[licenseId]/lives/LivesCliente.tsx:130`
- `src/app/(cliente)/negocios/[licenseId]/lives/LivesCliente.tsx:133`
- `src/app/(cliente)/negocios/[licenseId]/lives/LivesCliente.tsx:157`
- `src/app/(cliente)/negocios/[licenseId]/lives/LivesCliente.tsx:164`
- `src/domain/lives/agenda.ts:43`
- `src/domain/lives/agenda.ts:48`

## lacunas
não foi conferido se o chat ou as perguntas da live ficam no YouTube (provável, mas não está no código da área do cliente).
