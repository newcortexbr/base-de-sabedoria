---
id: ac-treinamento-video-nao-carrega
titulo: "o vídeo da aula não carrega"
publico:
  - cliente
modulo: treinamento
aba: Treinamentos
tipo_problema:
  - video-nao-carrega
  - video-nao-abre
  - aula-sem-video
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
resolver quando o vídeo de uma aula não aparece ou não toca.

## pré-requisitos
- estar dentro de uma aula, em `Treinamentos`.

## passos
1. No quadro `Vídeo da aula`, clique na imagem (`Clique para assistir`). O vídeo só começa a carregar depois do clique.
2. Se aparecer o botão `Abrir no YouTube`, clique nele para assistir direto no YouTube.
3. Se não tocar, recarregue a página.
4. Teste em outro navegador ou aparelho e confira a sua internet.
5. Se você usa bloqueador de anúncios ou rede de empresa, tente sem eles: os vídeos vêm do YouTube.

## resultado
o vídeo toca na página ou no YouTube.

## explicação
- os vídeos das aulas ficam no YouTube (normalmente como "não listado").
- se a aula mostrar `Esta aula não tem vídeo cadastrado.`, ela é só de texto ou o vídeo ainda não foi colocado. não é defeito do seu aparelho.

## desvios
- se o YouTube disser que o vídeo é privado ou indisponível, o problema é no cadastro do vídeo; só a equipe corrige.

## quando pedir ajuda
se o vídeo não abre nem pelo `Abrir no YouTube`, abra um chamado em `Suporte` com o nome do módulo e da aula.

## fontes
- `src/app/(cliente)/negocios/[licenseId]/treinamento/[moduleId]/[lessonId]/ClienteAula.tsx:18`
- `src/app/(cliente)/negocios/[licenseId]/treinamento/[moduleId]/[lessonId]/ClienteAula.tsx:41`
- `src/app/(cliente)/negocios/[licenseId]/treinamento/[moduleId]/[lessonId]/ClienteAula.tsx:44`
- `src/app/(cliente)/negocios/[licenseId]/treinamento/[moduleId]/[lessonId]/ClienteAula.tsx:61`
- `src/domain/conteudo/urls.ts:22`
- `docs/PRODUCT.md:82`

## lacunas
não testado em tela; a lista de navegadores suportados não está documentada.
