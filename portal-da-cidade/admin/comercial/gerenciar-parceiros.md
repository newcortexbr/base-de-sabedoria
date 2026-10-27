---
id: gerenciar-parceiros
titulo: "cadastrar, editar, desativar e excluir parceiros"
publico:
  - admin
modulo: parceiros
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - operacao
  - cadastrar vendedor
  - revendedor do portal
  - quem vende o portal para mim
tags:
  - parceiro
  - criar
  - editar
  - excluir
  - plano
  - desligar
  - comissao
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - 8gIDPdapN0E
---

## objetivo

Aqui você cadastra um parceiro e escolhe o plano dele. Os percentuais de comissão ficam em `Planos de parceiro` > `Editar` e valem para todos os parceiros daquele plano.

## pré-requisitos

- Ter acesso administrativo ao portal.
- O Programa de Parceiros deve estar ligado e deve existir um plano ativo.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Parceiros`. [t=8] [guia=menu:/painel/parceiros]
2. Clique em `Novo parceiro`. [t=73] [guia=parceiros.novo]
3. Preencha `Nome *`. [t=75] [guia=parceiros.nome]
4. Preencha `E-mail (login) *`. [t=77] [guia=parceiros.email]
5. Preencha `Senha inicial *`, com pelo menos 6 caracteres. [t=77] [guia=parceiros.senha]
6. Se quiser, preencha `Telefone`. [t=77] [guia=parceiros.telefone]
7. Se quiser, preencha `WhatsApp`. [t=80] [guia=parceiros.whatsapp]
8. Escolha um plano em `Plano do parceiro *`. [t=80] [guia=parceiros.plano]
9. Se escolheu um plano pago já acertado fora do portal, selecione `Já paguei / acertei por fora`. [guia=parceiros.plano-por-fora]
10. Clique em `Salvar`. [guia=parceiros.salvar]

## resultado

O cadastro é salvo. No plano pago acertado por fora, o plano vale imediatamente e o sistema não cobra esse acerto.

## outros caminhos

- Para cobrar o plano pelo Asaas, veja `cobrar-plano-de-parceiro-pelo-asaas.md`.
- Para mudar os percentuais de venda e renovação, veja `mudar-comissao-do-plano-de-parceiro.md`.
- Para mudar os dados ou o plano de alguém já cadastrado, veja `mudar-plano-de-um-parceiro.md`.
- Para ligar ou desligar o programa, veja `ativar-modulos-e-programa-de-parceiros.md`.

Na lista `Seus parceiros`, os ícones permitem editar, trocar a senha, desativar e excluir. O e-mail de acesso não pode ser alterado pela janela de edição.

## tela de parceiros

- No topo, o programa aparece ligado e pode ser desligado.
- Cartões: `Parceiros ativos`, `Clientes indicados`, `Pagar por fora` (valor a pagar) e `Pelo Asaas, sozinho` (o que cai na carteira do parceiro sem ação sua).
- `Precisa da sua atenção` lista parceiros sem carteira Asaas (você paga esses por fora) e comissões atrasadas. Some quando não há pendência.
- `Seus parceiros` é a lista completa. `Buscar` aceita nome, e-mail ou número; os filtros são plano, forma de recebimento e `Situação`. Cada linha mostra plano, clientes trazidos e valor a receber.
- Ícones da linha: editar, trocar a senha, `Desativar` (reversível; derruba o login e mantém o cadastro) e `Excluir` (sem volta).

## planos de parceiro

- São três: o gratuito (padrão `Start`, opcional) e dois pagos (padrão `Pro` e `Premium`). Nome, periodicidade, valor e percentuais são seus.
- Plano melhor pode ter comissão maior.
- `% de venda` é o que o parceiro ganha na venda; `% residual` é o que ganha todo mês enquanto o cliente renovar.

## o que o parceiro vê

- Em `Seu link de indicação`, escolhe em `Para qual página?` o destino da divulgação e copia com `Copiar link`. Sem plano ativo o link não funciona.
- Faixa `Grupo dos parceiros` com `Entrar no grupo` (se o convite estiver visível; veja o artigo do grupo de WhatsApp). O atalho também fica fixo no menu lateral.
- Cartões `A receber`, `Recebido`, `Clientes ativos` e `Meu plano`; simulador de ganhos por mês e tabela com a comissão de cada produto vendido.
- Em `Meu plano`, ele mesmo faz o upgrade.

## quando pedir ajuda

Peça ajuda se a tela mostrar erro ou se o resultado não corresponder ao que você salvou. Não envie senhas, chaves ou comprovantes ao assistente.

## fontes

- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:323`
- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:381`
- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:416`
- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:469`
- `portal-cidade/frontend/src/app/painel/parceiros/page.tsx:601`

## lacunas

Conferência documental com o código em b2f62d3f e as transcrições/legendas do catálogo. Sem validação no navegador, execução financeira ou teste de integração nesta auditoria. Tempos indicam trechos da legenda; passos sem tempo não foram localizados no vídeo.
