---
id: ac-instalacao-usar-subdominio
titulo: "usar um subdomínio (ex.: portal.minhaempresa.com.br)"
publico:
  - cliente
produto: portal-da-cidade
modulo: instalacao
aba: Minha plataforma
tipo_problema:
  - subdominio
  - ja-tenho-site-no-dominio
  - cname
  - apontamento
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo
colocar o portal num subdomínio de um domínio que você já usa em outro site, sem mexer no site atual.

## pré-requisitos
- o domínio ainda não foi informado (no cartão de `Meus negócios`: `Instalação pendente`, botão `Iniciar instalação`).
- acesso ao painel onde o DNS do seu domínio é administrado (registrador ou Cloudflare).

## passos
1. Em `Meus negócios` (`/negocios`), clique em `Iniciar instalação` no cartão da cidade. [guia=negocios.instalacao]
2. Em `Qual endereço sua plataforma vai ter?`, escolha `Subdomínio` (exemplo: `portal.minhaempresa.com.br`). [guia=plataforma.subdominio]
3. No campo `Seu subdomínio`, digite o endereço completo. [guia=plataforma.campo-dominio]
4. Digite de novo no campo de confirmação, sem colar. [guia=plataforma.repetir-dominio]
5. Marque a caixa `Confirmo que ... é meu, está registrado e pago.` [guia=plataforma.confirmo-registro]
6. Clique em `Continuar`. [guia=plataforma.continuar]
7. Na tela `Apontamento do subdomínio`, anote os três campos: `Tipo`, `Nome` e `Aponta para`. [guia=fora]
8. Entre no painel onde o DNS deste domínio é administrado (o registrador ou a Cloudflare). [guia=fora]
9. Abra a área de DNS ou Zona DNS e clique em adicionar registro. [guia=fora]
10. Escolha o tipo mostrado e preencha com os valores da tela. Se o campo "Nome" já mostrar o domínio ao lado, escreva só a primeira parte (em `portal.exemplo.com.br`, apenas `portal`). [guia=fora]
11. Deixe o TTL no automático (ou 3600) e salve. [guia=fora]
12. Volte à área do cliente. Não é preciso avisar ninguém: a verificação é automática. [guia=fora]

## resultado
a tela mostra `Conferindo o apontamento automaticamente, a cada minuto. Assim que ele chegar até nós, esta etapa avança sozinha.` quando o apontamento é encontrado, a instalação segue para a confirmação final.

## desvios
- no subdomínio, os nameservers do seu domínio não mudam. não troque nameservers.
- se o painel for a Cloudflare, deixe a nuvem cinza (DNS only). com a nuvem laranja o endereço não responde.
- no Registro.br, alguns campos exigem o ponto final no fim do endereço de destino.
- se a tela disser `O endereço de destino ainda não está disponível...`, não configure nada por enquanto; o passo a passo aparece quando estiver pronto.
- se a tela disser que é um domínio próprio, escolha a opção `Domínio próprio`.
- `O endereço <endereço> já está vinculado a outra licença ativa.`: use outro subdomínio.

## quando pedir ajuda
se já criou o registro há mais de 24 horas e a etapa não avançou, abra um chamado em `Suporte` com um print do registro criado.

## fontes
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:379`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/etapa-real.ts:451`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/page.tsx:179`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/page.tsx:188`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/page.tsx:200`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/page.tsx:220`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/page.tsx:229`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/page.tsx:240`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:686`
- `src/domain/instalacao/declare-subdomain.ts:211`

## lacunas
- o tipo de registro pode ser `CNAME`, `A` ou `AAAA`, conforme o destino configurado pela equipe; a tela mostra o certo.
- não testado com subdomínio real.
