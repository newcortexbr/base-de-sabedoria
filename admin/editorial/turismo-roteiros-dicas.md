---
id: editorial-turismo-roteiros
titulo: "turismo: roteiros"
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
aqui você cria e cuida dos roteiros de turismo, que são passeios com várias paradas. Roteiros têm tela própria, separada de pontos turísticos, eventos e dicas.

## pré-requisitos/permissões
Entrar no painel como administrador, com o módulo de turismo ativo no portal.

## passos

1. No menu da esquerda, na parte `Conteúdo`, clique em `Guia Turístico / Eventos` e depois em `Roteiros`. [guia=menu:/painel/turismo/roteiros] [t=7]
2. Para cadastrar, clique em `+ Novo Roteiro`. [guia=roteiros.novo] [t=15]
3. Envie a foto de capa clicando em `Foto de capa`. [guia=roteiros.foto] [t=18]
4. Escreva o `Título *` do roteiro. [guia=roteiros.titulo] [t=21]
5. Preencha o `Badge`, que é o selo do roteiro (por exemplo, "Mais popular"). [guia=roteiros.badge] [t=21]
6. Preencha a `Duração`. [guia=roteiros.duracao] [t=23]
7. Escreva a `Descrição`. [guia=roteiros.descricao] [t=23]
8. Preencha o `Ponto de partida`. [guia=roteiros.partida] [t=25]
9. Em `Paradas do roteiro`, clique em `+ Adicionar parada`. [guia=roteiros.adicionar-parada] [t=28]
10. Escreva o `Nome da parada *`. [guia=roteiros.parada-nome] [t=31]
11. Escreva a `Descrição` da parada. [guia=roteiros.parada-descricao] [t=32]
12. Preencha o `Tempo sugerido`. [guia=roteiros.parada-tempo] [t=33]
13. Clique em `Adicionar` para guardar a parada. Para cada nova parada, repita os quatro passos anteriores. [guia=roteiros.parada-confirmar]
14. Se quiser, adicione fotos em `Galeria de fotos e vídeos`. [guia=galeria.adicionar-fotos]
15. Clique em `Salvar`. [guia=roteiros.salvar] [t=43]
16. Confira o roteiro na lista. [guia=roteiros.editar]
17. Para mudar um roteiro, clique em `Editar` na linha do roteiro que você quer. [guia=roteiros.editar]

## resultado
roteiros e dicas ficam em suas áreas próprias de Turismo. Galerias são ligadas ao registro e sua apresentação pública é determinada pelo conteúdo e pelas regras do produto.

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
