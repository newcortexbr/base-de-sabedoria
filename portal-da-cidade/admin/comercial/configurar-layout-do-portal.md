---
id: configurar-layout-do-portal
titulo: "mudar a aparência (layout) do portal"
publico:
  - admin
modulo: configurações
categoria: admin
aba: nao-se-aplica
tipo_problema: configuracao
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos:
  - XekThBh1ygU
  - He7XF-kolwk
  - _YSN9di_ZOU
  - lrTaEV5JnVM
  - vPnHq9kRWW8
---

## objetivo
aqui você muda a aparência do site: topo, tela de início, cores ou rodapé. tudo muda o visual sem precisar de programador.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.

## explicação

a página `Layout` tem quatro cartões: `Topo`, `Tela Início`, `Cores` e `Rodapé`. nas telas de topo, cores e rodapé há uma prévia ao lado, que mostra o resultado na hora. nada muda no site no ar até você salvar.

- `Topo`: há cinco modelos de cabeçalho, cada um com uma organização diferente de logo, busca e menu. um deles mostra a previsão do tempo da cidade ao lado da logo. você escolhe o tamanho da logo (pequena, média ou grande) e as cores da barra superior, da barra de navegação e dos links do menu. as barras podem ser cor sólida ou gradiente, com combinações prontas, direção do degradê ou código da cor. em `ordem do menu` você arrasta as seções pela alça ou usa as setas. o início fica sempre em primeiro, e o que não cabe na barra vai para o botão `mais`. a prévia pode ser vista no computador ou no celular.
- `Tela Início`: a página que o visitante vê primeiro é montada com blocos, e a ordem da lista é a ordem do site. cada bloco mostra o tipo (vagas, turismo, notícias, guia comercial, classificados, eventos ou publicidade) e o modelo visual usado (como carrossel, grade ou lista compacta).
- `Cores`: duas cores pintam o portal inteiro. a cor primária é a de tudo que se clica: botões, links, paginação, campos de formulário e a área do cliente. a cor de destaque chama atenção sem ser botão: nome das seções, barrinha do título, selos e etiquetas. a tela mostra exemplos de onde cada cor aparece e um aviso confirma se o texto fica legível. na prévia você escolhe a página (início, guia, empresa, notícia, vagas, classificados e telas de conta) e pode acender só a primária ou só a de destaque.
- `Rodapé`: escolha o modelo (linha única, centralizado ou faixa de chamada), o texto abaixo da logo, as cores de fundo e de textos e links, e o tamanho da logo. o passo a passo do rodapé está em outro artigo.

## passos

1. No menu da esquerda, na parte `Sistema`, clique em `Configurações` e depois em `Layout`. [guia=menu:/painel/configuracoes/layout]
2. Escolha a parte que quer ajustar: `Topo`, `Tela Início`, `Cores` ou `Rodapé`. [guia=configuracoes-layout.partes]
3. Faça a mudança que você quer na parte escolhida e confira na prévia. [guia=configuracoes-layout.partes]
4. Clique no botão de salvar da própria página (por exemplo, `Salvar Topo` ou `Salvar cores`) e espere a mensagem de que deu certo. [guia=configuracoes-layout.salvar]

### na tela início

1. Para mudar a ordem, segure a alça do bloco e arraste. a nova ordem é salva sozinha, sem botão. atualize a página inicial do site para ver a mudança. [guia=configuracoes-layout.partes]
2. Para incluir um bloco, clique em `adicionar bloco`, escolha o tipo de conteúdo e o modelo, preencha título, subtítulo e categoria e veja na prévia o bloco com o conteúdo real do portal. depois clique em `adicionar bloco` de novo para confirmar. [guia=configuracoes-layout.partes]
3. Em cada bloco da lista, o olho oculta o bloco sem apagar, o lápis edita e a lixeira remove. [guia=configuracoes-layout.partes]

## resultado
O site passa a ter a aparência escolhida. salvar o topo vale para todas as páginas, e salvar as cores muda o site inteiro de uma vez.

## desvios

os modelos disponíveis são definidos pelo produto; a tela permite escolher configurações, não criar um modelo visual novo. A aparência final pode depender de conteúdo e módulos existentes.

## quando pedir ajuda

peça ajuda se a página não carregar, se o salvamento apresentar erro ou se a opção esperada não estiver disponível. Não envie senhas nem chaves de integração.

## fontes

- `portal-cidade/frontend/src/app/painel/configuracoes/page.tsx:26-40,72-95`
- `portal-cidade/frontend/src/app/painel/configuracoes/layout/page.tsx:13-29,31-36,59-60,84-86`
- `portal-cidade/docs/PRODUCT.md:82-93`
- `portal-cidade/docs/DECISIONS.md:14-21`

## lacunas

não foi feita validação visual no navegador. Os campos e ações de cada subpágina podem mudar.
