# índice das telas do cliente (Área do Cliente)

29 telas, capturadas em 2026-10-21 (desktop 1440x900, página inteira) num banco local descartável com dados fictícios. Cada tela tem: print em `prints/<ficha>.png`, itens do DOM em `prints/json/<ficha>.json` e ficha em `telas/<ficha>.md`. O catálogo lido pelo chat é `../prints.json`.

Rotas com variante de estado usam um sufixo depois de `?` (ex.: `/negocios/[licenseId]/plataforma?falha`): a ficha só é escolhida pelo nome, nunca pela rota do navegador. Segmentos dinâmicos ficam como `[licenseId]`, `[moduleId]`, `[lessonId]`, `[ticketId]`.

## acesso
- [/login (Entrar)](telas/login.md)
- [/recuperar (Esqueci minha senha)](telas/recuperar.md)
- [/recuperar?token (Criar nova senha (link do e-mail))](telas/recuperar-nova-senha.md)
- [/ativar (Ativar conta (primeiro acesso))](telas/ativar.md)
- [/reenviar-convite (Reenviar o convite)](telas/reenviar-convite.md)
- [/inicio?bloqueado (Acesso não permitido (conta bloqueada))](telas/acesso-bloqueado.md)

## venda
- [/comprar (Comprar)](telas/comprar.md)

## inicio
- [/inicio (Início)](telas/inicio.md)

## negocios
- [/negocios (Meus negócios)](telas/negocios.md)
- [/negocios/[licenseId] (Visão geral do negócio)](telas/negocios-visao-geral.md)
- [/negocios/[licenseId]?suspenso (Visão geral — negócio suspenso)](telas/negocios-visao-geral-suspenso.md)

## instalacao
- [/negocios/[licenseId]/plataforma (Minha plataforma — trocar os DNS (nameservers))](telas/negocios-plataforma.md)
- [/negocios/[licenseId]/plataforma?dominio (Minha plataforma — informar o domínio)](telas/negocios-plataforma-dominio.md)
- [/negocios/[licenseId]/plataforma?propagacao (Minha plataforma — verificando (propagação do DNS))](telas/negocios-plataforma-propagacao.md)
- [/negocios/[licenseId]/plataforma?preparando (Minha plataforma — preparando o portal)](telas/negocios-plataforma-preparando.md)
- [/negocios/[licenseId]/plataforma?acesso (Minha plataforma — portal publicado (montagem e acessos))](telas/negocios-plataforma-acesso.md)
- [/negocios/[licenseId]/plataforma?falha (Minha plataforma — instalação em tratamento (falha))](telas/negocios-plataforma-falha.md)
- [/negocios/[licenseId]/plataforma?instalada (Minha plataforma — portal no ar)](telas/negocios-plataforma-instalada.md)

## treinamento
- [/negocios/[licenseId]/treinamento (Treinamentos (módulos))](telas/negocios-treinamento.md)
- [/negocios/[licenseId]/treinamento/[moduleId]/[lessonId] (Aula)](telas/negocios-treinamento-aula.md)

## ferramentas
- [/negocios/[licenseId]/ferramentas (Ferramentas)](telas/negocios-ferramentas.md)

## lives
- [/negocios/[licenseId]/lives (Lives)](telas/negocios-lives.md)

## financeiro
- [/negocios/[licenseId]/pagamentos (Pagamentos do negócio)](telas/negocios-pagamentos.md)
- [/negocios/[licenseId]/pagamentos?atrasado (Pagamentos — cobrança em atraso)](telas/negocios-pagamentos-atrasado.md)

## suporte
- [/suporte (Suporte (chamados))](telas/suporte.md)
- [/suporte/novo (Novo chamado)](telas/suporte-novo.md)
- [/suporte/[ticketId] (Chamado (conversa))](telas/suporte-chamado.md)

## conta
- [/minha-conta (Minha Conta)](telas/minha-conta.md)

## geral
- [/negocios/[licenseId]?inexistente (Página não encontrada)](telas/nao-encontrado.md)
