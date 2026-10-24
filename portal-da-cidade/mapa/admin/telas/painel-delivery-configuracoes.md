# /painel/delivery/configuracoes

Arquivo: `app/painel/delivery/configuracoes/page.tsx`

## como chegar
- não há item no menu. Na parte Conteúdo do menu, abra `Guia Comercial`, clique em `Listar Empresas` e depois em `Editar` na empresa. Na ficha dela, clique no cartão `Configurações do delivery` (só aparece em empresa de categoria com delivery; a ficha é salva antes de abrir).

## o que você vê
Tela `Configurações de Delivery`. Ajustes do delivery de uma empresa: se está ligado, quanto custa a entrega, prazos, formas de pagamento e onde entrega.
- bloco `Status`: chave `Delivery ativo (página pública visível)` liga ou desliga a página de pedidos da empresa no site.
- bloco `Entrega`: `Taxa de entrega (R$)` (use 0 para entrega grátis), `Pedido mínimo (R$)`, `Tempo mínimo (min)`, `Tempo máximo (min)` (prazo mostrado ao cliente) e `Raio de entrega (km)` (apenas informativo por enquanto).
- bloco `Formas de Pagamento`: chaves `Dinheiro (troco na entrega)`, `Cartão na entrega` e `PIX`; com PIX ligado, aparece o campo `Chave PIX`.
- bloco `Áreas de Atendimento`: o cliente só vê no pedido as cidades listadas. Cada área mostra `Município todo` ou `Parcial — N bairros`, com `Editar` e `Excluir`. Para criar: `+ Adicionar cidade` com `Cidade`, `Cobertura` (`Município todo` ou `Bairros específicos`), `Bairros atendidos` e o botão `Adicionar área`. Se não houver cidade liberada, aparece "Fale com o portal".
- bloco `Mensagem de Boas-Vindas`: texto no topo da página de pedidos.
- botão `Salvar configurações` no fim da página (as áreas têm botões próprios).
- sem empresa escolhida, a tela avisa que nenhuma foi selecionada.

## rota e gate
- `/painel/delivery/configuracoes?empresa=<id>`. client, `Header`, `VoltarParaAEmpresa`. gate `PainelGuard`; módulo `guia` (`lib/painel-menu.ts:95`). acesso pelo editor da empresa (`EmpresaEditor.tsx:944`).
- sem `?empresa=`: "Nenhuma empresa selecionada. Acesse esta página pelo botão na edição da empresa." (`:221-222`).

## o que faz
- configura o delivery de uma empresa (ligado/desligado, taxas, tempos, pagamentos, mensagem) e as áreas de atendimento.

## ações e campos
- delivery ativo (liga a página pública).
- taxa de entrega, pedido mínimo, tempo mínimo e máximo, raio em km ("apenas informativo por enquanto", `:287`).
- pagamento: dinheiro, cartão, PIX (+ chave PIX quando ligado).
- mensagem de boas-vindas (`:483`).
- áreas: criar, editar e excluir; cidade por `SelectComBusca` (cidades do portal), cobertura "município todo" ou "bairros específicos", bairros escolhidos do catálogo (`BairroTagInput`, `:64-128`).
- salvar chama `revalidarGuia` para atualizar o botão da ficha pública (`:204`).

## apis
- `delivery.config.get/salvar` (`admin-api.ts:2040-2042`; o salvar usa PATCH).
- `delivery.areas.listar/criar/atualizar/excluir/cidadesPortal` (`:2045-2051`).
- `adminApi.territorio.bairros(cidade)` para o catálogo de bairros.
- Server Action `revalidarGuia` (`app/painel/guia/actions`).

## estados
- carregando; erro ao salvar config: `avisos.avisar(formatApiError(...))` (`:211`); erros de área: idem; sucesso: aviso "Configurações salvas", "Área cadastrada", "Área salva", "Área excluída"; aviso âmbar quando a cidade não tem bairros cadastrados (`:121-125`).
- erro ao carregar áreas e cidades: aviso do painel (`avisos.avisar`, `:158`, `:160`).

## possíveis problemas
- fato: se `config.get` falhar, o formulário vira `DEFAULT` com `ativo: false` (`:155`) e continua editável; salvar depois sobrescreve a config real com valores padrão (dados perdidos, risco alto).
- fato: falha ao carregar áreas ou cidades fica sem aviso: lista de áreas vazia parece "sem áreas" e o seletor de cidade vem vazio (`:157-159`).
- fato: o salvar da config mostra mensagem genérica, sem o motivo do servidor (`:207-208`).
- fato: tempo mínimo/máximo e raio usam `parseInt(...) || 0` (`:266`, `:275`, `:284`); campo apagado vira 0 e passa pelo `min=1` só no navegador. não há checagem de min <= max no front (hipótese: o backend valida).
- fato: `chave_pix` livre, sem validação no front.
- fato: o `revalidarGuia` falho é ignorado (`.catch(() => {})`); a ficha pública pode ficar com cache velho.
- fato: `type="number"` sem teto explícito (taxa, pedido mínimo); limite só no servidor.

## equivalente em minha-conta
- sim, `app/minha-conta/guia/ConfigDoDelivery.tsx` e `AreasDoDelivery.tsx`, via `buscarConfigDelivery`, `salvarConfigDelivery`, `buscarAreasDelivery`, `criarAreaDelivery`, `salvarAreaDelivery`, `apagarAreaDelivery` (`cliente-api.ts:1570-1624`).
- diferença: lá os erros usam `textoDoErroDelivery` e a mensagem de boas-vindas tem `maxLength` (`ConfigDoDelivery.tsx:127`, `:409`); no painel não. o cliente também tem um liga/desliga separado da config (`:157-163`).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-delivery-configuracoes.png](../prints/painel-delivery-configuracoes.png) · dados brutos: [json](../prints/json/painel-delivery-configuracoes.json)
- aberta em `/painel/delivery/configuracoes`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "23 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 23 itens em coluna) (10,18,255,871)
- [título] "Configurações de Delivery" — topo, no topo da página, à esquerda (300,19,227,28)
- [título] "Configurações de Delivery" — conteúdo, na parte de cima, ao centro (458,99,640,32)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
