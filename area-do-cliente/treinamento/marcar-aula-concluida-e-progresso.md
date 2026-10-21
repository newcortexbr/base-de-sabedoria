---
id: ac-treinamento-marcar-concluida-progresso
titulo: "marcar aula como concluída e ver meu progresso"
publico:
  - cliente
modulo: treinamento
aba: Treinamentos
tipo_problema:
  - marcar-aula-concluida
  - progresso
  - certificado
  - prova
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
registrar as aulas que você terminou e acompanhar quanto falta.

## pré-requisitos
- estar dentro de uma aula, em `Treinamentos`.

## passos
1. No fim da aula, onde está escrito `Quando terminar, marque esta aula como concluída.`, clique em `Marcar como concluída`.
2. Para desfazer, clique em `Desmarcar`.
3. Para ver o total, volte a `Treinamentos`: o quadro `Seu progresso` mostra a porcentagem e `<x> de <y> aulas concluídas`.

## resultado
a aula aparece como `Aula concluída` e a tela diz `Você concluiu esta aula.`. o progresso do módulo e o geral são atualizados. ao terminar tudo: `Parabéns, você concluiu todas as aulas!`.

## explicação
- marcar como concluída é opcional. serve só para você se organizar.
- não existe prova, quiz, certificado nem bloqueio: você pode assistir a qualquer aula em qualquer ordem, concluída ou não.
- o progresso é seu e vale para todas as cidades do mesmo produto.

## desvios
- enquanto salva, o botão mostra `Enviando…`. se não mudar, recarregue a página e tente de novo.

## quando pedir ajuda
se você marca e a marcação some depois de recarregar, abra um chamado em `Suporte`.

## fontes
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/treinamento/[moduleId]/[lessonId]/ClienteAula.tsx:92`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/treinamento/[moduleId]/[lessonId]/ClienteAula.tsx:101`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/treinamento/[moduleId]/[lessonId]/ClienteAula.tsx:105`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/treinamento/page.tsx:128`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/treinamento/page.tsx:153`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/treinamento/page.tsx:160`
- `area-clientes/src/ui/primitives/ActionForm.tsx:70`
- `area-clientes/docs/REQUIREMENTS.md:193`
- `area-clientes/docs/DECISIONS.md:765`

## lacunas
- o progresso ser compartilhado entre cidades do mesmo produto é dedução da regra "conteúdo por cliente + produto"; não testado em tela.
- não foi conferido se a ordem dos botões e frases muda no celular.
