---
id: editorial-turismo-roteiros
titulo: turismo: roteiros e dicas
publico:
  - administrador do portal
modulo: Turismo
categoria: conteúdo
aba: Roteiros
tipo_problema: cadastro
status: rascunho-documental
revisado_em: 2026-10-15
validacao: docs-e-codigo
videos:
  - CMEOWthwqtI
---

## objetivo
encontrar as telas de roteiros e dicas e administrar seu conteúdo sem confundi-las com pontos turísticos e eventos.

## pré-requisitos/permissões
use o painel do portal, com permissão e módulo Turismo disponíveis. O código do servidor é a fonte da autorização.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Turístico / Eventos` e depois em `Roteiros` (`/painel/turismo/roteiros`).
2. Para cadastrar, clique em `+ Novo Roteiro`. Para mudar um roteiro, clique em `Editar` na linha dele.
3. No formulário, adicione as paradas em `Paradas do roteiro` e as fotos em `Galeria de fotos e vídeos`. O endereço antigo de fotos (`/painel/turismo/roteiros/[id]/fotos`) agora só leva de volta à lista.
4. Clique em `Salvar` e confira o roteiro na lista.
5. Para as dicas, abra a página `Dicas para Visitantes` em `/painel/turismo/dicas`. Clique em `Nova Dica`, preencha e clique em `Salvar Dica`.

## resultado
roteiros e dicas ficam em suas áreas próprias de Turismo. Galerias são ligadas ao registro e sua apresentação pública é determinada pelo conteúdo e pelas regras do produto.

## desvios
- A tela de roteiros tem testes persistentes para revalidação de conteúdo; isso não substitui conferência do estado salvo.
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
