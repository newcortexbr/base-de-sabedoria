# /painel/configuracoes/modulos (Módulos do Portal)

Arquivos: `app/painel/configuracoes/modulos/page.tsx` (300 linhas), `../layout/actions.ts` (`revalidarLayout`)

## rota e gate
- `/painel/configuracoes/modulos`. client. gate `PainelGuard` (admin/master). a rota em si não depende de módulo (Configurações ficam fora de `MODULO_POR_PREFIXO_DE_ROTA`), então nunca se tranca sozinha. menu: "Módulos do Portal" (`components/painel/Sidebar.tsx:260`).

## o que faz
- liga e desliga os módulos do portal (Guia, Vagas, Classificados etc.) mais o Programa de Parceiros. desligar tira o módulo do ar para visitantes (navegação, API pública, sitemap, home); nenhum dado é apagado (texto `:134-142`).
- o Programa de Parceiros não é módulo do catálogo: vem à parte (`parceiros`) e usa a chave local `__programa_de_parceiros`, que nunca vai para `modulos_desativados` (`:7-16`, D-245).

## campos e ações
- um interruptor por módulo; estado só local até "Salvar módulos" (nada de salvar a cada clique, `:28-30`).
- "Salvar módulos" (`pedirSalvar`, `:62`): se a mudança desliga algum módulo hoje ligado, abre confirmação listando os rótulos (`confirmando`); religar ou mudar nada salva direto. aviso específico `aviso-desligar-parceiros`.
- "Cancelar" volta os interruptores ao estado do servidor (`cancelar`, `:55`).
- `salvar` (`:79`): envia a lista de desativados + `parceiros_ligado`, reaplica a resposta como verdade, chama `revalidarLayout` (melhor esforço) e então `window.location.reload()` (`:122`), para a Sidebar (que lê os módulos uma vez) refletir a mudança.

## apis (`lib/admin-api.ts`)
- `modulos.get` (GET `/modulos/`, `:2149`)
- `modulos.atualizar` (PATCH `/modulos/`, corpo `{modulos_desativados, parceiros_ligado}`, `:2150`)
- Server Action `revalidarLayout` (`layout/actions.ts:33`)

## estados
- carregando; falha de carga: cartão vermelho com a mensagem (`:148`), sem botão de repetir (só recarregar a página).
- vazio: "Nenhum módulo disponível para este portal." (`:154`).
- erro ao salvar: fecha a confirmação, mostra `feedback` vermelho e mantém os interruptores como o usuário deixou (`:114-119`).
- sucesso: "Módulos salvos. Atualizando o menu…" seguido de reload.

## em nome do cliente
- não age em nome de cliente. desligar módulo afeta o que os visitantes e os clientes do portal veem; as rotas do painel desse módulo passam a mostrar `ModuloDesativado` (`app/painel/layout.tsx:96`), e as APIs do módulo respondem 404 (comentário `layout.tsx:48`).

## possíveis problemas
- fato: `desativados` é montado só a partir dos módulos devolvidos por `modulos.get` (`:83-85`) e o PATCH envia a lista completa. um módulo desligado no servidor que não esteja nessa resposta seria religado ao salvar (hipótese, depende do contrato do backend; não verifiquei).
- fato: o reload é incondicional após sucesso (`:122`); qualquer alteração em outro cartão da página se perde (aqui só há um formulário, risco baixo).
- fato: a mensagem "agora mesmo" (`:139`) pressupõe a revalidação do cache; ela é melhor esforço e a falha só vai para `console.error` (`:111`). o visitante pode ver a versão antiga até o cache expirar (hipótese).
- fato: o gate de rota do painel usa `/config/` público e, se falhar, libera tudo (`layout.tsx:56-58`); então a tela do módulo desligado depende de a config carregar.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-configuracoes-modulos.png](../prints/painel-configuracoes-modulos.png) · dados brutos: [json](../prints/json/painel-configuracoes-modulos.json)
- aberta em `/painel/configuracoes/modulos`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Classificados · Guia Turístico / Eventos · Artigos · Orçamentos Online · A Voz do Povo · Melhores da Cidade · Banners Publicitários …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,949)
- [título] "Módulos do Portal" — conteúdo, no topo da página, ao centro (442,36,672,36)
- [botão] "NotíciasLigado (e outros 9 parecidos)" — conteúdo, na parte de cima, ao centro (repetido ×10, um sob o outro) (471,202,614,52)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [botão] "Melhores da CidadeLigado" — conteúdo, no meio da tela, ao centro (471,822,614,52)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
- [botão] "Programa de ParceirosDesligado" — conteúdo, no meio da tela, ao centro, logo abaixo de “Melhores da CidadeLigado” (471,884,614,52)
- [botão] "Salvar módulos" — conteúdo, no fim da página, ao centro (471,1051,160,44)
- [botão] "Cancelar" — conteúdo, no fim da página, ao centro (647,1051,101,44)

## o que você vê
Liga e desliga as partes do portal (Notícias, Guia Comercial, Vagas, Classificados etc.).
- cada linha é um módulo com um interruptor: "Ligado" está no ar, "Desligado" está fora do ar para os visitantes.
- desligar tira o módulo do site na hora (menu, página inicial e buscadores) e também a seção correspondente do seu painel. Nenhum dado é apagado: tudo volta ao religar.
- Programa de Parceiros: liga ou desliga o cadastro e a área dos parceiros. Desligado, a aba Parceiros continua no painel para pagar as comissões já geradas.
- os interruptores só valem depois de "Salvar módulos". Se algum módulo for desligado, aparece "Isto vai tirar do ar: …" e é preciso clicar em "Confirmar e desligar".
- Cancelar: volta os interruptores como estavam.
- depois de salvar aparece "Módulos salvos. Atualizando o menu…" e a página recarrega.
