---
id: ac-treinamento-start
titulo: "o que é o Start e o "Comece aqui""
publico:
  - cliente
modulo: treinamento
aba: Treinamentos
tipo_problema:
  - start
  - comece-aqui
  - primeiro-modulo
  - tour
  - por-onde-comecar
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
saber qual é o primeiro conteúdo a assistir e onde ele fica.

## pré-requisitos
- ter um negócio com acesso ao treinamento.

## explicação
- o Start é o módulo de entrada do treinamento. No `Início`, ele aparece no quadro `Comece por aqui · Start` ("Uma visita guiada ao seu painel."), com o número de aulas ("N aulas no Start").
- em `Treinamentos`, o primeiro módulo da lista leva o selo `Comece aqui` até você concluir todas as aulas dele.
- é uma sugestão de começo, não uma obrigação: você pode abrir qualquer módulo em qualquer ordem.

## passos
1. No menu da esquerda, clique em `Início`. [guia=menu:/inicio]
2. No quadro `Comece por aqui · Start`, clique em `Assistir ao tour` para ver o vídeo de apresentação. [guia=inicio.assistir-tour]
3. Clique em `Ver todas as aulas do Start` para abrir as aulas. [guia=inicio.aulas-start]
4. Ao terminar cada aula, se quiser, clique em `Marcar como concluída` (veja `ac-treinamento-marcar-concluida-progresso`). [guia=aula.marcar-concluida]

## resultado
você conhece a Área do Cliente e começa o treinamento pelo módulo sugerido.

## desvios
- "Tour em vídeo ainda não disponível": o vídeo do tour ainda não foi publicado. Use `Ver todas as aulas do Start`.
- "As aulas do Start ainda não foram publicadas.": o módulo ainda não tem aulas.
- "O acesso às aulas está suspenso por pendência de pagamento.": veja `ac-treinamento-bloqueado`.

## quando pedir ajuda
se o Start não abrir com o negócio sem pendência, abra um chamado em `Suporte`.

## fontes
- `src/app/(cliente)/inicio/page.tsx:144` — o Start é o módulo número 0 ou, sem ele, o primeiro; `:313`–`:346` — quadro, `Assistir ao tour`, `Ver todas as aulas do Start` e mensagens.
- `src/app/(cliente)/negocios/[licenseId]/treinamento/page.tsx:85` — o primeiro módulo da lista é o `start`.
- `src/app/(cliente)/negocios/[licenseId]/treinamento/CarrosselModulos.tsx:162` — selo `Comece aqui` enquanto o módulo não está concluído.

## lacunas
o `Início` escolhe o Start pelo número 0 do módulo e `Treinamentos` pelo primeiro da lista; se a equipe ordenar os módulos de outro jeito, os dois podem apontar para módulos diferentes.
