---
id: ac-primeiros-passos
titulo: "acabei de comprar: por onde começo"
publico:
  - cliente
modulo: geral
aba: nao-se-aplica
tipo_problema:
  - primeiro-acesso
  - acabei-de-comprar
  - por-onde-comecar
  - o-que-fazer-agora
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
saber, na ordem, o que fazer depois da compra para colocar o seu portal no ar e começar a usar a Área do Cliente.

## pré-requisitos
- pagamento da compra confirmado.

## passos
1. Abra o e-mail "Bem-vindo! Crie sua senha da Área do Cliente New Córtex" e clique no link para criar a sua senha (veja `ac-ativar-conta-pelo-convite`). Se você já tinha conta, o e-mail é "Seu acesso a <produto> está liberado" e você entra com a senha que já usa. [guia=fora]
2. Entre na Área do Cliente com o seu e-mail e a senha (veja `ac-entrar-na-area-do-cliente`). [guia=fora]
3. No `Início`, no quadro `ANTES DE TUDO, VAMOS INICIAR A INSTALAÇÃO DO SEU PORTAL`, clique em `Iniciar instalação`. [guia=inicio.instalacao]
4. Informe o endereço do seu portal: um domínio próprio ou um subdomínio (veja `ac-instalacao-informar-dominio` e `ac-instalacao-usar-subdominio`). Se ainda não tem domínio, veja `ac-instalacao-nao-tenho-dominio`. [guia=fora]
5. Aponte o domínio conforme a tela pedir: troque os nameservers ou crie o registro do subdomínio (veja `ac-instalacao-trocar-nameservers`). [guia=fora]
6. Espere a propagação e confirme que o portal abriu (veja `ac-instalacao-confirmar-portal-no-ar`). [guia=fora]
7. Enquanto espera, no `Início`, clique em `Assistir ao tour` (se estiver disponível) e comece as aulas do Start (veja `ac-treinamento-start`). [guia=inicio.assistir-tour]

## resultado
o portal fica no ar, você entra no painel dele com a conta da Área do Cliente e já sabe onde ficam as aulas, as ferramentas, as lives e o suporte.

## explicação
- cada cidade comprada vira um "negócio" em `Meus negócios` (veja `ac-negocio-o-que-e`).
- as ferramentas (como o Extrator Maps) são liberadas junto com o negócio, sem senha nova (veja `ac-ferramentas-o-que-sao`).
- a etapa completa da instalação está em `ac-instalacao-linha-do-tempo`.

## desvios
- o e-mail de boas-vindas não chegou: veja `ac-email-nao-chega` e `ac-pedir-novo-convite`.
- pagou e o negócio não aparece: veja `ac-negocio-nao-aparece`.

## quando pedir ajuda
se travar em qualquer passo, use o chat de suporte (balão no canto) ou abra um chamado em `Suporte`.

## fontes
- `src/ui/emails/templates.ts:79` — assunto do e-mail de boas-vindas; `:111` — assunto "Seu acesso a <produto> está liberado".
- `src/app/(cliente)/inicio/page.tsx:257` — quadro `ANTES DE TUDO, VAMOS INICIAR A INSTALAÇÃO DO SEU PORTAL`; `:313` — "Comece por aqui · Start" e `Assistir ao tour`.
- `src/app/(cliente)/inicio/pendencia-instalacao.ts:33` — botão `Iniciar instalação`.

## lacunas
quando quem já tinha conta compra um produto novo, o e-mail enviado é o de "acesso liberado" (`NEW_ACQUISITION`); a regra exata de qual e-mail sai em cada caso não foi conferida.
