---
id: pj-erros-ao-gerar-lista
titulo: "erros ao gerar a lista: mensagens e o que fazer"
publico:
  - cliente
modulo: lista
aba: Gerar Lista de Empresas
tipo_problema:
  - erro-ao-exportar
  - sem-credito
  - nenhum-resultado
  - falha-na-exportacao
  - estado-nao-permitido
  - dados-pj
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
videos: []
produto: dados-pj
---

## objetivo
entender a mensagem que apareceu ao gerar a lista.

## pré-requisitos
- nenhum.

## explicação
- `Você já usou suas 2 exportações desta semana. O saldo volta na segunda-feira.`: acabaram os créditos (`pj-creditos-semanais`).
- `Nenhum resultado encontrado` / `Nenhum dado encontrado com os filtros informados. Seu crédito não foi consumido.`: os filtros não acharam empresas. afrouxe algum filtro.
- `Não foi possível gerar a lista de empresas` / `Falha ao gerar a exportação. Tente novamente ou refine os filtros.`: erro no processamento. o crédito volta. tente de novo, de preferência com mais filtros.
- `A exportação expirou. Tente novamente.`: a lista ficou parada tempo demais; o crédito volta.
- `Selecione de 1 a 3 municípios.`: escolha entre 1 e 3 cidades.
- `Sua plataforma é do ... (UF). Você só pode consultar empresas desse estado.` ou `Você só pode consultar um estado por vez.`: use só o estado liberado.
- `O município ... não pertence ao ...`: a cidade não é do estado escolhido. recarregue a página e escolha de novo.
- `No momento não é possível validar os municípios. Tente novamente em alguns minutos ou entre em contato com o suporte.`: falha temporária.
- `Estado não selecionado`: escolha o estado antes de exportar.
- `Sua plataforma ainda não foi liberada. Entre em contato com o suporte.`: `pj-licenca-suspensa-ou-sem-acesso`.
- `Sua assinatura está inativa...`, `Sua assinatura expirou em ...` ou `Nenhuma assinatura encontrada para este usuário...`: a conta precisa de ajuste. abra um chamado.
- `Erro interno ao iniciar exportação.` ou `Não foi possível verificar o progresso da exportação...`: tente de novo em alguns minutos.

## passos
1. leia a mensagem na janela de exportação.
2. siga a ação acima.
3. confira no `Dashboard` se o crédito voltou (`Restam`).

## resultado
você corrige o filtro ou sabe que precisa do suporte.

## se der errado
abra um chamado em `Suporte` na Área do Cliente com a mensagem exata e o horário.
