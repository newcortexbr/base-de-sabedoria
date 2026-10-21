# /painel/cupons/[empresaId]/editar

Arquivos: `app/painel/cupons/[empresaId]/editar/page.tsx`, `cupons/CupomForm.tsx`

- rota `/painel/cupons/<empresaId>/editar`; `<empresaId>` é id da empresa do Guia (o cupom é campos da empresa). client; gate `PainelGuard` + módulo `cupons`.
- o que faz: edita o cupom da empresa. campos iguais aos de "novo" (ver `painel-cupons-novo.md`), mas sem seletor de empresa: mostra a empresa fixa.
- apis: `cupons.obter(empresaId)` (GET), `cupons.salvar` (PATCH), `cupons.enviarFoto`, revalidações.
- estados: erro 404 em `obter` é tratado como formulário em branco, não como erro (`CupomForm.tsx:110-114`); qualquer outro erro vira faixa de erro.
- o admin altera o cupom da empresa em nome do lojista.
- problemas:
  - fato: `Number(empresaId)` sem checar NaN (`editar/page.tsx:17`); URL com id inválido faz requisição para `/cupons/NaN/`.
  - fato: 404 vira formulário em branco: id de empresa de outro portal ou inexistente permite preencher e tentar salvar; só o servidor recusa.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-cupons-empresaid-editar.png](../prints/painel-cupons-empresaid-editar.png) · dados brutos: [json](../prints/json/painel-cupons-empresaid-editar.json)
- aberta em `/painel/cupons/1/editar` com dados do banco de teste; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Listar Empresas · Gerenciar Categorias · Gerenciar Subcategorias · Cupons de Desconto · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,953)
- [título] "Cupons — Editar cupom" — topo, no topo da página, à esquerda (300,19,210,28)
- [título] "Editar cupom" — conteúdo, na parte de cima, ao centro (466,99,624,32)
- [envio de arquivo] "" — conteúdo, na parte de cima, ao centro (598,291,265,20)
- [campo] "Ex: PORTAL10" — conteúdo, na parte de cima, ao centro (490,361,282,38)
- [campo] "Ex: 10% OFF no rodízio" — conteúdo, na parte de cima, à direita (784,361,282,38)
- [campo de texto longo] "Regras, o que está incluso, condições de uso…" — conteúdo, no meio da tela, ao centro, logo abaixo de “Ex: PORTAL10” (490,459,576,78)
- [campo] "Ex.: Válido só para consumo no local, não cumulativo" — conteúdo, no meio da tela, ao centro, logo abaixo de “Regras, o que está incluso, condiçõ” (490,584,576,38)
- [campo] "Ex: 10" — conteúdo, no meio da tela, ao centro, logo abaixo de “Ex.: Válido só para consumo no loca” (686,662,184,38)
- [campo] "" — conteúdo, no meio da tela, à direita, logo abaixo de “Ex.: Válido só para consumo no loca” (882,662,184,38)
- [botão] "Salvar cupom" — conteúdo, no meio da tela, ao centro (490,760,132,40)
- [botão] "Cancelar" — conteúdo, no meio da tela, ao centro, logo abaixo de “Ex: 10” (634,760,96,40)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)

## o que você vê
Muda o cupom de desconto de uma empresa do Guia.
- Empresa: a empresa dona do cupom (não muda aqui).
- Foto de capa do cupom: imagem que aparece no cupom.
- Código do cupom: o código que o visitante usa; só letras e números, sem espaço nem acento (até 50).
- Desconto (texto exibido): a frase do desconto mostrada no site, ex.: "10% OFF no rodízio" (até 100).
- Descrição do cupom: regras e o que está incluso.
- Condições de uso: restrições, ex.: "não cumulativo" (até 200).
- Tipo de desconto: Percentual (%) ou Valor fixo (R$). Valor: o número do desconto; percentual vai de 0 a 100.
- Validade: até quando o cupom vale.
- Salvar cupom grava; Cancelar volta sem salvar.
