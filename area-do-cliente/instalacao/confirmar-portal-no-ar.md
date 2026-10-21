---
id: ac-instalacao-confirmar-portal-no-ar
titulo: "confirmar que o meu portal está no ar"
publico:
  - cliente
produto: portal-da-cidade
modulo: instalacao
aba: Minha plataforma
tipo_problema:
  - plataforma-pronta
  - aguardando-sua-confirmacao
  - confirmar-instalacao
  - concluir-instalacao
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
fazer a última etapa da instalação: conferir que você consegue entrar no portal e confirmar.

## pré-requisitos
- a instalação estar em `Plataforma pronta` ou `Aguardando sua confirmação` (no cartão: `Falta a sua confirmação`, botão `Conferir e confirmar`).

## passos
1. Em `Meus negócios` (`/negocios`), clique em `Conferir e confirmar` (ou abra `Minha plataforma`).
2. Na tela `Sua plataforma está no ar!`, veja o quadro `Seus acessos` (`Endereço`, `Painel` e `Login`).
3. Clique em `Acessar meu portal` (abre em nova aba).
4. No painel do portal, clique no botão `Entrar com a Área do Cliente`. É a mesma conta que você usa aqui, sem senha nova.
5. Depois de ter entrado de verdade, volte à área do cliente e clique em `Sim, já está no ar`.

## resultado
a tela mostra `Instalação concluída` e `Confirmação registrada. Obrigado!`. a situação passa a `Concluída` e a página `Minha plataforma` vira `Seu portal está no ar!`, com seus acessos e links. o próximo passo sugerido é o treinamento.

## desvios
- se você não conseguiu entrar, clique em `Não, ainda não consigo`. a tela diz `Respondendo “não”, abrimos um chamado com todos os dados desta instalação e o WhatsApp do suporte.` em seguida aparece `Chamado aberto com o suporte`, com o número do chamado e o botão `Falar com o suporte agora`.
- só confirme `Sim` depois de ter entrado no painel. a tela pede isso: `Só confirme depois de ter entrado de verdade.`
- logo depois de a plataforma ficar pronta, a pergunta pode demorar um pouco para aparecer.

## quando pedir ajuda
se o botão `Entrar com a Área do Cliente` não funcionar no painel, responda `Não, ainda não consigo`: o chamado já é aberto com os dados certos.

## fontes
- `area-clientes/src/app/(cliente)/inicio/pendencia-instalacao.ts:1`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:1053`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:1056`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:1059`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:1062`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:1067`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:1100`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:1114`
- `area-clientes/src/app/(cliente)/AcessarPortalButton.tsx:35`
- `area-clientes/src/app/(cliente)/AcessarPortalButton.tsx:61`
- `area-clientes/src/domain/instalacao/installation-status.ts:45`
- `area-clientes/docs/REQUIREMENTS.md:226`

## lacunas
- a pergunta final só aparece depois de um prazo configurável desde que a plataforma ficou pronta (ou se o sistema já detectar o portal no ar); o valor do prazo não foi conferido.
- o botão `Acessar meu portal` só aparece se a licença estiver ativa e o acesso por login único estiver configurado pela equipe; sem isso o quadro mostra só os endereços.
- o quadro `Seus acessos` pode mostrar `Ainda não informado` quando a equipe ainda não preencheu algum dado.
