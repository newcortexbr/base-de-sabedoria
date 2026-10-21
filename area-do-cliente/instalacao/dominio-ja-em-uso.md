---
id: ac-instalacao-dominio-ja-em-uso
titulo: "meu domínio já tem site ou e-mail: posso usar?"
publico:
  - cliente
produto: portal-da-cidade
modulo: instalacao
aba: Minha plataforma
tipo_problema:
  - dominio-com-email
  - dominio-com-site
  - vou-perder-o-email
  - ja-uso-o-dominio
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
escolher a opção certa quando o domínio que você quer usar já tem outro site ou e-mail funcionando.

## pré-requisitos
- ter o domínio registrado.

## explicação
- na opção `Domínio próprio`, você troca os 2 nameservers do domínio. Isso passa o controle do DNS do domínio inteiro para a configuração preparada pela New Córtex. O endereço fica só para o portal.
- se o domínio já tem outro site, a opção indicada é `Subdomínio`: o portal fica num endereço como `portal.seusite.com.br`, e o site atual continua onde está. Nesse caso você cria só 1 registro no DNS e não troca nameservers.
- se o domínio tem e-mail funcionando (por exemplo, `contato@seusite.com.br`), fale com o suporte antes de trocar os nameservers.

## passos
1. Decida: o portal vai ocupar o domínio inteiro ou um subdomínio?
2. Se o domínio já tem site e você quer mantê-lo, escolha `Subdomínio` em `Minha plataforma` (veja `ac-instalacao-usar-subdominio`).
3. Se o domínio tem e-mail e você quer usar `Domínio próprio`, abra um chamado em `Suporte` antes de trocar os nameservers.
4. Se o domínio não tem uso nenhum, siga com `Domínio próprio` (veja `ac-instalacao-informar-dominio`).

## resultado
o portal vai para o ar sem derrubar o que já funcionava no domínio.

## desvios
- "Isso é um subdomínio. Escolha a opção "Subdomínio" acima.": você digitou um endereço com uma parte a mais na frente na opção errada.
- se você já trocou os nameservers e o e-mail parou, abra um chamado em `Suporte` na hora.

## quando pedir ajuda
antes de trocar os nameservers de um domínio que já tem e-mail.

## fontes
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:375` — `Domínio próprio`: "O endereço é só da plataforma", "Depois: trocar 2 nameservers no registrador".
- `src/app/(cliente)/negocios/[licenseId]/plataforma/page.tsx:220` — no subdomínio, o registro é criado no painel onde o DNS é administrado.

## lacunas
o código não mostra se os registros de e-mail existentes são copiados para a nova configuração de DNS. Por isso o artigo manda falar com o suporte antes.
