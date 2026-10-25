# /painel/cupons/novo

Arquivos: `app/painel/cupons/novo/page.tsx`, `cupons/CupomForm.tsx`

- rota `/painel/cupons/novo`. client. gate: `PainelGuard` + módulo `cupons`.
- o que faz: cria um cupom e o atrela a uma empresa do Guia. `CupomForm empresaId={null}`.
- campos: Empresa (obrigatório, select), Foto de capa, Código (máx. 50, vira maiúsculas sem símbolos, `CupomForm.tsx:134`), Desconto/selo (máx. 100), Descrição, Condições (máx. 200), Tipo (percentual ou fixo), Valor (percentual validado entre 0 e 100), Validade.
- a lista de empresas = `empresasDisponiveis()` menos as que já têm cupom (`comCupom`, paginada), para não sobrescrever (`:80-102`).
- apis: `cupons.empresasDisponiveis`, `cupons.listar`, `cupons.salvar` (PATCH), `cupons.enviarFoto` (multipart, 2ª chamada), mais `revalidarGuia`/`revalidarCupons`.
- estados: sem empresa livre mostra "Nenhuma empresa cadastrada no Guia Comercial ainda." (`:247`); erros de campo vêm de JSON no `err.message` (`tentaCampos`, `:200-215`); foto que falha após salvar mostra "O cupom foi salvo, mas a foto não" e não navega.
- o admin cria cupom em nome da empresa sem passar pelo lojista.
- problemas:
  - fato: a mensagem "Nenhuma empresa cadastrada" também aparece quando todas as empresas já têm cupom (filtro de `comCupom` esvazia a lista), texto enganoso.
  - fato: `salvar` é PATCH em empresa existente; não há criação de registro novo, só preenche campos.
  - fato: após erro de foto com `setSaving(false)` a tela fica na página; um novo clique em "Salvar" reenvia tudo (idempotente).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-cupons-novo.png](../prints/painel-cupons-novo.png) · dados brutos: [json](../prints/json/painel-cupons-novo.json)
- aberta em `/painel/cupons/novo`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Listar Empresas · Gerenciar Categorias · Gerenciar Subcategorias · Cupons de Desconto · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,953)
- [título] "Cupons — Novo cupom" — topo, no topo da página, à esquerda (300,19,204,28)
- [título] "Novo cupom" — conteúdo, na parte de cima, ao centro (466,99,624,32)
- [envio de arquivo] "" — conteúdo, na parte de cima, ao centro (598,313,265,20)
- [campo] "Ex: PORTAL10" — conteúdo, no meio da tela, ao centro (490,383,282,38)
- [campo] "Ex: 10% OFF no rodízio" — conteúdo, no meio da tela, à direita (784,383,282,38)
- [campo de texto longo] "Regras, o que está incluso, condições de uso…" — conteúdo, no meio da tela, ao centro, logo abaixo de “Ex: PORTAL10” (490,481,576,78)
- [campo] "Ex.: Válido só para consumo no local, não cumulativo" — conteúdo, no meio da tela, ao centro, logo abaixo de “Regras, o que está incluso, condiçõ” (490,606,576,38)
- [campo] "Ex: 10" — conteúdo, no meio da tela, ao centro, logo abaixo de “Ex.: Válido só para consumo no loca” (686,684,184,38)
- [campo] "" — conteúdo, no meio da tela, à direita, logo abaixo de “Ex.: Válido só para consumo no loca” (882,684,184,38)
- [botão] "Salvar cupom" — conteúdo, no meio da tela, ao centro (490,782,132,40)
- [botão] "Cancelar" — conteúdo, no meio da tela, ao centro, logo abaixo de “Ex: 10” (634,782,96,40)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)

## como chegar
- na parte Conteúdo do menu, abra `Guia Comercial`, clique em `Cupons de Desconto` e depois em `Novo cupom`.

## o que você vê
Cria um cupom de desconto para uma empresa do Guia.
- `Empresa *`: a empresa que vai receber o cupom. só aparecem empresas que ainda não têm cupom; se todas já têm, a lista fica vazia.
- `Foto de capa do cupom`: imagem que aparece no cupom.
- `Código do cupom`: o código que o visitante usa; só letras e números, sem espaço nem acento (até 50).
- `Desconto (texto exibido)`: a frase do desconto mostrada no site, ex.: "10% OFF no rodízio" (até 100).
- `Descrição do cupom`: regras e o que está incluso.
- `Condições de uso`: restrições, ex.: "não cumulativo" (até 200).
- `Tipo de desconto`: `Percentual (%)` ou `Valor fixo (R$)`. `Valor`: o número do desconto; percentual vai de 0 a 100.
- `Validade`: até quando o cupom vale.
- `Salvar cupom` grava; `Cancelar` volta sem salvar.
