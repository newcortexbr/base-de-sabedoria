# qa dos artigos de usuário (2026-10-15)

ambiente: frontend 3010 / backend 8010 (QA isolado), portal `grandevix`, chromium via Playwright. scripts e capturas em `.qa-suporte/usuario/`. dados sintéticos criados via shell Django: empresa "Padaria Sintética QA" (categoria Padaria QA) e anúncio "Sofá Sintético QA" (categoria Móveis QA, 1 foto, anunciante origem painel). o anúncio só aparece publicamente com foto e anunciante de origem painel.

## encontrar-empresa-no-guia — 3 de 5 passos executados
- passo 1 (abrir Guia Comercial): ok (`/guia`).
- passo 2 (campo `Buscar por nome, categoria ou item do cardápio…` + `Buscar`): ok, `/guia?q=padaria` mostrou 1 resultado.
- passo 3 (filtro de cidade): não executado, portal de cidade única.
- passo 4 (`Perto de mim`): botão existe; geolocalização não exercitada.
- passo 5 (abrir cartão): ok, `/guia/empresa/abadia-de-goias/padaria-qa`.
- divergência corrigida: `Limpar` é `Limpar ×`.
- validacao mantida `docs-e-codigo`.

## consultar-contato-de-empresa — 3 de 4 passos executados
- passos 1–3 ok (endereço, descrição, `Horário não informado`; `WhatsApp` abre wa.me, `Telefone` abre tel:).
- passo 4 (cardápio/serviços/delivery): não executado, empresa de teste sem esses recursos.
- correção: nomes dos botões e texto de horário ausente.
- validacao mantida `docs-e-codigo`.

## buscar-anuncios-classificados — 3 de 5 passos executados
- passo 1: campo `O que você procura?` ok; Enter não navega, só o botão `Buscar` (possível bug de produto, não corrigido).
- passo 2: select `Todas as categorias` ok (`categoria=qa-moveis`).
- passo 3: selects de condição, troca e ordenação presentes; não aplicados um a um.
- passo 4: na categoria há `Filtrar resultados`, `Mín.`/`Máx.`, `Aplicar filtros`; subcategoria inexistente nos dados de teste.
- passo 5: detalhe abre (`/classificados/abadia-de-goias/sofa-qa`); contato do anunciante não verificado.
- correções: Enter→`Buscar`, filtro de preço, `Limpar ×` / `Limpar filtros ×`.
- validacao mantida `docs-e-codigo`.

## limites
- primeira compilação de rota levou 35–90 s.
- nenhum artigo teve todos os passos executados, então nenhum passou a `executado-em-ui`.
