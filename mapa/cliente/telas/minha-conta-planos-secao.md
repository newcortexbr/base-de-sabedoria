# /minha-conta/planos/[secao] (vitrine e troca de plano)

Arquivo: `src/app/minha-conta/planos/[secao]/page.tsx`

## quem acessa
- empresa: qualquer `secao` pelo menu.
- colunista: só `planos/blog`; pessoa física: só `planos/classificados` (`perfil-da-area.ts:41,52`). Outra seção os redireciona para a rota inicial deles.
- o botão de voltar muda conforme o perfil alcança Início ou só o módulo (`page.tsx:137-174,444-446`).

## gate de módulo/plano
- seção precisa existir em `secoes`; senão: "Esta seção não está disponível neste portal." (`page.tsx:460-469`).
- módulos por item (`eventos`, `publicidade`, `noticias`) NÃO têm vitrine: `router.replace` para a tela do módulo (`page.tsx:182-185`).
- a regra de plano gratuito: sem contratação ativa e com plano gratuito na seção, o Grátis é o plano atual, sem botão (`page.tsx:225-232`).

## o que faz
- única tela onde se assina, sobe, desce ou volta ao grátis (comentário `page.tsx:3-25`).
- compara cartões de plano por período; mostra benefícios e o que o Grátis perde (`oQueOPlanoNaoTem`).
- `?plano=<id>` pré-seleciona e pede confirmação; `?entrada=1` vem do Início para Guia/Vagas.

## ações e campos
- "Quero este" (sem plano), "Fazer upgrade", "Mudar para este plano" (descida), "Voltar ao grátis", "Continuar neste plano" (desfaz volta ao grátis), "Continuar no Grátis", "Desistir da troca" (`page.tsx:347-391`).
- confirmações inline antes de cobrar (upgrade, descida, volta ao grátis).
- checkout (modal): CPF/CNPJ e e-mail, só se a ficha não tiver (`page.tsx:216-217,311-329`); validação "Informe seu CPF ou CNPJ.", "CPF ou CNPJ inválido.", "Informe um e-mail válido.".
- pagamento em `ModalPagamentoFatura` (Pix ou cartão) e `InstrucoesDePagamento`.
- Esc fecha o checkout (`page.tsx:206-213`).

## APIs
- `GET /{portal}/comercial/planos/?secao=` (`cliente-api.ts:825-826`).
- `POST /{portal}/comercial/contratar/` (`:1084`), `POST .../cancelar/` (`:1171`), `POST .../desistir/` (`:1183`).
- pagamento: `pagamentoDaFatura`, `statusDoPagamentoDaFatura`, `pagarFaturaComCartao` (`:1124-1142`).
- após cada ação, `recarregar()` da casca refaz seções/ficha/avisos.

## estados de erro/vazio
- carregando "Carregando…" e "Carregando planos…"; erro da casca; 403 de planos "Sua conta não tem acesso a planos deste portal."; outro "Não foi possível carregar os planos agora…" (`page.tsx:196-201`).
- ação falhou: geral ou "Não foi possível concluir agora. Tente novamente." (`page.tsx:259`).
- depois de pagar (assinatura mudou), manda para a tela do módulo; fechou sem pagar, fica (`page.tsx:234-243`).

## possíveis problemas para leigo
- fato: o subtítulo diz "Você pode mudar quando quiser." (`page.tsx:476`) mas descida e volta ao grátis só valem no fim do período pago e pagamento feito não é devolvido (comentário `page.tsx:15-19`). Contradição de expectativa; a tela avisa nas confirmações, mas o título promete mais.
- fato: troca para plano menor é agendada e a fatura vence no fim do período; "Pagar agora" fica no aviso. Fácil de o leigo achar que já trocou. Hipótese.
- fato: rótulos diferentes para ideias próximas: "Quero este", "Fazer upgrade", "Mudar para este plano", "Voltar ao grátis". "Upgrade" é palavra estrangeira para público leigo (`page.tsx:371`).
- fato: link com `?plano=` nunca cobra sozinho; pede confirmação (`page.tsx:393-406`). Bom.
- hipótese: ficha sem CPF/CNPJ exige digitar documento no checkout; quem não quer dar documento desiste sem explicação do motivo (não lido o texto do modal).
- não lido: linhas 481-747 (cabeçalho completo, avisos de espera/atraso, modais). Detalhes dos textos desses avisos não foram conferidos.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-planos-secao.png](../prints/minha-conta-planos-secao.png) · versão celular: [minha-conta-planos-secao-390.png](../prints/minha-conta-planos-secao-390.png) · dados brutos: [json](../prints/json/minha-conta-planos-secao.json)
- aberta em `/minha-conta/planos/guia` com dados do banco de teste; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [link] "Voltar para o início" — conteúdo, no topo da página, à esquerda (280,28,143,20)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [título] "Como sua empresa vai aparecer no Guia?" — conteúdo, faixa larga na parte de cima (280,102,976,48)
- [título] "Grátis" — conteúdo, na parte de cima, ao centro (660,261,216,24)
- [link] "Continuar no Grátis" — conteúdo, no meio da tela, ao centro (660,468,216,44)
