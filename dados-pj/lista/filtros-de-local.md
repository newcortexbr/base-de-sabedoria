---
id: pj-filtros-de-local
titulo: "filtros de local: estado, cidades, bairros e DDD"
publico:
  - cliente
modulo: lista
aba: Gerar Lista de Empresas
tipo_problema:
  - estado
  - cidades
  - municipios
  - bairros
  - ddd
  - territorio
  - limite-de-cidades
  - dados-pj
status: rascunho-documental
revisado_em: 2026-10-21
validacao: codigo-e-video
videos:
  - JXWDV_IiAWQ
  - IKdKLgi-e94
produto: dados-pj
---

## objetivo
limitar a lista à região certa.

## pré-requisitos
- licença ativa.

## explicação
- `Estado`: só o estado das suas licenças ativas. com um estado, o campo vem travado (`Seu plano libera apenas este estado.`). com licenças em mais de um estado, escolha um por lista.
- não dá para gerar lista de outro estado.
- `Cidades`: de 1 a 3 por lista, todas do estado. a tela não deixa marcar a quarta e o `EXPORTAR LISTA` fica desabilitado sem cidade (`Selecione de 1 a 3 municípios.`).
- outras 3 cidades exigem outra lista (outro crédito).
- `Bairros (opcional)`: aparecem depois de escolher a cidade. os nomes vêm como estão na Receita, às vezes com grafias diferentes; marque todas as variantes. para cidade pequena, o vídeo sugere não filtrar bairro e filtrar depois no arquivo.
- `DDD (opcional)`: vem a empresa com ao menos um dos seus até 3 telefones naquele DDD. útil para tirar empresas com telefone de outra região (ex.: matriz em outro estado). pode marcar vários.

## passos
1. confira o `Estado`.
2. marque de 1 a 3 `Cidades`.
3. (opcional) marque `Bairros` e `DDD`.

## resultado
a lista fica restrita à sua região.

## se der errado
- `Sua plataforma é do ... Você só pode consultar empresas desse estado.` ou `Selecione de 1 a 3 municípios.`: veja `pj-erros-ao-gerar-lista`.
