---
id: ac-instalacao-informar-dominio
titulo: "informar o domínio do meu portal"
publico:
  - cliente
produto: portal-da-cidade
modulo: instalacao
aba: Minha plataforma
tipo_problema:
  - informar-dominio
  - iniciar-instalacao
  - aguardando-dominio
  - endereco-do-site
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
informar o endereço (domínio) que o seu portal vai usar, para a instalação começar.

## pré-requisitos
- ter um negócio do Portal da Cidade com a licença ativa e a instalação em `Aguardando domínio`.
- ter um domínio já registrado e pago no seu nome (por exemplo, no Registro.br ou na Hostinger). a área do cliente não compra domínio para você.

## passos
1. No menu da esquerda, clique em `Meus negócios` (`/negocios`).
2. No cartão da cidade, clique em `Iniciar instalação` (ou `Continuar instalação`).
3. Na tela `Qual endereço sua plataforma vai ter?`, escolha `Domínio próprio` (exemplo: `portalvitoria.com.br`).
4. No campo `Seu domínio`, digite o domínio, sem `www` e sem `https://`.
5. No campo `Digite o domínio novamente para confirmar`, digite de novo, sem colar. Aparece `✓ Os dois conferem`.
6. Marque `Confirmo que <seu domínio> é meu, está registrado e pago.`
7. Clique em `Continuar`.

## resultado
a instalação passa para `Domínio declarado` e o sistema começa a preparar o portal. em seguida a tela mostra os 2 nameservers que você vai trocar no site onde registrou o domínio.

## desvios
- `Isso ainda não parece um domínio. Ex.: portalvitoria.com.br`: confira se digitou só o domínio, com a terminação (.com.br, .com etc.).
- `Isso é um subdomínio. Escolha a opção "Subdomínio" acima.`: o endereço tem uma parte a mais na frente (ex.: `portal.minhaempresa.com.br`). veja o artigo de subdomínio.
- `O domínio <domínio> já está vinculado a outra licença ativa.`: esse domínio já é usado por outro negócio. use outro ou fale com o suporte.
- `A instalação já avançou de estado. Atualize a página.`: recarregue a página; o domínio provavelmente já foi registrado.
- `Não foi possível declarar o domínio agora.`: tente de novo em alguns minutos.
- ainda não tem domínio? a tela tem o vídeo `Como registrar um domínio` e atalhos para o registrador.

## quando pedir ajuda
se digitou o domínio errado e já clicou em `Continuar`, abra um chamado em `Suporte`: a troca depois do envio é feita pela equipe.

## fontes
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:372`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:481`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:566`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:627`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:638`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/plataforma/dominio-validacao.ts:51`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/plataforma/dominio-validacao.ts:73`
- `area-clientes/src/domain/instalacao/declare-domain.ts:203`
- `area-clientes/src/app/(cliente)/api/instalacao/dominio/route.ts:30`
- `area-clientes/src/app/(cliente)/api/instalacao/dominio/route.ts:31`
- `area-clientes/docs/PRODUCT.md:84`
- `area-clientes/docs/REQUIREMENTS.md:362`

## lacunas
- não testado em tela com domínio real.
- se a tela aceita `www.` digitado e o remove sozinha não foi confirmado; por isso o passo pede para não digitar.
