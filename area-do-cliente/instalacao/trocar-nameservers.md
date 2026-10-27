---
id: ac-instalacao-trocar-nameservers
titulo: "trocar os nameservers do meu domínio (configurar o DNS)"
publico:
  - cliente
produto: portal-da-cidade
modulo: instalacao
aba: Minha plataforma
tipo_problema:
  - trocar-nameservers
  - configurar-dns
  - aguardando-troca-de-nameservers
  - registro-br
  - hostinger
  - cloudflare
status: rascunho-documental
revisado_em: 2026-10-27
validacao: docs-e-codigo
videos:
  - 9-7aT2M-jmk
---

## objetivo
apontar o seu domínio próprio para o portal trocando os 2 nameservers (servidores DNS) no site onde você registrou o domínio.

## pré-requisitos
- ter informado um domínio próprio.
- no `Início` ou em `Meus negócios` aparecer `Falta trocar os nameservers`, com o botão `Ver o que fazer`.
- ter o login do site onde registrou o domínio (Registro.br, Hostinger ou outro).

## passos
1. Em `Meus negócios` (`/negocios`), clique em `Ver o que fazer` no cartão da cidade. [guia=menu:/negocios]
2. Em `Minha plataforma`, no quadro `Seus servidores DNS`, clique em `Copiar` ao lado do primeiro endereço. [guia=plataforma.copiar-dns-1]
3. Em outra aba, entre no site onde você registrou o domínio. A tela tem atalhos em `Atalhos do seu registrador` (`Abrir o Registro.br`, `Abrir a Hostinger`). [guia=fora]
4. No painel do registrador, abra a configuração de DNS (ou "servidores DNS") do domínio e escolha usar servidores próprios/personalizados. [guia=fora]
5. Apague os servidores que estão lá e cole o primeiro endereço copiado. [guia=fora]
6. Volte à área do cliente, clique em `Copiar` no segundo endereço e cole no segundo campo do registrador. [guia=plataforma.copiar-dns-2]
7. Salve a alteração no registrador. [guia=fora]
8. Volte à área do cliente e clique em `Já configurei`. [guia=plataforma.ja-configurei]

## resultado
a tela mostra `Procurando o apontamento DNS`: `Se já salvou a alteração, agora é só aguardar. Vamos detectar o apontamento e avançar automaticamente para testar seu portal. Pode levar de alguns minutos até 24 horas, conforme o registrador.` você pode fechar a tela. quando a mudança for detectada, a instalação passa para a etapa `Conexão DNS` (`Testando o acesso ao portal`) e depois para a confirmação final.

## explicação
- o que você faz: só a troca dos 2 nameservers no registrador.
- o que o sistema faz sozinho: cria a zona de DNS do seu domínio (na Cloudflare), aponta o domínio para o portal, ativa o certificado de segurança (o cadeado do https) e confere a propagação.
- o domínio com `www` na frente também é preparado e leva para o endereço principal.

## no registrador

- Use sempre os dois endereços que aparecem na sua tela (exclusivos do seu portal) e copie exatamente, sem espaços.
- Registro.br: `Acessar conta` > `Domínios` > clique no domínio > seção `DNS` > `Alterar servidores DNS`. Cole o primeiro endereço em `Servidor 1` e o segundo em `Servidor 2` e clique em `Salvar alterações`.
- Hostinger: `Domínios` > `Gerenciar` no domínio > `DNS/Nameservers` > `Alterar nameservers`, com a opção `Alterar nameservers` marcada. Apague os endereços dos campos, cole um em cada campo, deixe os outros vazios e clique em `Salvar`.
- Outro registrador: peça ao suporte dele como trocar os servidores DNS.
- Se você escolheu subdomínio, a tela mostra um registro para criar em vez dos nameservers; peça ajuda ao suporte de onde comprou o domínio.
- A alteração costuma valer em poucas horas; a propagação pode levar até 24 horas e, em alguns casos, 48 (na Hostinger, às vezes um pouco mais). É normal: não repita a alteração. O portal só abre pelo endereço depois disso.
- `Já configurei` faz a tela procurar o apontamento sozinha; não precisa ficar nela. Achado o DNS, a instalação avança para a última etapa.

## desvios
- trocar os nameservers muda o DNS do domínio inteiro. se você já tem e-mail ou outro site nesse domínio, fale com o suporte antes, ou use um subdomínio.
- `Já configurei` não confere nada na hora; a verificação é automática e continua mesmo que você não clique.
- se a tela mostrar `Preparando sua plataforma`, os nameservers ainda não estão prontos. aguarde; eles aparecem sozinhos.

## quando pedir ajuda
se passaram 24 horas da troca e a etapa não avançou, abra um chamado em `Suporte` com um print da tela de DNS do registrador.

## fontes
- `src/app/(cliente)/inicio/pendencia-instalacao.ts:1`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:759`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:790`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:813`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:820`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:850`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:857`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/PlataformaFlow.tsx:884`
- `src/app/(cliente)/negocios/[licenseId]/plataforma/etapa-real.ts:174`
- `docs/DECISIONS.md:760`

## lacunas
- o caminho exato de menus dentro do Registro.br e da Hostinger não está no código; os passos 4 e 5 são genéricos. a tela tem um vídeo (`Como trocar os DNS do domínio`) que pode ter o passo a passo.
- não confirmado o que acontece com e-mails já configurados no domínio depois da troca; a regra prudente é falar com o suporte antes.
