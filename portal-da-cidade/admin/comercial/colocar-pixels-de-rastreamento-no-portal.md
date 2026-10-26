---
id: colocar-pixels-de-rastreamento-no-portal
titulo: "colocar pixels de rastreamento no portal"
publico:
  - admin
modulo: configurações
categoria: admin
aba: nao-se-aplica
tipo_problema: configuracao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 8M4kdEfP7Eg
---

## objetivo

aqui você cadastra ou remove os identificadores de rastreamento usados pelo portal.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- Ter o código fornecido por uma das `Plataformas aceitas` exibidas na tela.

## passos

### cadastrar ou substituir um pixel

1. Na parte `Sistema` do menu da esquerda, clique em `Configurações`. Só é preciso se as opções estiverem fechadas. [t=6] [guia=configuracoes.abrir-menu]
2. Clique em `Configurações Gerais`. [t=9] [guia=menu:/painel/configuracoes]
3. Em `Pixels de rastreamento`, cole o código em `Código do pixel`. [t=31] [guia=configuracoes.pixel-codigo]
4. Clique em `Identificar pixel`. [t=36] [guia=configuracoes.pixel-identificar]
5. Após conferir os identificadores em `Identificamos:`, clique em `Salvar`. [guia=configuracoes.pixel-salvar]

### remover um pixel

1. Na mesma tela, em `Ativos no site`, clique em `Remover` na linha da plataforma desejada. [guia=configuracoes.pixel-remover]
2. Na confirmação, clique em `Remover`. [guia=confirmacao.confirmar]

## resultado

aparece `Pixel salvo` ou `Pixel removido`. O cadastro envia plataforma e identificador; o código colado não é guardado. A tela sinaliza a substituição quando já existe outro identificador daquela plataforma.

## desvios

Falhas de identificação, gravação ou remoção aparecem no quadro. Após identificar, é necessário salvar para gravar.

## fontes

- `portal-cidade/frontend/src/app/painel/configuracoes/PixelsCard.tsx:34` — identificação.
- `portal-cidade/frontend/src/app/painel/configuracoes/PixelsCard.tsx:48` — gravação e remoção.
- `portal-cidade/frontend/src/app/painel/configuracoes/PixelsCard.tsx:132` — ações.

## lacunas

Sem validação no navegador, coleta de eventos ou conferência das plataformas no servidor. A legenda não detalha o clique final em Salvar nem a remoção; esses passos são documentados pelo código, sem tempo de vídeo.
