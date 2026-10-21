# /comprar — Comprar

Arquivo: `src/app/(public)/comprar/page.tsx`

## quem acessa
- público. `/indisponivel` também cai aqui.

## o que faz
- porta de compra pública; sem produto escolhido só orienta a ir pela página de vendas do produto.

## estados de erro/vazio
- com produto e cidade escolhidos pela página de vendas, a mesma rota segue para o pré-checkout (não fotografado).

## possíveis problemas para leigo
- não é tela de cliente logado; quem já é cliente não compra por aqui para gerenciar o que já tem.

## posições na tela (print de 2026-10-21, 1440x900, página inteira)
- print: [comprar.png](../prints/comprar.png) (15 KB) · dados brutos: [json](../prints/json/comprar.json)
- aberta em `/comprar` com dados FICTÍCIOS de exemplo (cliente "Mariana Souza Exemplo", Portal da Cidade em Linhares/ES, Colatina/ES e Aracruz/ES)
- coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "O portal da sua cidade, com exclusividade." — conteúdo, na parte de cima, à esquerda (48,140,496,161)
- [botão] "Comprar" — conteúdo, no meio da tela, à esquerda (48,444,119,44)
- [aviso] "Escolha um produto pela página de vendas dele para continuar a compra." — conteúdo, no meio da tela, à esquerda (48,488,468,73)

## o que você vê
Página pública de compra: "O portal da sua cidade, com exclusividade."
- Texto: "Uma licença por município. Você opera o portal, vende os anúncios e fica com a receita."
- "Comprar": orienta "Escolha um produto pela página de vendas dele para continuar a compra."
