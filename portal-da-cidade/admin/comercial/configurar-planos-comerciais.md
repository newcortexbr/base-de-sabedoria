---
id: configurar-planos-comerciais
titulo: "ajustar planos comerciais e o preço das vagas"
publico:
  - admin
modulo: planos
categoria: admin
aba: nao-se-aplica
tipo_problema:
  - operacao
  - cobrar mais caro
  - preço do classificado
  - valor do classificado
  - alterar preço do plano
status: rascunho-documental
revisado_em: 2026-10-24
validacao: docs-e-codigo
videos:
  - 31ftVMQ_yr4
---

## objetivo

Aqui você ajusta o nome, o preço e a oferta dos planos comerciais. O exemplo abaixo mostra o caminho completo para mudar o valor do anúncio de vaga de emprego.

## pré-requisitos

- Ter acesso administrativo ao portal.
- Escolher o plano pago e sua periodicidade; o plano gratuito não é um anúncio pago.

## passos

1. No menu da esquerda, na parte `Comercial`, clique em `Meus Planos`. [t=10] [guia=menu:/painel/planos]
2. No cartão `Vagas de Emprego`, clique em `Gerenciar` ou `Definir preço`, conforme o texto exibido. [t=88] [guia=planos.secao-vagas]
3. Se houver abas, clique na periodicidade do plano que deseja alterar, como `Mensal` ou `Pagamento Único`. [t=95] [guia=planos.periodicidade]
4. No cartão do plano desejado, clique em `Editar`. [t=154] [guia=planos.editar]
5. Se quiser mudar o nome, preencha `Nome do plano *`. [t=157] [guia=planos.nome]
6. Preencha `Preço *` com o valor que deseja cobrar. [t=157] [guia=planos.preco]
7. Se precisar mudar a oferta, ajuste `Colocar este plano à venda`. [t=159] [guia=planos.colocar-a-venda]
8. Clique em `Salvar`. [guia=planos.salvar]

## resultado

Ao salvar com sucesso, a janela fecha e a lista de planos é atualizada.

## outras seções

`Meus Planos` reúne os cartões das seções do catálogo. Para outra seção com planos, entre no cartão correspondente; publicidade tem uma tela própria pelo botão `Gerenciar espaços`.

## o que muda e o que fica fixo

Na janela de edição do plano fixo, `Como o cliente paga` é somente leitura. `Limites e benefícios fixos` também não são editáveis ali: a duração (quantos dias o anúncio fica no ar), os limites e os benefícios são definidos pela plataforma. Você muda só o nome, o preço e se o plano está à venda. O preço pertence ao plano e à sua periodicidade, não a uma vaga individual já publicada. Os nomes e valores podem variar por portal.

## veja também

`mudar-valor-do-anuncio-de-vaga.md` responde diretamente à troca do valor de vagas.

## limites da orientação

Reajuste de contratos vigentes e de faturas já emitidas não foi verificado. Não prometa que alterar o preço recalcula cobranças anteriores.

## quando pedir ajuda

Peça ajuda se a tela mostrar erro ou se o resultado não corresponder ao que você salvou. Não envie senhas, chaves ou comprovantes ao assistente.

## fontes

- `portal-cidade/frontend/src/app/painel/planos/page.tsx:129`
- `portal-cidade/frontend/src/app/painel/planos/[secao]/Escada.tsx:50`
- `portal-cidade/frontend/src/app/painel/planos/[secao]/Degrau.tsx:109`
- `portal-cidade/frontend/src/app/painel/planos/[secao]/JanelaEditarPlano.tsx:35`
- `portal-cidade/frontend/src/app/painel/planos/[secao]/pecas.tsx:125`
- `portal-cidade/backend/comercial/catalogo.py:88`

## lacunas

Conferência documental com o código em b2f62d3f e as transcrições/legendas do catálogo. Sem validação no navegador, execução financeira ou teste de integração nesta auditoria. Tempos indicam trechos da legenda; passos sem tempo não foram localizados no vídeo.
