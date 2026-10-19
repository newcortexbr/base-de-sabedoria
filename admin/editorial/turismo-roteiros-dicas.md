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
1. Abra `Roteiros` (`/painel/turismo/roteiros`) a partir das opções da área de Turismo.
2. Use as ações da lista para criar, editar ou abrir fotos do roteiro. A galeria fica associada ao roteiro existente (`/painel/turismo/roteiros/[id]/fotos`).
3. Para dicas, abra `/painel/turismo/dicas`.
4. Após salvar alterações, volte à listagem e confira o registro.

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
