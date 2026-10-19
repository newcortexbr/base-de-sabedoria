# /minha-conta/minha-empresa

Arquivo: `src/app/minha-conta/minha-empresa/page.tsx`

## quem acessa
- empresa (menu fixo "Minha empresa", grupo "Minha conta": `ClienteSidebar.tsx:213`). Fica visível mesmo sem assinar nada (`ClienteSidebar.tsx:209-212`).
- colunista, pessoa física e jornalista são redirecionados (rota fora das listas deles).

## gate de módulo/plano
- nenhum no front. O servidor devolve `secoes` do perfil (onde o dado aparece).

## o que faz
- edita logo, descrição e contatos da empresa, valendo para Guia, Vagas, Classificados etc. (`page.tsx:189`).

## ações e campos
- logo (envio de arquivo com prévia), descrição, WhatsApp (com máscara), e-mail de contato, site (normaliza a URL) (`page.tsx:205-238`).
- botão "Salvar". Só envia o que mudou (`page.tsx:147-154`).
- painel lateral "Onde isso aparece" lista as seções afetadas; sem seções diz "Estes dados passam a valer quando você publicar algo." (`page.tsx:261-272`).
- ao salvar, revalida a página pública do Guia via Server Action (`revalidarFichaDaEmpresa`, `page.tsx:68-77`), best-effort.

## APIs
- `GET /{portal}/comercial/meu-perfil-empresa/` e salvar (PATCH com logo) (`cliente-api.ts:2911,2920`).
- Server Action `revalidarFichaDaEmpresa` (`guia/actions`).

## estados de erro/vazio
- sem portal no token: "Não foi possível identificar o portal da sua conta. Entre de novo." (`page.tsx:109`).
- erro de carga: mensagem do servidor por `formatErroCliente`; mas se `geral` vier vazio o campo `erro` fica nulo e a tela abre com formulário vazio (fato lido em `page.tsx:129-130`, hipótese sobre o caso).
- nada alterado: "Você ainda não alterou nada para salvar." (`page.tsx:156`).
- sucesso: "Dados atualizados em todas as suas seções.".
- telefone inválido: texto de `motivoTelefoneInvalido`.

## possíveis problemas para leigo
- fato: "Salvar" sem mudar nada dá erro vermelho ("Você ainda não alterou nada…"), que parece falha, não aviso (`page.tsx:155-158`).
- fato: a página pública do Guia só atualiza no máximo em até 1 hora se a revalidação falhar em silêncio (`page.tsx:56-66,74-76`); páginas de vaga e anúncio podem demorar até 2 minutos (comentário). Leigo vê "atualizados" e não vê no site.
- fato: logo não tem tamanho/formato explicado nesta tela; erros vêm do servidor (`erroLogo`). Hipótese sobre mensagens.
- fato: nome da empresa não é editável aqui (comentário aponta `perfil_empresa.py` listando `nome` como ausente). O leigo pode procurar onde mudar o nome (hipótese: está na ficha do Guia).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-minha-empresa.png](../prints/minha-conta-minha-empresa.png) · versão celular: [minha-conta-minha-empresa-390.png](../prints/minha-conta-minha-empresa-390.png) · dados brutos: [json](../prints/json/minha-conta-minha-empresa.json)
- aberta em `/minha-conta/minha-empresa`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Minha empresa" — conteúdo, no topo da página, ao centro (382,46,295,39)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [título] "Identidade" — conteúdo, na parte de cima, ao centro (362,165,549,23)
- [título] "Onde isso aparece" — menu lateral, na parte de cima, à direita (1022,175,207,23)
- [campo de texto longo] "Descrição da empresa" — conteúdo, na parte de cima, ao centro (307,326,604,96)
- [título] "Contatos" — conteúdo, no meio da tela, ao centro (362,496,549,23)
- [campo] "WhatsApp" — conteúdo, no meio da tela, ao centro, logo abaixo de “Contatos” (307,578,295,46)
- [campo] "E-mail de contato" — conteúdo, no meio da tela, ao centro, logo abaixo de “Contatos” (616,578,295,46)
- [campo] "Site" — conteúdo, no meio da tela, ao centro, logo abaixo de “WhatsApp” (307,662,604,46)
- [botão] "Salvar" — conteúdo, no meio da tela, à esquerda, logo abaixo de “Site” (288,741,92,48)
