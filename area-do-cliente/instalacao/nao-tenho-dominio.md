---
id: ac-instalacao-nao-tenho-dominio
titulo: "ainda não tenho um domínio: o que faço?"
publico:
  - cliente
produto: portal-da-cidade
modulo: instalacao
aba: Minha plataforma
tipo_problema:
  - nao-tenho-dominio
  - comprar-dominio
  - registrar-dominio
  - qual-endereco
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
saber como conseguir um domínio para o seu portal antes de começar a instalação.

## pré-requisitos
- nenhum.

## explicação
- o domínio é o endereço do site, como `portalvitoria.com.br`. Ele é comprado e pago por você num registrador (por exemplo, Registro.br ou Hostinger). A Área do Cliente não compra nem paga domínio.
- na primeira etapa de `Minha plataforma`, ao lado da pergunta `Qual endereço sua plataforma vai ter?`, há o vídeo `Como registrar um domínio` ("Ainda não tem um domínio?").
- se você já tem um site num domínio e quer o portal em um endereço como `portal.seusite.com.br`, use subdomínio (veja `ac-instalacao-usar-subdominio`).

## passos
1. Em `Meus negócios`, clique em `Acessar meu negócio` no cartão da cidade. [guia=negocios.acessar-negocio]
2. No menu do negócio, clique em `Minha plataforma`. [guia=menu:/negocios/[licenseId]/plataforma]
3. Clique no vídeo `Como registrar um domínio` e assista. [guia=fora]
4. Registre e pague o domínio no registrador escolhido, no seu nome. [guia=fora]
5. Volte a `Minha plataforma` e informe o domínio (veja `ac-instalacao-informar-dominio`). [guia=menu:/negocios/[licenseId]/plataforma]

## resultado
você tem um domínio seu e pode continuar a instalação.

## desvios
- "Vídeo disponível em breve": o vídeo ainda não foi publicado. Siga os passos 4 e 5 mesmo assim.
- a tela pede para confirmar que o domínio "é meu, está registrado e pago". Só marque depois de concluir o registro.

## quando pedir ajuda
se tiver dúvida sobre qual nome escolher ou onde registrar, abra um chamado em `Suporte` com `Assunto` `Instalação e domínio`.

## fontes
- `src/app/(cliente)/negocios/[licenseId]/plataforma/page.tsx:556` — "Primeiro, escolha seu endereço." e o vídeo `Como registrar um domínio`.
- `src/app/(cliente)/negocios/[licenseId]/plataforma/VideoGuia.tsx:52` — "Vídeo disponível em breve".
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:850` — atalhos `Abrir o Registro.br` e `Abrir a Hostinger` (quando configurados).

## lacunas
o preço e a renovação do domínio são do registrador e não aparecem na Área do Cliente.
