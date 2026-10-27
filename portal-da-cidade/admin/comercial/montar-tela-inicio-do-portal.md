---
id: montar-tela-inicio-do-portal
titulo: "montar a tela inicial do portal (blocos da home)"
publico:
  - admin
modulo: configurações
categoria: admin
aba: nao-se-aplica
tipo_problema: configuracao
tags:
  - home
  - bloco
  - ordenar
  - criar
  - editar
  - remover
  - portal
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - _YSN9di_ZOU
  - XekThBh1ygU
---

## objetivo

aqui você organiza os blocos da página inicial: muda a ordem, adiciona, edita, oculta ou remove.

## pré-requisitos

- Ter acesso de administrador ao painel do portal.
- Para o exemplo de inclusão abaixo, o módulo de Notícias precisa estar ligado.

## passos

### abrir e mudar a ordem

1. Na parte `Sistema` do menu da esquerda, clique em `Configurações` para abrir as opções, se estiverem fechadas. [t=8] [guia=configuracoes.abrir-menu]
2. Clique em `Layout`. [t=10] [guia=menu:/painel/configuracoes/layout]
3. Clique no cartão `Tela Início`. [t=11] [guia=configuracoes-layout.inicio]
4. Segure a alça do bloco desejado e arraste para a nova posição. [t=24] [guia=inicio.arrastar]

### incluir um bloco de notícias

A partir da mesma tela:

1. Clique em `Adicionar bloco`. [t=37] [guia=inicio.adicionar-bloco]
2. Em `Escolha o tipo`, clique em `Notícias`. [t=39] [guia=inicio.tipo-noticias]
3. Em `Escolha o modelo`, clique em `Modelo 1`. [t=39] [guia=inicio.modelo-1]
4. Preencha `Título do bloco`, se quiser um título próprio. [guia=inicio.titulo]
5. Preencha `Subtítulo (opcional)`, se quiser. [guia=inicio.subtitulo]
6. Clique em `Adicionar bloco` na janela. [guia=inicio.salvar-bloco]

Este exemplo mantém os demais campos na configuração inicial. Tipos como `Guia Comercial`, `Vagas de Emprego`, `Eventos`, `Classificados` e `Publicidade` têm modelos e campos próprios. Tipos ligados a módulos só são oferecidos quando o módulo está ativo; Publicidade não depende desse controle.

### editar o título de um bloco

1. Na linha do bloco desejado, clique no lápis com a descrição `Editar`. [t=44] [guia=inicio.editar]
2. Altere `Título do bloco`, quando esse campo existir para o tipo escolhido. [guia=inicio.titulo]
3. Clique em `Salvar`. [guia=inicio.salvar-bloco]

### trocar o modelo visual

Esta opção aparece para tipos que oferecem mais de um modelo.

1. Na linha do bloco desejado, clique em `Editar`. [t=44] [guia=inicio.editar]
2. Clique em `Alterar estilo de layout`. [guia=inicio.alterar-modelo]
3. Clique em `Modelo 1` para usar o primeiro modelo desse tipo. [guia=inicio.modelo-1]
4. Clique em `Salvar`. [guia=inicio.salvar-bloco]

### ocultar ou mostrar um bloco

1. Na linha desejada, clique no olho com a descrição `Ocultar` para esconder ou `Exibir` para mostrar de novo. [t=44] [guia=inicio.ocultar-exibir]

### remover um bloco

1. Na linha desejada, clique na lixeira com a descrição `Remover`. [t=47] [guia=inicio.remover]
2. Na confirmação `Remover este bloco?`, clique em `Remover`. [guia=confirmacao.confirmar]

## resultado

Reordenar e ocultar salvam na própria ação. Incluir e editar só salvam pelo botão da janela. Os avisos são `Bloco adicionado`, `Bloco atualizado` ou `Bloco removido`. Ocultar mantém o bloco cadastrado; remover retira o bloco da lista.

## desvios

Se reordenar falhar, a lista volta à ordem anterior e mostra o erro. Falha ao adicionar ou editar mantém a janela aberta com o motivo. Não trate a prévia como confirmação de salvamento.

## tipos e campos

- Tipos de bloco: `Notícias`, `Guia Comercial`, `Vagas de Emprego`, `Eventos`, `Guia Turístico`, `Classificados`, `Publicidade`, `Categorias`, `A Voz do Povo`, carrossel de sorteios, `Melhores da Cidade` e campeões do Melhores da Cidade.
- Modelos variam por tipo (grade, carrossel, lista compacta, agenda etc.). Campos comuns: `Título do bloco`, `Subtítulo (opcional)` e `Exibir título`; alguns tipos pedem categoria.
- A janela mostra prévia do bloco com o conteúdo real do portal.
- A ordem da lista é a ordem do site; após reordenar, o site já reflete ao atualizar a home.

## fontes

- `portal-cidade/frontend/src/app/painel/configuracoes/layout/inicio/page.tsx:49` — tipos e módulos.
- `portal-cidade/frontend/src/app/painel/configuracoes/layout/inicio/page.tsx:870` — alça e ações da linha.
- `portal-cidade/frontend/src/app/painel/configuracoes/layout/inicio/page.tsx:1064` — tipo e modelo.
- `portal-cidade/frontend/src/app/painel/configuracoes/layout/inicio/page.tsx:1142` — troca de modelo e campos.
- `portal-cidade/frontend/src/app/painel/configuracoes/layout/inicio/page.tsx:1432` — salvamento e erros.

## lacunas

Sem validação no navegador. Os campos específicos dos demais tipos e modelos não foram detalhados; este roteiro de inclusão usa Notícias e Modelo 1.
