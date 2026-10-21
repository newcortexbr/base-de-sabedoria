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
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
aqui você entende por que uma mudança pode demorar um pouco para aparecer no site e o que fazer.

## o que acontece

quando você salva no painel ou na sua área, o portal manda atualizar as páginas na mesma hora. Na maioria das vezes, basta recarregar a página.

se essa atualização falhar, cada página se atualiza sozinha depois de um tempo:

- página inicial: alguns segundos;
- notícias, eventos, vagas e listas do Guia: de 1 a 2 minutos;
- páginas de categoria e de empresa do Guia: até 1 hora.

## o que fazer

- Confira se apareceu a mensagem de que salvou. Se apareceu erro, a mudança não foi gravada.
- Recarregue a página do site (no computador, tecla F5; no celular, puxe a página para baixo).
- Se ainda estiver igual, espere o tempo da lista acima e recarregue de novo.
- Conteúdo que passa por aprovação ou pagamento só aparece depois de aprovado ou pago. Notícia com data de publicação no futuro só aparece nessa data.

## quando pedir ajuda

peça ajuda se passou mais de 1 hora, você recarregou a página e a mudança salva ainda não aparece.

## fontes

- `portal-cidade/frontend/src/app/painel/configuracoes/layout/actions.ts` — Server Action com `revalidatePath` após salvar cores, topo, rodapé e blocos.
- `portal-cidade/backend/portais/revalidate.py:68` (`invalidar_paths`) e `backend/comercial/revalidate.py:61` (`revalidar_secao`) — invalidação disparada pelo servidor; não levanta erro se falhar.
- tempos de cache: `app/page.tsx` (5 s), `app/noticias/*`, `app/eventos/*`, `app/vagasdeemprego/*`, `app/guia/page.tsx` (60–120 s), `app/guia/[slug]/page.tsx` e `app/guia/empresa/[cidade]/[slug]/page.tsx` (3600 s).
- `portal-cidade/backend/noticias/views.py:179-181` — só notícia publicada com data já passada aparece.

## lacunas

não medi em produção; os tempos são os declarados nas páginas. Outras páginas públicas têm tempos próprios (até 1 hora em termos e privacidade). Navegador ou rede da pessoa podem guardar imagem antiga (como o logo) por conta própria; isso não está no código do portal.
