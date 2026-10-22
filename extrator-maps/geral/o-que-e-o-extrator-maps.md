---
id: ext-o-que-e
titulo: "o que é o Extrator Maps e para que serve"
publico:
  - cliente
modulo: geral
aba: Extrator Maps
tipo_problema:
  - extrator-maps
  - extrator-google
  - prospeccao
  - o-que-e
status: rascunho-documental
revisado_em: 2026-10-21
validacao: codigo-e-video
videos:
  - F136_v1JyRY
  - R9FCgunNxFE
---

## objetivo
entender o que o Extrator Maps faz, o que ele não faz e por que usa créditos.

## pré-requisitos
- nenhum. este artigo é só explicação.

## explicação
- o Extrator Maps é um painel web em que você gasta créditos para extrair do Google Maps listas de empresas de uma ou mais cidades do Brasil, com recorte opcional por bairro e por nicho. o resultado é uma planilha `CSV` ou `XLSX`.
- há dois usos, que são a escolha `Finalidade` da extração:
  - `Prospecção`: lista de empresas com telefone, e-mail, site e endereço para a sua equipe comercial entrar em contato.
  - `Base para Portal`: planilha no formato padrão para importar as empresas no Guia Comercial do Portal da Cidade (ver `ext-importar-no-guia-do-portal`).
- no vídeo, a orientação é usar os créditos de boas-vindas para uma primeira extração maior e assim alimentar o portal, que de outra forma começa "vazio"; depois contatar as empresas oferecendo um plano com mais destaque.
- ao contrário das outras ferramentas, aqui existe venda de créditos: a New Córtex paga pelo acesso aos dados do Google, então o uso em volume exige comprar créditos.
- você pode pesquisar qualquer estado ou cidade, não só o território que contratou.
- o que o Extrator não faz: não envia mensagens (WhatsApp ou e-mail) para as empresas, não enriquece dados além da fonte e não importa nada no Portal sozinho (a importação é manual). não há subusuários nem autocadastro.
- diferença para o DadosPJ: o DadosPJ traz a base de CNPJs da Receita Federal; o Extrator Maps traz o que está no Google Maps, que costuma ter contatos melhores para falar direto no WhatsApp.
- sobre o acesso, veja `ext-entrar-pela-area-do-cliente`.

## passos
1. para entrar, siga `ext-entrar-pela-area-do-cliente`.
2. para fazer a primeira extração, siga `ext-nova-extracao-passo-a-passo`.

## resultado
você sabe qual finalidade escolher e que cada registro devolvido custa créditos.

## se der errado
- dúvida sobre cobrança de créditos: veja `ext-creditos-como-funcionam`.
- qualquer problema: botão `Suporte pelo WhatsApp`, em todas as telas do Extrator.
