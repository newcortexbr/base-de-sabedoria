# admin x cliente

premissa do produto: o admin do portal consegue fazer tudo que os clientes fazem. por isso, no suporte, o perfil admin deve ler as duas bases (admin + cliente). o custo disso está em [custo do suporte](../custo-suporte.md).

## onde o admin cobre o cliente
- conteúdo: notícias, vagas, classificados, artigos (blog), eventos, guia e cupons têm telas de cadastro e edição no painel.
- clientes: em `/painel/clientes/[id]` o admin vê cadastro, bloqueia, troca senha, vê contratações e faturas e confirma pagamento em nome do cliente ([painel-clientes-id](telas/painel-clientes-id.md)).
- planos: o admin cria, precifica e ativa planos por seção em `/painel/planos/[secao]`; o cliente só contrata.
- delivery: pedidos e configurações têm equivalente nos dois lados.

## onde o comportamento diverge (fato de código)
- classificados: admin alterna ativo/encerrado (`painel/classificados/page.tsx:178`); cliente alterna ativo/pausado.
- formulários diferentes para o mesmo conteúdo: `NoticiaForm` x `FormularioDoJornalista`; `VagaForm` separado em cada lado. regras e campos podem divergir.
- banners: admin registra venda manual, sem pagamento pelo portal, com posições extras (ponto e roteiro); cliente passa por plano e pagamento em `/minha-conta/publicidade`.
- aprovar/reprovar não está nas listas; fica concentrado em `/painel/aprovacoes`.

## onde só existe de um lado
- só admin: insights de vaga (`painel/vagas/[id]/insights`), cardápio de delivery (`painel/delivery/cardapio`; equivalente no cliente não encontrado, hipótese), turismo, utilidade (ônibus, telefones), denúncias, assistente de IA, parceiros, configurações e layout do portal.
- só cliente: matéria patrocinada (contratação), autor/colunista com limite semanal, orçamentos recebidos.
- o admin não enxerga plano, limite nem cobrança de item pago nas telas de classificados e blog.

## implicação para o suporte
- perguntas de admin sobre "como o cliente faz X" precisam da base do cliente; perguntas sobre "como eu faço X pelo cliente" precisam das duas, apontando a tela do painel quando ela existe e avisando quando o comportamento diverge (ex.: pausado x encerrado).
