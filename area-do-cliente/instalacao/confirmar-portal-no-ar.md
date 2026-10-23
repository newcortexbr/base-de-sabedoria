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
videos:
  - CgrBKTyXSsI
---

## objetivo
fazer a última etapa da instalação: conferir que você consegue entrar no portal e confirmar.

## pré-requisitos
- em `Minha plataforma` aparecer `Sua plataforma está no ar!` (no `Início`: `Falta a sua confirmação`, botão `Conferir e confirmar`).

## passos
1. Em `Meus negócios` (`/negocios`), clique em `Conferir e confirmar` (ou abra `Minha plataforma`). [guia=menu:/negocios/[licenseId]/plataforma]
2. Na tela `Sua plataforma está no ar!`, veja o quadro `Seus acessos` (`Endereço`, `Painel` e `Login`). [guia=fora]
3. Clique em `Acessar meu portal` (abre em nova aba). [guia=plataforma.acessar-portal]
4. No painel do portal, clique no botão `Entrar com a Área do Cliente`. É a mesma conta que você usa aqui, sem senha nova. [guia=fora]
5. Depois de ter entrado de verdade, volte à área do cliente e clique em `Sim, já está no ar`. [guia=plataforma.sim-no-ar]

## resultado
a tela mostra `Instalação concluída` e `Confirmação registrada. Obrigado!`. a página `Minha plataforma` vira `Seu portal está no ar!`, com seus acessos e links. o próximo passo sugerido é o treinamento.

## desvios
- se você não conseguiu entrar, clique em `Não, ainda não consigo`. a tela diz `Respondendo “não”, abrimos um chamado com todos os dados desta instalação e o WhatsApp do suporte.` em seguida aparece `Chamado aberto com o suporte`, com o número do chamado e o botão `Falar com o suporte agora`.
- só confirme `Sim` depois de ter entrado no painel. a tela pede isso: `Só confirme depois de ter entrado de verdade.`
- logo depois de a plataforma ficar pronta, aparece por alguns segundos a animação `Estamos montando o seu portal` (com `Montando o portal`, `Criando a área administrativa`, `Preparando o banco de dados`, `Ativando o certificado de segurança` e `Colocando no ar`). a pergunta aparece quando ela termina. é só uma apresentação: não feche a tela por causa dela.

## quando pedir ajuda
se o botão `Entrar com a Área do Cliente` não funcionar no painel, responda `Não, ainda não consigo`: o chamado já é aberto com os dados certos.

## fontes
- `src/app/(cliente)/inicio/pendencia-instalacao.ts:1`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:1053`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:1056`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:1059`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:1062`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:1067`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:1100`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:1114`
- `src/app/(cliente)/AcessarPortalButton.tsx:35`
- `src/app/(cliente)/AcessarPortalButton.tsx:61`
- `src/domain/instalacao/installation-status.ts:45`
- `docs/REQUIREMENTS.md:226`

## lacunas
- a pergunta final só aparece depois de um prazo configurável desde que a plataforma ficou pronta (ou se o sistema já detectar o portal no ar); o valor do prazo não foi conferido.
- o botão `Acessar meu portal` só aparece se a licença estiver ativa e o acesso por login único estiver configurado pela equipe; sem isso o quadro mostra só os endereços.
- o quadro `Seus acessos` pode mostrar `Ainda não informado` quando a equipe ainda não preencheu algum dado.
