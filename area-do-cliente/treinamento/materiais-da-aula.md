---
id: ac-treinamento-materiais-da-aula
titulo: "baixar os materiais e abrir os links de uma aula"
publico:
  - cliente
modulo: treinamento
aba: Treinamentos
tipo_problema:
  - baixar-material
  - anexo-da-aula
  - links-da-aula
  - pdf-da-aula
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
encontrar e baixar os arquivos de apoio de uma aula.

## pré-requisitos
- estar dentro de uma aula, em `Treinamentos`.

## passos
1. Abra a aula. [guia=fora]
2. Role até a seção `Materiais da aula`. [guia=fora]
3. Clique no ícone de baixar ao lado do arquivo. Ele abre em uma nova aba. [guia=fora]
4. Se a aula tiver a parte `Links para acessar`, clique no link desejado. [guia=fora]

## resultado
o arquivo abre ou é baixado no seu aparelho.

## explicação
- nem toda aula tem materiais. se não houver, a seção `Materiais da aula` não aparece.
- os materiais ficam dentro de cada aula. não existe uma área separada de "materiais" no menu.

## desvios
- o link de download de arquivo enviado pela equipe pode ter validade curta por segurança. se der erro, recarregue a página da aula e clique de novo.

## quando pedir ajuda
se o arquivo não abrir mesmo depois de recarregar a página, abra um chamado em `Suporte` com o nome da aula e do arquivo.

## fontes
- `src/app/(cliente)/negocios/[licenseId]/treinamento/[moduleId]/[lessonId]/page.tsx:124`
- `src/app/(cliente)/negocios/[licenseId]/treinamento/[moduleId]/[lessonId]/page.tsx:140`
- `src/app/(cliente)/negocios/[licenseId]/treinamento/[moduleId]/[lessonId]/page.tsx:142`
- `docs/DECISIONS.md:419`

## lacunas
- a validade do link de arquivo (URL assinada) é configurável; o valor não foi conferido.
- o tamanho máximo e os tipos de arquivo aceitos são da equipe, não do cliente.
