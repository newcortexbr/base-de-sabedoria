---
id: turismo-roteiros-editar
titulo: "editar um roteiro turístico"
publico:
  - administrador do portal
modulo: Turismo
categoria: conteúdo
aba: Roteiros
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-19
validacao: docs-e-codigo
videos:
  - CMEOWthwqtI
---

## objetivo
aqui você muda um roteiro turístico que já foi cadastrado e salva.

## pré-requisitos/permissões
Entrar no painel como administrador, com o módulo de turismo ativo no portal.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Turístico / Eventos` e depois em `Roteiros`. [guia=menu:/painel/turismo/roteiros]
2. Para mudar um roteiro, clique em `Editar` na linha do roteiro que você quer. [guia=roteiros.editar]
3. Faça as mudanças e clique em `Salvar`. [guia=roteiros.salvar]

## resultado
O roteiro fica com as mudanças.

## desvios
- A tela de roteiros tem testes persistentes para revalidação de conteúdo; isso não substitui conferência do estado salvo.
- Para cadastrar dicas, veja o artigo "turismo: dicas para visitantes". Para mudar a ordem das paradas, use as setas ao lado de cada uma. O endereço antigo de fotos do roteiro agora só leva de volta à lista.
- Link de vídeo do YouTube é aceito em galeria de Turismo segundo o produto; não significa que qualquer URL de vídeo seja aceita.
- Não confunda a rota de eventos, que é módulo separado.

## quando pedir ajuda
peça ajuda se a galeria não puder ser acessada, se salvar retornar erro ou se o roteiro não surgir na listagem após recarga.

## fontes
- `portal-cidade/frontend/src/app/painel/turismo/roteiros/page.tsx:1` — tela de roteiros.
- `portal-cidade/frontend/src/app/painel/turismo/dicas/page.tsx:1` — tela de dicas.
- `portal-cidade/frontend/src/app/painel/turismo/roteiros/[id]/fotos/page.tsx:1` — fotos do roteiro.
- `docs/PRODUCT.md:41` — galeria de Turismo com vídeo do YouTube.
- `docs/PRODUCT.md:193` — independência entre Turismo e Agenda de Eventos.

## lacunas
não verificado visualmente nem por teste nesta tarefa. Rótulos específicos de botões do formulário não são afirmados aqui.
- revisão 2026-10-19: `Dicas para Visitantes` (`/painel/turismo/dicas`) não tem link no menu nem em outra tela do painel; só se chega pelo endereço. A rota `roteiros/[id]/fotos` só redireciona.
