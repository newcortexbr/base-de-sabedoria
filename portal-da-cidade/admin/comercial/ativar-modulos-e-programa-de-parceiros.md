---
id: ativar-modulos-e-programa-de-parceiros
titulo: "ativar ou desativar módulos e o Programa de Parceiros"
publico:
  - admin
modulo: configurações
categoria: admin
aba: nao-se-aplica
tipo_problema: operacao
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos: []
---

## objetivo

Aqui você escolhe quais módulos do portal ficam ligados e se o Programa de Parceiros está ativo.

## pré-requisitos

- Ter acesso administrativo ao portal.

## passos

1. No menu da esquerda, na parte `Sistema`, abra `Configurações`. [guia=sidebar.grupo-configuracoes]
2. Clique em `Módulos do Portal`. [guia=menu:/painel/configuracoes/modulos]
3. Na linha do módulo ou do `Programa de Parceiros`, clique na chave para deixá-la `Ligado` ou `Desligado`, conforme deseja. [guia=configuracoes-modulos.chave]
4. Clique em `Salvar módulos`. [guia=configuracoes-modulos.salvar]
5. Se aparecer a confirmação de desligamento, clique em `Confirmar e desligar` após conferir os itens que sairão do ar. [guia=configuracoes-modulos.confirmar-desligar]

## resultado

Aparece `Módulos salvos` e a página recarrega para atualizar o menu. Nenhum dado é apagado.

## desvios

A confirmação aparece depois de clicar em `Salvar módulos`, somente quando você está desligando algo. Desligar módulo oculta seu conteúdo público e a seção correspondente do painel; religar permite voltar a exibi-lo. O Programa de Parceiros é uma exceção no painel: sua área pública e a área dos parceiros saem do ar, mas `Parceiros` permanece para pagar comissões.

O Delivery acompanha o Guia Comercial; não é uma chave independente.

## vídeo

Não foi identificado vídeo específico de `Módulos do Portal` no catálogo consultado.

## quando pedir ajuda

Peça ajuda se a tela mostrar erro ou se o resultado não corresponder ao que você salvou. Não envie senhas, chaves ou comprovantes ao assistente.

## fontes

- `portal-cidade/frontend/src/components/painel/Sidebar.tsx:283`
- `portal-cidade/frontend/src/app/painel/configuracoes/modulos/page.tsx:65`
- `portal-cidade/frontend/src/app/painel/configuracoes/modulos/page.tsx:99`
- `portal-cidade/frontend/src/app/painel/configuracoes/modulos/page.tsx:245`

## lacunas

Conferência documental com o código em b2f62d3f e as transcrições/legendas do catálogo. Sem validação no navegador, execução financeira ou teste de integração nesta auditoria.
