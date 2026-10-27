---
id: salvei-e-ainda-aparece-o-antigo
titulo: "salvei, mas o site ainda mostra o antigo"
publico:
  - cliente
  - admin
modulo: geral
categoria: conta
aba: nao-se-aplica
tipo_problema:
  - erro temporário
  - alterei e não mudou
  - salvei e não apareceu
  - logo antigo no site
  - cor não mudou
  - notícia não apareceu
  - evento não apareceu
  - categoria não aparece
tags:
  - cache
  - atualizacao
  - editar
  - erro
  - no ar
  - painel
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
---

## objetivo
aqui você entende por que uma mudança pode demorar um pouco para aparecer no site e o que fazer.

## explicação

quando você salva no painel ou na sua área, o portal manda atualizar as páginas na mesma hora. Na maioria das vezes, basta recarregar a página.

se essa atualização falhar, cada página se atualiza sozinha depois de um tempo:

- página inicial: alguns segundos;
- notícias, eventos, vagas e listas do Guia: de 1 a 2 minutos;
- páginas de categoria e de empresa do Guia: até 1 hora.

## passos

1. Confira se apareceu a mensagem de que salvou (por exemplo `Dados atualizados em todas as suas seções.` ou `Salvo.`). Se apareceu erro, a mudança não foi gravada. [guia=fora]
2. Recarregue a página do site (no computador, tecla F5; no celular, puxe a página para baixo). [guia=fora]
3. Se ainda estiver igual, espere o tempo da lista acima e recarregue de novo. [guia=fora]
4. Se for conteúdo que passa por aprovação ou pagamento, confira se já foi aprovado ou pago: ele só aparece depois. Notícia com data de publicação no futuro só aparece nessa data. [guia=fora]

## resultado

a mudança aparece no site depois de recarregar ou de esperar o tempo da página.

## quando pedir ajuda

peça ajuda se passou mais de 1 hora, você recarregou a página e a mudança salva ainda não aparece.

## fontes

- `frontend/src/app/painel/configuracoes/layout/actions.ts` — Server Action com `revalidatePath` após salvar cores, topo, rodapé e blocos.
- `backend/portais/revalidate.py:68` (`invalidar_paths`) e `backend/comercial/revalidate.py:61` (`revalidar_secao`) — invalidação disparada pelo servidor; não levanta erro se falhar.
- tempos de cache: `app/page.tsx` (5 s), `app/noticias/*`, `app/eventos/*`, `app/vagasdeemprego/*`, `app/guia/page.tsx` (60–120 s), `app/guia/[slug]/page.tsx` e `app/guia/empresa/[cidade]/[slug]/page.tsx` (3600 s).
- `backend/noticias/views.py:179-181` — só notícia publicada com data já passada aparece.
- `frontend/src/app/minha-conta/minha-empresa/page.tsx:241` e `frontend/src/app/minha-conta/cupons/page.tsx:361` — mensagens de salvo.

## lacunas

não medi em produção; os tempos são os declarados nas páginas (não reconferidos nesta rodada). Outras páginas públicas têm tempos próprios (até 1 hora em termos e privacidade). Navegador ou rede da pessoa podem guardar imagem antiga (como o logo) por conta própria; isso não está no código do portal.
