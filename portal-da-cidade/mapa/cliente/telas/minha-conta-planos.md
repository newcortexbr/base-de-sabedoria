# /minha-conta/planos (lista de planos e assinaturas)

Arquivo: `src/app/minha-conta/planos/page.tsx`

## quem acessa
- empresa (menu "Planos e assinaturas", `ClienteSidebar.tsx:216`).
- colunista e pessoa física NÃO alcançam este índice: a rota `/minha-conta/planos` não está na lista deles (só `planos/blog` e `planos/classificados`, `perfil-da-area.ts:41,52`). Jornalista não tem planos.

## gate de módulo/plano
- "Suas assinaturas": toda seção com contratação, inclusive vencida, cancelada ou pendente (`ehMinha`, `page.tsx:101`).
- "Disponível para assinar": seção sem contratação, com `tem_planos`, com tela construída (`rotaDaSecao`) e que a empresa oferece (`ofereceAEmpresa`, exclui `blog`) (`page.tsx:105`).
- logo, Notícias e Artigos não aparecem para quem não os tem; Publicidade nunca vem em `secoes` (`secoes-do-cliente.ts:32-41`), então não aparece aqui nem como "à venda". Fato lido nos comentários; não verificado no servidor.

## o que faz
- lista cada módulo em uma linha: nome, resumo da assinatura ("Plano A · R$ 49,90 · renova em dd/mm/aa"), selo de estado (Ativo, Aguardando pagamento, Vencido, Cancelado) ou preço de entrada ("Gratuito" ou "A partir de R$ …").
- módulos vendidos por item (eventos, publicidade, notícias) levam à tela do módulo, os demais para `planos/<secao>` (`page.tsx:52-54`).

## ações e campos
- só links; sem formulário.
- `AvisoBloqueioCliente` no topo.

## APIs
- nenhuma própria; usa `secoes` da casca (`GET /{portal}/comercial/minhas-secoes/`). `AvisoBloqueioCliente` chama `GET /{portal}/denuncias/meus-bloqueios/` (`cliente-api.ts:2944`, hipótese de uso por esse componente).

## estados de erro/vazio
- carregando: "Carregando…"; erro: texto da casca; vazio: "Este portal não tem planos à venda no momento." (`page.tsx:117-143`).

## possíveis problemas para leigo
- fato: "Aguardando pagamento" aparece só como selo; a linha não oferece "pagar agora" aqui (`page.tsx:56-63`). Leigo precisa entrar na seção.
- fato: seção "vencida" e "cancelada" ficam em "Suas assinaturas" ao lado das ativas; hipótese: pode confundir sobre o que está valendo.
- fato: Banners (publicidade) nunca aparece na lista de planos; leigo que procura "onde contrato banner" não acha aqui (`secoes-do-cliente.ts:32-41`). O caminho existe pelo menu lateral "Banners Publicitários".
- fato: se `secoes` vier vazio e sem erro, a mensagem diz que o portal não tem planos, mesmo que o problema seja o carregamento parcial. Hipótese.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-planos.png](../prints/minha-conta-planos.png) · versão celular: [minha-conta-planos-390.png](../prints/minha-conta-planos-390.png) · dados brutos: [json](../prints/json/minha-conta-planos.json)
- aberta em `/minha-conta/planos`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Planos e assinaturas" — conteúdo, no topo da página, ao centro (382,46,342,39)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [título] "À venda neste portal" — conteúdo, faixa larga na parte de cima (288,156,960,27)
- [link] "Guia ComercialGratuito" — conteúdo, faixa larga na parte de cima (288,195,960,76)

## o que você vê
Resumo de todos os seus planos, um por linha, e o que mais está à venda.
- Suas assinaturas: seções que você tem ou já teve, com plano, valor e data de renovação.
- Selo: Ativo, Aguardando pagamento, Vencido ou Cancelado.
- Disponível para assinar: seções que você ainda não tem, com "Gratuito" ou "A partir de R$ …".
- Cada linha leva à tela de planos daquela seção. Eventos, Banners e Notícias são pagos por item e levam à tela da própria seção.
