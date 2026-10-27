---
id: ac-instalacao-concluida-acessos
titulo: "meu portal está no ar: onde ficam o endereço, o painel e os links"
publico:
  - cliente
produto: portal-da-cidade
modulo: instalacao
aba: Minha plataforma
tipo_problema:
  - instalacao-concluida
  - endereco-do-portal
  - painel-administrativo
  - links-do-portal
  - como-acessar-o-portal
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - CgrBKTyXSsI
---

## objetivo
encontrar o endereço do seu site, o painel administrativo e os links úteis do portal depois da instalação.

## pré-requisitos
- instalação concluída: você respondeu `Sim, já está no ar` (cartão com `Portal no ar`).

## passos
1. Em `Meus negócios` (`/negocios`), clique em `Acessar meu negócio` no cartão da cidade. [guia=negocios.acessar-negocio]
2. No menu do negócio, clique em `Minha plataforma` (`/negocios/<negócio>/plataforma`). [guia=menu:/negocios/[licenseId]/plataforma]
3. Em `Acessos principais`, clique em `Acesse seu portal` para abrir o site público, ou em `Acesse seu painel` para gerenciar conteúdos e configurações. [guia=plataforma.acessar-portal]
4. Para copiar um endereço, use o botão de copiar ao lado dele. [guia=fora]
5. Em `Guia de links do seu portal`, escolha a aba da categoria (`Páginas de vendas`, `Áreas de login`, `Recursos do portal`) e copie o link que quer compartilhar. [guia=fora]

## resultado
você abre o site, o painel e tem à mão os links para divulgar, como `Seja parceiro`, `Guia Comercial`, `Vagas de emprego`, `Classificados`, `Banner publicitário`, `Matéria patrocinada / notícias`, `Especialista / colunista`, `Área do parceiro`, `Ferramenta de orçamento` e `Voz do Povo`.

## desvios
- `Acessos principais` serve para abrir o portal ou o painel e copiar os endereços. o `Guia de links do seu portal` traz links prontos para copiar e compartilhar.
- com a instalação concluída, `Minha plataforma` vira a central do portal; o próximo passo é o botão `Iniciar meu treinamento`.
- no cartão de `Meus negócios`, o botão `Abrir portal` também abre o site.
- para entrar no painel, use o botão `Entrar com a Área do Cliente` na tela de login do painel: é a mesma conta da área do cliente.
- se aparecer `O endereço publicado deste portal não foi encontrado. Fale com o suporte para conferir o domínio.`, fale com o suporte.
- com o negócio suspenso, os acessos ficam indisponíveis: `Os acessos ficam indisponíveis enquanto o portal estiver suspenso.`

## quando pedir ajuda
se algum link abrir uma página de erro, use `Falar com o suporte` no fim da tela.

## fontes
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaInstalada.tsx:17`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaInstalada.tsx:31`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaInstalada.tsx:39`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaInstalada.tsx:78`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaInstalada.tsx:111`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaInstalada.tsx:120`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaInstalada.tsx:135`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaInstalada.tsx:149`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaInstalada.tsx:157`
- `src/app/(cliente)/negocios/page.tsx:249`
- `src/app/(cliente)/inicio/page.tsx:427`

## lacunas
- os nomes exatos das abas do guia de links vêm dos títulos de categoria; não testado em tela.
- a lista de links pode mudar conforme o portal; os nomes acima são os fixos no código da área do cliente.
