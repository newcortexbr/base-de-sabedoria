# /painel/parceiros (Parceiros)

Arquivo: `app/painel/parceiros/page.tsx` (1399 linhas; leitura até `:1052`)

## rota e gate
- `/painel/parceiros`. client, `Header`. gate `PainelGuard`; item `Parceiros` na parte Comercial do menu (`Sidebar.tsx:273`). sem gate de módulo em `painel-menu.ts`.
- o liga/desliga do programa NÃO mora aqui: a tela mostra `Programa ligado` / `Programa desligado` com o link `desligar` / `ligar`, que leva a `Configurações` > `Módulos do Portal` (`:973-983`, D-245).

## o que faz
- gestão do programa de parceiros (quem indica clientes e ganha comissão): planos, cadastro de parceiros, comissões a pagar, split no Asaas.

## ações e campos
- resumo no topo (parceiros ativos, clientes indicados, "pagar por fora", atenção para comissões atrasadas e parceiros sem carteira).
- `Planos de parceiro`: botão `Editar` em cada plano (modal `Editar plano`: `Nome do plano *`, `Periodicidade`, `Valor (R$)`, `% de venda`, `% residual`, caixa de plano ativo; `Salvar`) e a chave `Oferecer o plano gratuito` (`alternarGratuito`, `:724`).
- `Seus parceiros`: busca `Buscar` ("Nome, e-mail ou número"), filtros `Plano`, `Como recebe` (`Automático (Asaas)` ou `Por fora`) e `Situação` (`Ativos`, `Desativados`, `Removidos`), chips, paginação, `Ver quem` (parceiros sem carteira, `:815`).
- botão `Novo parceiro`; modal `Novo parceiro` / `Editar parceiro` (`ModalParceiro`, `:262`): `Nome *`, `E-mail (login) *`, `Senha inicial *`, `Telefone`, `WhatsApp`, plano, forma de pagamento (por fora, ou pelo Asaas com `CPF ou CNPJ do parceiro *` e `E-mail da cobrança *`); botão `Salvar` (ou `Salvar e gerar link` no Asaas).
- por linha (ícones com dica, `:590-612`): `Ver link de pagamento` (cobrança pendente), `Editar dados e plano`, `Trocar a senha` (modal `Resetar senha — <nome>`, `Nova senha`, `Redefinir`, `:514`), `Desativar` / `Reativar` e `Excluir` (irreversível). Desativar/reativar e excluir pedem confirmação em aviso do painel (`avisos.confirmar`, `:837,855`).
- interruptor do split Asaas (`alternarSplitAsaas`, `:837`).
- bloco `Comissões para pagar por fora` com `Extrato de pagas` e `Ver todas as comissões`; aviso `Precisa da sua atenção` com `Pagar agora` e `Ver quem`; modal `Comissões` de abas, dar baixa (com comprovante) e extrato (`components/painel/ComissoesParceiros.tsx`).

## apis
- `adminApi.parceiros` (`lib/admin-api.ts:1005-1064`): `planos.listar/atualizar`, `listar(filtros)`, `criar`, `definirPlano`, `atualizar`, `excluir`, `resetarSenha`, `resumo`, `config.obter/atualizar`, `comissoes.listar/darBaixa/anexarComprovante`.

## estados
- carregamento e erros separados por bloco: `error` (lista), `erroPlanos`, `erroResumo` (`data-testid=erro-resumo-parceiros`), `erroComissoes`, `erroAcaoLinha`, `feedbackConfig`; erro de formulário em `role=alert`. falha do resumo some só os cartões, mas mostra o erro.
- registro "Removido" mostra selo e esconde e-mail e ações (`:949-953`).

## possíveis problemas
- fato: `loadConfig` coloca a falha no `feedbackConfig` (`:742`); se `config` não carregar, `splitAtivo` vira `false` (`:700`) e `programaLigado` fica `false`, mas o selo de visibilidade some (`:1003`). o rótulo "por fora" nas linhas pode ficar errado nesse caso (hipótese).
- fato: `removido` é lido em runtime porque o tipo `ParceiroAdmin` não declara o campo (`:901-906`); se o backend renomear, o selo some sem erro de tipo.
- fato: `loadParceiros` ignora erro da recarga em ações; só a recarga inicial mostra `error` (`:715-718`).
- fato: a lista sem filtro e a filtrada vêm do servidor sem paginação; a página corta no cliente (`:979-981`), então listas grandes carregam inteiras.
- hipótese: o salvar de plano e de parceiro envolve percentuais e cobrança (dinheiro): exige conferência do servidor; a tela só formata (`formatPercentual`, `:51`).
- não li os blocos de comissões, modais e rodapé (`:1053` em diante) com detalhe.

## equivalente em minha-conta
- não. `minha-conta` (cliente do portal) só tem um aviso de parceiro em `page.tsx:35-48` e a escolha de plano. o lado do parceiro é uma área própria `app/parceiro` (login, `MeuPlano.tsx`), não `minha-conta`. aqui o admin cria, bloqueia, reseta senha e paga comissão em nome do parceiro.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-parceiros.png](../prints/painel-parceiros.png) · dados brutos: [json](../prints/json/painel-parceiros.json)
- aberta em `/painel/parceiros`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "23 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 23 itens em coluna) (10,18,255,871)
- [título] "Parceiros" — topo, no topo da página, à esquerda (300,19,82,28)
- [título] "Parceiros" — conteúdo, na parte de cima, à esquerda (300,99,109,32)
- [botão] "Novo parceiro" — conteúdo, na parte de cima, à direita (1108,99,148,36)
- [link] "ligar" — conteúdo, na parte de cima, ao centro (577,107,23,16)
- [botão] "Pagar por foraR$ 0,00nada a pagar agora" — conteúdo, na parte de cima, à direita (784,179,230,103)
- [botão] "Pelo Asaas, sozinhoR$ 0,00repasse automático desligado" — conteúdo, na parte de cima, à direita, logo abaixo de “Novo parceiro” (1026,179,230,103)
- [título] "Comissões para pagar por fora" — conteúdo, na parte de cima, ao centro (353,322,406,24)
- [botão] "Extrato de pagas" — conteúdo, na parte de cima, à direita, logo abaixo de “Pagar por foraR$ 0,00nada a pagar a” (903,324,139,38)
- [botão] "Ver todas as comissões" — conteúdo, na parte de cima, à direita, logo abaixo de “Pelo Asaas, sozinhoR$ 0,00repasse a” (1050,324,185,38)
- [título] "Seus parceiros" — conteúdo, no meio da tela, à esquerda (353,571,115,24)
- [campo] "Buscar" — conteúdo, no meio da tela, ao centro, logo abaixo de “Seus parceiros” (321,644,300,38)
- [botão] "Limpar filtros" — conteúdo, no meio da tela, à direita (1120,644,115,38)
- [lista de opções] "Plano" — conteúdo, no meio da tela, ao centro (633,646,150,36)
- [lista de opções] "Como recebe" — conteúdo, no meio da tela, à direita (795,646,150,36)
- [lista de opções] "Situação" — conteúdo, no meio da tela, à direita (957,646,150,36)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
- [título] "Planos de parceiro" — conteúdo, faixa larga mais abaixo (rolando a página) (300,908,956,24)
- [botão] "Editar" — conteúdo, mais abaixo (rolando a página), ao centro (640,1088,277,38)
- [botão] "Editar" — conteúdo, mais abaixo (rolando a página), à direita (962,1088,277,38)
- [checkbox] "Oferecer o plano gratuito" — conteúdo, mais abaixo (rolando a página), à esquerda (317,1090,16,16)
- [botão] "Editar" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Oferecer o plano gratuito” (317,1120,277,38)
- [título] "Grupo de WhatsApp dos parceiros" — conteúdo, mais abaixo (rolando a página), ao centro (369,1226,264,24)
- [campo] "Link do grupo" — conteúdo, faixa larga mais abaixo (rolando a página) (321,1292,808,44)
- [botão] "Salvar" — conteúdo, mais abaixo (rolando a página), à direita (1137,1292,98,44)
- [checkbox] "Mostrar o botão para os parceiros" — conteúdo, mais abaixo (rolando a página), à esquerda, logo abaixo de “Link do grupo” (321,1351,13,13)
- [título] "Como você paga os parceiros" — conteúdo, mais abaixo (rolando a página), ao centro (353,1434,228,24)
- [checkbox] "Mandar a comissão direto pelo AsaasDesligado: você paga todos os parce" — conteúdo, mais abaixo (rolando a página), à esquerda (321,1476,20,20)

## o que você vê
Parceiros são pessoas que indicam clientes para o seu portal e ganham comissão por isso; aqui você cadastra, define planos e paga as comissões.
- Programa ligado/desligado: mostra se o programa está no ar. desligado, a página de cadastro e a área dos parceiros saem do ar, mas as comissões já geradas continuam aqui. liga e desliga em `Configurações` > `Módulos do Portal`, não nesta tela. Na parte Comercial do menu, clique em `Parceiros`.
- resumo: Parceiros ativos, Clientes indicados, Pagar por fora (comissões pagas à mão) e "Precisa da sua atenção" ("Ver quem" mostra quais).
- Planos de parceiro: quanto cada plano custa, a periodicidade e quanto o parceiro ganha: "% de venda" na primeira venda e "% residual" nas renovações. "Oferecer o plano gratuito" liga ou desliga o plano grátis.
- Como você paga os parceiros / Mandar a comissão direto pelo Asaas: ligado, a parte do parceiro cai na carteira Asaas dele quando o cliente paga pelo link. desligado, você paga todos por fora.
- Seus parceiros: busca por nome, e-mail ou número; filtros Plano, Como recebe (Automático Asaas ou Por fora) e Situação (Ativos, Desativados, Removidos).
- Novo parceiro / Editar: nome, e-mail de login, senha inicial, telefone, WhatsApp, plano e, se o plano é pago, CPF/CNPJ e e-mail da cobrança. "Salvar e gerar link" cria o link de pagamento; o plano vale quando ele pagar.
- ícones da linha: `Editar dados e plano`, `Trocar a senha`, `Ver link de pagamento`, `Desativar` / `Reativar` e `Excluir`.
- `Comissões para pagar por fora` / `Pagar agora`: pague por Pix ou transferência e depois marque como paga. `Extrato de pagas` mostra o que já foi pago.
