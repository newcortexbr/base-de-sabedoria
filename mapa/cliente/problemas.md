# possíveis problemas do lado cliente

consolidado das fichas em `telas/` e de [problemas de planos](problemas-planos.md). leitura de código apenas.

## planos e pagamento
- fato: plano novo nasce com `preco=0` e `ativo=False`; preço zero não se compra. portal recém-criado pode não ter nada à venda.
- fato: cancelar só corta no fim do período.
- hipótese: servidor compara preço bruto sem normalizar período (`views_contratacao.py:375`).
- hipótese: pagamento único ativo fica fora da lógica de troca e pode perder créditos (`views_contratacao.py:345`, `faturas.py:197`).

## telas
- matéria patrocinada: após pagar não há editor nem acompanhamento; só WhatsApp (`materia-patrocinada/page.tsx:184,207-211`).
- guia: "Publicar" pode deixar o cadastro "em análise"; quem acabou de pagar vê só "aguardando" (`guia/page.tsx:1610-1623,1646`).
- notícias do jornalista: ícones de publicar/despublicar sem texto; campos técnicos (SEO, endereço da página); trocar o título muda a URL sem aviso (`noticias/page.tsx:250-254`, `NoticiaFormBase.tsx:363-367`).
- cupons: não deixa claro que sem código o cupom não aparece no site.
- orçamentos não recarrega sozinho; delivery abre filtrado em "Hoje".
- exclusões e conclusões usam `confirm()` do navegador.

## suporte (observado no protótipo, 2026-10-15)
- a base do cliente não tem artigos sobre notícias, matéria patrocinada, eventos, publicidade, guia e planos; "como faço notícia" ficou sem resposta.
- o chat mostra "Resolveu / Ainda preciso de ajuda" mesmo em resposta que não ajudou (ex.: após xingamento).
