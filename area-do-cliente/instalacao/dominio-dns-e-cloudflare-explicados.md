---
id: ac-instalacao-dominio-dns-explicados
titulo: "o que são domínio, DNS, nameserver, CNAME e Cloudflare (explicação simples)"
publico:
  - cliente
produto: portal-da-cidade
modulo: instalacao
aba: Minha plataforma
tipo_problema:
  - o-que-e-dns
  - o-que-e-nameserver
  - o-que-e-cloudflare
  - dominio-ou-subdominio
  - duvida-geral
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
entender as palavras que aparecem na instalação, para escolher a opção certa.

## pré-requisitos
- nenhum.

## explicação
- domínio: o nome do seu site, como `portalvitoria.com.br`. você compra num registrador (Registro.br, Hostinger e outros). a área do cliente não compra nem paga domínio por você.
- domínio próprio: o endereço é só do portal. é a opção `Domínio próprio` (a mais comum). depois você troca 2 nameservers no registrador.
- subdomínio: uma parte na frente de um domínio que você já usa, como `portal.minhaempresa.com.br`. é a opção `Subdomínio`. serve quando o domínio principal já tem outro site. depois você cria 1 registro (normalmente CNAME).
- DNS: a "lista telefônica" da internet, que diz para onde cada endereço aponta.
- nameservers (servidores DNS): quem responde pelo DNS do seu domínio. trocar os nameservers passa o controle do DNS do domínio para a configuração preparada pela New Córtex.
- Cloudflare: o serviço onde o sistema cria, sozinho, a configuração de DNS do seu domínio próprio. você não precisa criar conta na Cloudflare para isso; só copia os 2 nameservers mostrados na tela.
- CNAME: um tipo de registro de DNS que diz "este subdomínio aponta para tal endereço". usado na opção de subdomínio.
- propagação: o tempo para a mudança chegar a todos os servidores da internet; de minutos a 24 horas.
- certificado de segurança (https, o cadeado): ativado automaticamente na instalação.

## resultado
você sabe qual opção escolher e o que cada etapa pede.

## desvios
- se o DNS do seu domínio já fica na Cloudflare e você escolheu subdomínio, crie o registro lá com a nuvem cinza (DNS only).

## quando pedir ajuda
se você não sabe onde registrou o seu domínio, ou se o domínio já tem e-mail funcionando, fale com o suporte antes de trocar os nameservers.

## fontes
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:363`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:880`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/plataforma/page.tsx:240`
- `area-clientes/src/app/(cliente)/negocios/[licenseId]/plataforma/etapa-real.ts:174`
- `area-clientes/docs/PRODUCT.md:84`
- `area-clientes/docs/PRODUCT.md:46`

## lacunas
as definições de DNS, nameserver, CNAME e propagação são explicação geral, não texto das telas.
