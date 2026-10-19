# possíveis problemas do painel admin

consolidado das fichas em `telas/`. leitura de código apenas; nada executado. detalhes e linhas em cada ficha.

## fatos
- erro vira "lista vazia": `guia/empresas`, `guia/categorias`, `guia/subcategorias` carregam só com `try/finally` (`empresas/page.tsx:60-76`, `categorias:269`, `subcategorias:126`); `delivery/pedidos` engole erro (`:83`). falha de API aparece como "nenhum item".
- erro vira "sem acesso": cardápio, catálogo, equipe, quartos e serviços da empresa (`cardapio:553`, `catalogo:384`, `equipe:202`, `quartos:558`, `servicos:388`).
- erro vira "não encontrada": `noticias/[id]/editar:15`, `fontes-rss/[id]/editar`.
- `delivery/configuracoes/page.tsx:155`: falha ao carregar mostra o padrão (`ativo: false`) editável; salvar sobrescreve a configuração real.
- `delivery/pedidos/page.tsx:97-136`: impressão monta HTML com dados do cliente sem escape via `document.write` (risco de XSS).
- `delivery/cardapio`: carregar e ações sem tratamento de erro; sem `?empresa=` não avisa nada.
- `configuracoes/page.tsx:99,219-285`: nome, logo e favicon salvam sem `revalidarSite()`; nas telas de layout falha de revalidação só vai ao console e a tela mostra "Salvo!".
- `layout/actions.ts:17-26`: `revalidarLayout` só confere que `/auth/me/` responde, sem checar papel nem timeout.
- `vagas/[id]/insights:40`: 403 diz "Esta vaga é de outro empregador", sem sentido para admin.
- `turismo/pontos/[id]:173` volta à lista sem mensagem quando não carrega.
- vários `alert()`/`confirm()` do navegador para erros e exclusões.

## hipóteses (dependem do backend)
- `clientes/[id]/page.tsx:904`: confirmar pagamento de contratação pendente sem `idempotency_key`; se não convergir em `confirmar_fatura`, pode haver divergência financeira. prioridade alta para checar.
- impacto real do cache desatualizado após salvar configurações.

## para o público leigo
- mensagens de erro enganosas (lista vazia, sem acesso) fazem o admin achar que perdeu dados.
- comportamentos diferentes entre painel e cliente (encerrado x pausado) confundem quem atende cliente.
