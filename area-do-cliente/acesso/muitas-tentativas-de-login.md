---
id: ac-muitas-tentativas-de-login
titulo: 'apareceu "Muitas tentativas" ao entrar'
publico:
  - cliente
modulo: acesso
aba: nao-se-aplica
tipo_problema:
  - muitas tentativas
  - login travado
  - não deixa entrar
  - errei a senha várias vezes
  - bloqueio temporário
status: rascunho-documental
revisado_em: 2026-10-21
validacao: docs-e-codigo
---

## objetivo

entender a mensagem "Muitas tentativas. Tente novamente em instantes." na tela de login e quanto tempo esperar.

## explicação

para proteger a sua conta, a Área do Cliente segura tentativas de entrada repetidas. Há duas travas:

- por e-mail: mais de 5 tentativas em 5 minutos para o mesmo e-mail (padrão). Basta esperar alguns minutos;
- por conexão de internet: mais de 20 tentativas em 5 minutos saindo da mesma internet (padrão). Nesse caso a espera é longa — o padrão é 6 horas. Isso pode atingir um escritório inteiro que usa a mesma internet.

Essa trava não é bloqueio da conta. A conta continua normal; só a entrada fica parada por um tempo.

## passos

1. Pare de tentar por alguns minutos. [guia=fora]
2. Se você não lembra a senha, em vez de tentar de novo, clique em `Esqueci minha senha` e crie uma nova (veja `ac-esqueci-a-senha`). [guia=fora]
3. Depois da espera, entre com a senha certa. [guia=fora]

## resultado

depois de entrar com sucesso, a contagem daquela internet é zerada.

## desvios

- Se mesmo depois de muitos minutos a mensagem continuar, pode ser a trava longa por internet. Tente por outra conexão (por exemplo, os dados móveis do celular).

## quando pedir ajuda

peça ajuda se a mensagem continuar por horas ou aparecer já na primeira tentativa.

## fontes

- `src/app/(public)/api/auth/login/route.ts:20` — mensagem "Muitas tentativas. Tente novamente em instantes."; `:23` em diante — trava por internet e por e-mail; sucesso zera a contagem da internet.
- `src/domain/acesso/types.ts:103` — limites por internet (20) e por e-mail (5) em 300 s.
- `src/db/seeds/config.ts:42` — trava por internet: 20 tentativas, janela de 300 s, espera de 6 horas.
- `src/domain/acesso/rate-limit-ip.ts:20` — passar do teto liga a espera.

## lacunas

a mensagem diz "em instantes", mas a trava por internet pode durar horas (padrão de 6 h, DEC-226). O cliente pode estranhar. Valores reais de produção dependem de configuração.
