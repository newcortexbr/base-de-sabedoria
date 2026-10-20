# /minha-conta/publicidade/nova

Arquivos: `publicidade/nova/page.tsx`, `publicidade/EspelhoDaPagina.tsx`, `mapa-do-espelho`

## quem acessa
- empresa. É o destino de entrada do módulo (`destinoDeEntrada('publicidade')`, `secoes-do-cliente.ts:345`).

## gate de módulo/plano
- nenhum. O preço é do plano da posição no servidor; a tela só exibe (`page.tsx:7-10`).

## o que faz
- 3 passos numa página: onde a marca aparece (página e posição), por quanto tempo (plano/período), e a arte. "Espelho" da página mostra a arte no lugar do banner.
- paga e envia para aprovação.

## ações e campos
- abas de página, posição, período (1 semana, 1 mês, 6 meses, 1 ano), upload da arte, link de destino (opcional), título (opcional), alternância celular/computador no espelho (`celular`).
- avisos: trocar de página descarta a arte; posição de outro tamanho também descarta (`page.tsx:129-149`).
- botão para pagar (`handlePagar`); após criar, "Banner enviado" com instruções de pagamento e modal Pix/cartão; ao fechar, relê o banner (`:92-101`).
- chave de idempotência gerada ao montar (`:82`).

## APIs
- `GET /{portal}/comercial/publicidade/posicoes/` (`cliente-api.ts:2734`).
- `POST /{portal}/comercial/publicidade/contratar/` com arquivo (`:2808`).
- `GET /{portal}/comercial/meus-banners/{id}/` ao fechar o pagamento.

## estados de erro/vazio
- erro de carga: "Não foi possível carregar as posições disponíveis agora…" (`:111`).
- contratar: erros por campo ou "Confira os campos destacados." / "Não foi possível concluir a contratação agora." (`:189-191`).
- guia de falta: "Escolha a posição…", "Escolha o período.", "Falta enviar a arte." (`:163-166`).

## possíveis problemas para leigo
- fato: a troca de página ou posição descarta a arte já enviada (`:133,143`); leigo pode perder o trabalho de upload. Avisado por mensagem.
- fato: a arte precisa respeitar proporção por posição e PNG/JPG até 5 MB (texto em `EditarBanner.tsx:216`); a verificação de tamanho no envio é do servidor.
- fato: o banner "só entra no ar após aprovação" apenas se o portal exigir (texto condicional `:218-219`).
- não lido: linhas 231-418 (corpo do formulário e resumo).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-publicidade-nova.png](../prints/minha-conta-publicidade-nova.png) · versão celular: [minha-conta-publicidade-nova-390.png](../prints/minha-conta-publicidade-nova-390.png) · dados brutos: [json](../prints/json/minha-conta-publicidade-nova.json)
- aberta em `/minha-conta/publicidade/nova`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [link] "Voltar para Banners Publicitários" — conteúdo, no topo da página, à esquerda (288,24,234,44)
- [título] "Novo banner" — conteúdo, na parte de cima, ao centro (382,94,408,39)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)

## o que você vê
Compra de um banner em 3 passos na mesma tela.
- 1. Onde aparece: escolha a página e a posição no site.
- 2. Por quanto tempo: 1 semana, 1 mês, 6 meses ou 1 ano; o preço vem do portal.
- 3. Arte: envie a imagem. Trocar de página ou de posição com outro tamanho descarta a arte.
- Espelho: prévia da página com a sua arte no lugar, em celular ou computador.
- Link de destino e título: opcionais.
- Pagar: gera a cobrança (Pix ou cartão); depois o banner vai para aprovação do portal.
