# qa-cliente — validação UI dos 3 artigos do cliente

Estado: EXECUTADO PARCIALMENTE (2026-10-15). Artigos seguem `rascunho-documental`: há passos não executados.
Base: portal-cidade HEAD 6884994332a79eb5e5543d5469392feefb8b7034 (conferido).
Ambiente: 3010/8010 de `interno/preparo-qa.md`.

## AC por artigo (cada um com fixture própria do cliente, sem tocar admin)
Artigos: editar-perfil-publico-da-empresa, gerenciar-vagas-da-empresa, gerenciar-anuncios-proprios.

Passos comuns, anotar esperado x obtido:
1. entrar com auth sintética; achar o menu citado no artigo (rótulo real).
2. caminho feliz: criar/editar item da fixture, salvar.
3. recarregar: dado persiste.
4. página pública do item mostra o que o artigo promete.
5. campo vazio/inválido: erro por campo em pt-BR, sem JSON cru.
6. desktop (1280) e móvel (390).
7. console e rede: sem erro/4xx/5xx inesperado.
Fora de escopo: exclusão, dinheiro, e-mail real, IA, rede externa.

## Cobertura final
Conta sintética `qa+cliente@qa.test` (Cliente, Contratante, Anunciante); token por `.qa-suporte/cliente/mint_cliente.py` (claims reais via `EmailTokenObtainPairSerializer.get_token`); `localStorage` `cliente_token`/`cliente_refresh`. Scripts `ex1`..`ex7.mjs` e capturas em `.qa-suporte/cliente/`.

| artigo | executado | não executado | status |
|---|---|---|---|
| editar-perfil-publico | 1,2,3,6 (salvar, recarregar, mobile) | 4 (ficha pública; sem empresa no Guia), 5 (sem erro visível), logo | parcial |
| gerenciar-vagas | 1-4,6, pausar/reativar | aprovação, excluir, limites | parcial |
| gerenciar-anuncios | 1-6 (1280 e 390) | pausar/vender, excluir, limites | parcial |

## Achados
- ambiente: frontend rodava com `NEXT_PUBLIC_API_URL` sem `/api` (tudo 404). Reiniciei o `next dev` na 3010 com `http://127.0.0.1:8010/api` (novo PID).
- produto (a confirmar): `Minha empresa` com e-mail/telefone inválidos não mostrou erro visível. Vagas e Classificados não estão no menu lateral sem contratação, só em cartões do `Início`.
- dados de teste criados: 1 vaga e 1 anúncio na base sintética.
- console/rede: nenhum 4xx/5xx de produto capturado após o ajuste de `/api`; captura ampla só nos scripts.
