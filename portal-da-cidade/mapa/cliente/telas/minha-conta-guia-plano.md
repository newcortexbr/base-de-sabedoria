# /minha-conta/guia/plano

Arquivo: `src/app/minha-conta/guia/plano/page.tsx`

## quem acessa
- qualquer pessoa logada que chegue à URL; mas só a empresa vê o destino (o redirecionamento leva a `/minha-conta/planos/guia`).
- login exigido pelo `layout.tsx`.

## gate de módulo/plano
- nenhum. A página só redireciona (`page.tsx:7-9`).

## o que faz
- redirecionamento permanente (`permanentRedirect`, 308) para `/minha-conta/planos/guia`. O "Meu plano" do Guia mudou-se para "Planos e assinaturas" (pedido do dono, 2026-09-14). A rota fica para quem tem o endereço antigo.

## ações e campos
- nenhuma.

## APIs
- nenhuma.

## estados de erro/vazio
- nenhum próprio. O que acontece depois é da tela `/minha-conta/planos/guia`.

## possíveis problemas para leigo
- fato: perfis reduzidos (colunista, pessoa física, jornalista) seguem para `/minha-conta/planos/guia`, que não está na lista deles; o shell trata como fora do perfil (`ClienteShellClient.tsx:41`). Não verificado o que aparece. Hipótese: redirecionam de volta.
- fato: não há mensagem de "esta página mudou"; o usuário só vê a nova tela.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-guia-plano.png](../prints/minha-conta-guia-plano.png) · versão celular: [minha-conta-guia-plano-390.png](../prints/minha-conta-guia-plano-390.png) · dados brutos: [json](../prints/json/minha-conta-guia-plano.json)
- aberta em `/minha-conta/guia/plano` (redirecionou para `/minha-conta/planos/guia`); coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [link] "Voltar para o início" — conteúdo, no topo da página, à esquerda (280,28,143,20)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [título] "Como sua empresa vai aparecer no Guia?" — conteúdo, faixa larga na parte de cima (280,102,976,48)
- [título] "Grátis" — conteúdo, na parte de cima, ao centro (660,261,216,24)
- [link] "Continuar no Grátis" — conteúdo, no meio da tela, ao centro (660,468,216,44)

## o que você vê
Endereço antigo: leva direto para Planos e assinaturas, na parte do Guia Comercial.
