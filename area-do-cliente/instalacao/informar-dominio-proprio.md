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
videos:
  - DpFk0q7myio
---

## objetivo
informar o endereço (domínio) que o seu portal vai usar, para a instalação começar.

## pré-requisitos
- ter um negócio do Portal da Cidade com a licença ativa e o domínio ainda não informado (no cartão de `Meus negócios`: `Instalação pendente`).
- ter um domínio já registrado e pago no seu nome (por exemplo, no Registro.br ou na Hostinger). a área do cliente não compra domínio para você.

## passos
1. No menu da esquerda, clique em `Meus negócios` (`/negocios`). [guia=menu:/negocios]
2. No cartão da cidade, clique em `Iniciar instalação` (ou `Continuar instalação`). [guia=negocios.instalacao]
3. Na tela `Qual endereço sua plataforma vai ter?`, escolha `Domínio próprio` (exemplo: `portalvitoria.com.br`). [guia=plataforma.dominio-proprio]
4. No campo `Seu domínio`, digite o domínio, sem `www` e sem `https://`. [guia=plataforma.campo-dominio]
5. No campo `Digite o domínio novamente para confirmar`, digite de novo, sem colar. Aparece `✓ Os dois conferem`. [guia=plataforma.repetir-dominio]
6. Marque `Confirmo que <seu domínio> é meu, está registrado e pago.` [guia=plataforma.confirmo-registro]
7. Clique em `Continuar`. [guia=plataforma.continuar]

## resultado
o sistema começa a preparar o portal (`Preparando sua plataforma`). em seguida a tela mostra `Falta apontar o seu domínio.` e os 2 nameservers que você vai trocar no site onde registrou o domínio.

## desvios
- `Isso ainda não parece um domínio. Ex.: portalvitoria.com.br`: confira se digitou só o domínio, com a terminação (.com.br, .com etc.).
- `Isso é um subdomínio. Escolha a opção "Subdomínio" acima.`: o endereço tem uma parte a mais na frente (ex.: `portal.minhaempresa.com.br`). veja `ac-instalacao-usar-subdominio`.
- `O domínio <domínio> já está vinculado a outra licença ativa.`: esse domínio já é usado por outro negócio. use outro ou fale com o suporte.
- `A instalação já avançou de estado. Atualize a página.`: recarregue a página; o domínio provavelmente já foi registrado.
- `Não foi possível declarar o domínio agora.`: tente de novo em alguns minutos.
- ainda não tem domínio? a tela tem o vídeo `Como registrar um domínio` e atalhos para o registrador.

## quando pedir ajuda
se digitou o domínio errado e já clicou em `Continuar`, abra um chamado em `Suporte`: a troca depois do envio é feita pela equipe.

## fontes
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:372`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:481`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:566`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:627`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:638`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/dominio-validacao.ts:51`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/dominio-validacao.ts:73`
- `src/domain/instalacao/declare-domain.ts:203`
- `src/app/(cliente)/api/instalacao/dominio/route.ts:30`
- `src/app/(cliente)/api/instalacao/dominio/route.ts:31`
- `docs/PRODUCT.md:84`
- `docs/REQUIREMENTS.md:362`

## lacunas
- não testado em tela com domínio real.
- se a tela aceita `www.` digitado e o remove sozinha não foi confirmado; por isso o passo pede para não digitar.
