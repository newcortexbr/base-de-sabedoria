# /minha-conta/cupons

Arquivo: `src/app/minha-conta/cupons/page.tsx`

## quem acessa
- empresa (perfil "Área do cliente"). Colunista, pessoa física e jornalista não têm a rota na lista (`perfil-da-area.ts:41,52,63`); `ClienteShellClient.tsx:41` trata como "fora do perfil".
- layout exige login (`layout.tsx:16-21`); sem login vai para `/minha-conta/login`.

## gate de módulo/plano
- não é seção vendida: é benefício do plano do Guia (`page.tsx:3-12`).
- o menu só mostra "Cupons" (abaixo de Guia) se `cupomLiberado` (`ClienteSidebar.tsx:115`). A URL direta abre mesmo sem o benefício.
- na tela, `liberado` = `campos_liberados` inclui `cupom_codigo` (`page.tsx:148`); foto de capa só se incluir `cupom_foto` (`:149`). Quem decide é o servidor.
- sem empresa: "Cadastre sua empresa no Guia Comercial para poder publicar um cupom." + link para o Guia (`:227-237`).
- empresa sem benefício: "O plano atual da sua empresa no Guia Comercial não inclui cupom de desconto." + botão "Ver planos e assinaturas" (`:228,232`).

## o que faz
- edita o cupom da própria empresa do Guia (uma empresa, um cupom). É o mesmo dado do formulário do Guia (`page.tsx:3-12,248-252`).

## ações e campos
- `Foto de capa do cupom` (opcional, só se liberada): `Adicionar` / `Trocar` / `Remover`. Título da tela: "Cupons" (seta de voltar ao início).
- Cupom de desconto (texto, ex.: "10% OFF no rodízio"), 2ª linha do card (opcional, 140), Condições de uso (opcional, 200 com contador), Código do cupom (vira maiúsculo, sem espaços), Tipo de desconto (Percentual ou Valor fixo), Valor do cupom (máscara por tipo), Cupom vale até (data).
- botão "Salvar cupom"; "Salvo." ao concluir.
- selo de situação: No ar, Vencido, Não publicado (sem código), Empresa fora do ar (`:75-93`).

## APIs
- `GET /{portal}/comercial/minha-empresa/` (`buscarMinhaEmpresa`, `cliente-api.ts:835`).
- `PATCH /{portal}/comercial/minha-empresa/` parcial com os campos do cupom (`salvarMinhaEmpresa`, `:987`).
- `revalidarPerfilDaEmpresa` (Server Action), best-effort, erro engolido (`page.tsx:181-185`).

## estados de erro/vazio
- carregando "Carregando…".
- 403: "Sua conta não tem acesso à área de clientes deste portal."; outros: "Não foi possível carregar seu cupom agora. Tente novamente em instantes." (`:131-133`).
- sem slug de portal: "Não foi possível identificar o portal da sua sessão." (`:121`).
- erro de salvar: erro por campo em vermelho e faixa geral (`formatErroCliente`).

## possíveis problemas para leigo
- fato: o selo "Não publicado" aparece quando falta o código; os campos "Cupom de desconto" e "Código" parecem a mesma coisa e nenhum é marcado como obrigatório (`:308,323`). O texto de ajuda não explica que sem código o cupom não aparece no site. Hipótese: o leigo preenche só o texto e acha que publicou.
- fato: "2ª linha do card" é jargão de layout (`:313`).
- fato: "Tipo de desconto" e "Valor" ficam separados do "Cupom de desconto" (texto livre); o leigo pode digitar "10%" no texto e "20" no valor. Hipótese: divergência.
- fato: ao falhar a revalidação do site, nada é dito; o site pode demorar até o próximo ciclo de cache.
- fato: o menu não mostra "Cupons" sem benefício, mas a URL direta mostra explicação com botão para planos (bom).
- fato: foto de capa não tem limite de tamanho exibido na tela.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-cupons.png](../prints/minha-conta-cupons.png) · versão celular: [minha-conta-cupons-390.png](../prints/minha-conta-cupons-390.png) · dados brutos: [json](../prints/json/minha-conta-cupons.json)
- aberta em `/minha-conta/cupons`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Cupons" — topo, no topo da página, ao centro (432,16,67,28)
- [link] "Voltar ao início" — topo, no topo da página, à esquerda (400,20,20,20)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [link] "Ver planos e assinaturas" — conteúdo, na parte de cima, ao centro (425,186,200,44)
- [link] "Ir para o Guia Comercial" — conteúdo, na parte de cima, ao centro (637,186,162,44)

## o que você vê
Aqui você cria o cupom de desconto da sua empresa no Guia Comercial (uma empresa, um cupom).
- Selo de situação: No ar; Vencido (passou da data); Não publicado (falta o Código do cupom); Empresa fora do ar.
- Foto de capa: opcional, só se o seu plano libera.
- Cupom de desconto: o texto de destaque, ex.: "10% OFF no rodízio".
- 2ª linha do card: uma frase extra embaixo do destaque (opcional, até 140 letras).
- Condições de uso: regras do cupom (opcional, até 200 letras).
- Código do cupom: o código que o cliente usa; sem ele o cupom não é publicado.
- Tipo de desconto: Percentual (%) ou Valor fixo (R$). Valor do cupom: o número do desconto.
- Cupom vale até: data final.
- Sem empresa ou sem cupom no plano: aparece o botão "Ver planos e assinaturas" ou "Ir para o Guia Comercial".
