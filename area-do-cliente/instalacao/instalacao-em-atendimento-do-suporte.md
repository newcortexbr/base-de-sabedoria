---
id: ac-instalacao-em-atendimento-suporte
titulo: 'a instalação diz "Chamado aberto com o suporte"'
publico:
  - cliente
produto: portal-da-cidade
modulo: instalacao
aba: Minha plataforma
tipo_problema:
  - instalacao-com-suporte
  - nao-consigo-acessar-o-portal
  - chamado-de-instalacao
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
entender a tela `Chamado aberto com o suporte` (no `Início`: `A instalação precisa do Suporte`) e o que acontece depois.

## pré-requisitos
- nenhum.

## explicação
- essa situação aparece quando você respondeu `Não, ainda não consigo` na confirmação final.
- um chamado é aberto automaticamente com todos os dados da instalação. a tela mostra `Chamado aberto com o suporte`, o número do chamado e `nossa equipe vai responder por lá.`
- no cartão de `Meus negócios`: `A instalação precisa do Suporte` — `Esta instalação precisa de um atendimento da nossa equipe para continuar.`, com o botão `Falar com o suporte`.
- quando a equipe resolve, a instalação volta para a confirmação final e a pergunta reaparece para você. se o problema era o domínio, a equipe pode refazer a configuração de DNS e você talvez precise trocar os nameservers de novo.

## passos
1. Clique em `Falar com o suporte` (ou `Falar com o suporte agora`, que abre o WhatsApp do suporte). [guia=fora]
2. Acompanhe a resposta no chamado, em `Suporte`. [guia=fora]
3. Quando a pergunta final voltar a aparecer em `Minha plataforma`, entre no painel e confirme. [guia=menu:/negocios/[licenseId]/plataforma]

## resultado
o suporte resolve e você conclui a instalação.

## desvios
- o botão do WhatsApp só aparece se o número do suporte estiver configurado.

## quando pedir ajuda
você já está com um chamado aberto; responda por ele.

## fontes
- `src/app/(cliente)/inicio/pendencia-instalacao.ts:1`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:1100`
- `src/app/(cliente)/negocios/page.tsx:256`
- `src/domain/instalacao/state-machine.ts:167`
- `docs/REQUIREMENTS.md:228`

## lacunas
não há prazo de resposta do suporte no código.
