# /minha-conta/meus-dados

Arquivo: `src/app/minha-conta/meus-dados/page.tsx`

## quem acessa
- pessoa física e colunista (menu "Meus dados", `perfil-da-area.ts:45,56`).
- jornalista é redirecionado (`perfil-da-area.ts:63`). Empresa alcança a URL, mas não há item no menu dela e vê o perfil de colunista (`page.tsx:45`: tudo que não é pessoa física cai em `PerfilDoColunista`).

## gate de módulo/plano
- pessoa física: nenhum.
- colunista/empresa: `useDireitoBlog` (módulo `blog`). Quem já tem perfil sempre vê; quem não tem só cria com contratação ativa (`PerfilDoColunista.tsx:21-30,71-80`).
- sem contratação: mensagem "Seu perfil de colunista é criado junto com o plano de Artigos." com link para `/minha-conta/planos/blog` (`PerfilDoColunista.tsx:82-86`).

## o que faz
- pessoa física: edita contato e a apresentação de anunciante (foto e "Sobre você").
- colunista: edita o perfil público de colunista (nome, cargo, bio, redes, foto, foco).

## ações e campos
- pessoa física, `MeusDados.tsx` (cartão "Contato"): `Nome`, `WhatsApp` (editáveis); `E-mail` e `CPF` somente leitura (CPF mascarado, "Para corrigir o CPF, fale com o portal."); botão `Salvar dados`.
- `ApresentacaoDoAnunciante` (cartão "Foto e apresentação"): foto e "Sobre você", botão `Salvar`, mensagem "Foto e apresentação salvas."
- colunista: `ColunistaPerfil` (nome, cargo, bio, site, instagram, facebook, linkedin, whatsapp, e-mail público, foto, ponto de foco da imagem); botão `Salvar perfil`. Sem plano de Artigos, aparece o link `Ver planos de Artigos`.

## APIs
- `PATCH /{portal}/comercial/meus-dados/` (`salvarMeusDados`, `cliente-api.ts:763-767`).
- `GET`/salvar colunista via `blog-cliente-api` (`buscarMeuColunista`).
- anunciante: `/{portal}/comercial/meu-anunciante/` (`cliente-api.ts:2168`).

## estados de erro/vazio
- carregando: "Carregando…".
- colunista: 403 "Sua conta não tem acesso à área do colunista neste portal."; outros "Não foi possível carregar seu perfil…" (`PerfilDoColunista.tsx:48-50`).
- por campo e geral em `MeusDados.tsx:29-30,108`; sucesso "Dados salvos.".

## possíveis problemas para leigo
- fato: CPF só se corrige "falando com o portal", sem canal indicado na tela (`MeusDados.tsx:104`). O WhatsApp do portal existe na casca, mas não é apontado.
- fato: quem é empresa e abre essa URL vê tela de colunista (`page.tsx:45`), sem aviso. Hipótese: confusão se chegar por link antigo.
- fato: quem nunca contratou Artigos não consegue criar o perfil; só vê a mensagem com link para planos (`PerfilDoColunista.tsx:71-86`). É regra do servidor, mas o leigo pode estranhar.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-meus-dados.png](../prints/minha-conta-meus-dados.png) · versão celular: [minha-conta-meus-dados-390.png](../prints/minha-conta-meus-dados-390.png) · dados brutos: [json](../prints/json/minha-conta-meus-dados.json)
- aberta em `/minha-conta/meus-dados`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Meus dados" — conteúdo, no topo da página, ao centro (382,46,370,39)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [link] "Ver planos de Artigos" — conteúdo, na parte de cima, à direita (904,177,143,21)

## o que você vê
Seus dados de contato e sua apresentação pública.
- Pessoa física: Nome e WhatsApp podem ser mudados; E-mail e CPF só aparecem (o CPF fica escondido em parte). Para corrigir o CPF, fale com o portal.
- Foto e "Sobre você": como você se apresenta nos seus anúncios.
- Colunista: nome, cargo, bio, site, redes sociais, WhatsApp, e-mail público e foto do seu perfil de colunista.
- "Seu perfil de colunista é criado junto com o plano de Artigos": aparece quando você ainda não tem o plano.
- Salvar dados: grava; aparece "Dados salvos".
