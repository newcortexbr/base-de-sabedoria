---
id: ac-produto-portal-da-cidade
titulo: "o que é o Portal da Cidade e o que vem incluso"
publico:
  - cliente
produto: portal-da-cidade
modulo: produtos
aba: Meus negócios
tipo_problema:
  - o-que-e-o-portal-da-cidade
  - o-que-esta-incluso
  - duvida-geral
  - como-ganho-dinheiro
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
entender o produto Portal da Cidade e tudo o que você recebe ao contratar uma cidade.

## pré-requisitos
- nenhum.

## explicação
o que é:
- um portal (site) de notícias, guia comercial e serviços da sua cidade, operado por você. a página de compra resume: `O portal da sua cidade, com exclusividade.` e `Uma licença por município. Você opera o portal, vende os anúncios e fica com a receita.`
- é exclusivo: só existe um dono do Portal da Cidade por cidade.

o que vem incluso em cada cidade:
- o site no seu domínio, com certificado de segurança (https), instalado pela própria área do cliente (`Minha plataforma`).
- o painel administrativo, para gerenciar conteúdos e configurações, acessado com a conta da área do cliente (`Entrar com a Área do Cliente`).
- páginas de vendas prontas para divulgar: `Seja parceiro`, `Guia Comercial`, `Vagas de emprego`, `Classificados`, `Banner publicitário`, `Matéria patrocinada / notícias`, `Especialista / colunista`.
- áreas de login para jornalistas, especialistas, empresas/anunciantes e parceiros, e recursos como `Ferramenta de orçamento` e `Voz do Povo`.
- treinamento em módulos e aulas (`Treinamentos`), com progresso opcional.
- lives de treinamento ao vivo no YouTube (`Lives`), com agenda para o seu calendário.
- ferramentas de prospecção com login único, como o Extrator Maps (com 500 créditos de boas-vindas) e o DadosPJ.
- suporte por chamados (`Suporte`).

como é cobrado:
- duas cobranças por cidade: a mensalidade e a reserva territorial (anual). as duas precisam estar em dia; atraso de mais de 5 dias (o prazo padrão; o número que vale aparece em `Pagamentos`) em qualquer uma suspende o portal e as ferramentas até a regularização (veja `ac-atraso-e-suspensao`).

## resultado
você sabe o que o produto entrega e onde cada parte fica na área do cliente.

## desvios
- valores, garantia e condições comerciais não estão neste artigo. consulte a página de vendas ou o comercial.

## quando pedir ajuda
para dúvidas comerciais, fale com o comercial. para algo que deveria estar incluso e não aparece, abra um chamado em `Suporte`.

## fontes
- `src/app/(public)/comprar/ComprarPage.tsx:54`
- `src/app/(public)/comprar/ComprarPage.tsx:57`
- `src/app/(cliente)/portal-entrada.ts:30`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaInstalada.tsx:17`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaInstalada.tsx:31`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaInstalada.tsx:39`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:880`
- `src/app/(cliente)/negocios/page.tsx:277`
- `src/app/(cliente)/inicio/page.tsx:71`
- `docs/SSO-EXTRATOR.md:62`
- `docs/PRODUCT.md:44`

## lacunas
- o slug `portal-da-cidade` e o código `PDC` foram conferidos no banco de staging em 21/10/2026, onde o Portal da Cidade era o único produto cadastrado. a descrição comercial cadastrada ali era de teste.
- a frase "portal de notícias, guia comercial e serviços" é resumo deste artigo a partir dos links do portal; não é texto de tela.
- preço, prazo de garantia e forma de pagamento existem no cadastro do produto, mas não foram conferidos e não devem ser informados pelo chat.
