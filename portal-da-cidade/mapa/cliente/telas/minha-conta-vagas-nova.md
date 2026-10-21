# /minha-conta/vagas/nova

Arquivos: `src/app/minha-conta/vagas/nova/page.tsx`, `vagas/VagaForm.tsx`, `_completar/EtapaCompletarPerfil.tsx`

## quem acessa
- empresa. Outros perfis são redirecionados.

## gate de módulo/plano
- sem gate de tela. O servidor decide o limite de vagas ativas e devolve 400 no POST; a tela mostra o erro de limite (`VagaForm.tsx:259-265`, `separarLimiteDoPlano`).
- antes do formulário vem a etapa "Complete seu cadastro" (`EtapaCompletarPerfil modulo="vagas"`), só se `meus-avisos` listar `perfis_incompletos` de vagas. O cliente pode "Preencher depois" (grava em `sessionStorage` da aba: `EtapaCompletarPerfil.tsx:21-26,115-118`). Falha de checagem libera o formulário direto (`:102-108`).

## o que faz
- cria uma vaga de emprego.

## ações e campos
- título*, área (opcional), tipo de contrato (CLT, PJ/Autônomo, Estágio, Trainee, Temporário, Freelancer), carga horária, modelo de trabalho (home office, híbrido), cidade* e bairro, descrição*, requisitos, benefícios (um por linha), salário (ou "a combinar"), PCD, primeiro emprego, urgente, WhatsApp, e-mail para currículo, link externo de candidatura (`VagaForm.tsx:297-458`).
- validação no navegador: título, descrição, cidade obrigatórios; telefone válido (`VagaForm.tsx:199-207`).
- ao salvar abre modal; texto muda se a vaga foi para aprovação (`:249-258`).

## APIs
- ao abrir: `GET .../meu-contratante-vagas/`, `GET /{portal}/vagas/areas/?incluir_vazias=true`, `api.guia.config()` (cidades) (`VagaForm.tsx:150-155`).
- `POST /painel/{portal}/vagas/` (`cliente-api.ts:2043`).
- etapa de cadastro: `ensure` do adaptador (get-or-create do contratante), `GET .../meus-avisos/`.
- `revalidarListasDeVagas`.

## estados de erro/vazio
- falha de carga: 404, 403 ou "Não foi possível carregar os dados agora…" (`VagaForm.tsx:186-193`).
- "Preencha os campos obrigatórios destacados abaixo." ao faltar campo; "Não foi possível salvar a vaga agora." genérica.

## possíveis problemas para leigo
- fato: só um valor de salário é enviado; `salario_max` vai sempre nulo (`VagaForm.tsx:239-240`). Hipótese: faixa salarial não pode ser informada por esta tela.
- fato: a etapa "Complete seu cadastro" aparece antes do formulário de vaga e pode parecer um obstáculo; o botão "Preencher depois" resolve (`EtapaCompletarPerfil.tsx:147-153`).
- fato: não há indicação antecipada do limite do plano dentro do formulário; o aviso vem após clicar em salvar (hipótese; só a lista mostra o limite).
- fato: "Link externo de candidatura" e "e-mail para currículo" são todos opcionais: vaga pode ser publicada sem nenhum meio de contato (sem validação em `validar()`, `:199-207`).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-vagas-nova.png](../prints/minha-conta-vagas-nova.png) · versão celular: [minha-conta-vagas-nova-390.png](../prints/minha-conta-vagas-nova-390.png) · dados brutos: [json](../prints/json/minha-conta-vagas-nova.json)
- aberta em `/minha-conta/vagas/nova`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Nova vaga" — topo, no topo da página, ao centro (480,16,90,28)
- [menu/links] "9 itens: Início · Guia Comercial · Vagas de Emprego · Banners Publicitários · Classificados · Minha empresa · Planos e assinaturas · Segurança · Sair" — menu, na parte de cima, à esquerda (lista de 9 itens em coluna) (14,96,227,786)
- [campo] "Ex: Auxiliar de Cozinha" — conteúdo, na parte de cima, ao centro (473,144,590,42)
- [campo] "Área" — conteúdo, na parte de cima, ao centro, logo abaixo de “Ex: Auxiliar de Cozinha” (473,227,287,42)
- [campo] "Cidade" — conteúdo, na parte de cima, ao centro, logo abaixo de “Área” (473,309,287,42)
- [campo] "Bairro" — conteúdo, na parte de cima, à direita (776,309,287,42)
- [campo] "Ex: 44h, 12x36, 30h" — conteúdo, no meio da tela, ao centro, logo abaixo de “Cidade” (473,393,590,42)
- [radio] "Presencial" — conteúdo, no meio da tela, ao centro, logo abaixo de “Ex: 44h, 12x36, 30h” (473,480,13,13)
- [radio] "Home Office" — conteúdo, no meio da tela, ao centro, logo abaixo de “Ex: 44h, 12x36, 30h” (575,480,13,13)
- [radio] "Híbrido" — conteúdo, no meio da tela, ao centro, logo abaixo de “Ex: 44h, 12x36, 30h” (690,480,13,13)
- [checkbox] "Vaga PCD" — conteúdo, no meio da tela, ao centro, logo abaixo de “Presencial” (473,516,13,13)
- [checkbox] "1º Emprego" — conteúdo, no meio da tela, ao centro, logo abaixo de “Home Office” (575,516,13,13)
- [checkbox] "Urgente" — conteúdo, no meio da tela, ao centro, logo abaixo de “Híbrido” (686,516,13,13)
- [campo de texto longo] "Descreva a vaga, responsabilidades, rotina…" — conteúdo, no meio da tela, ao centro, logo abaixo de “Vaga PCD” (473,574,590,122)
- [campo de texto longo] "Formação, experiência, habilidades…" — conteúdo, no meio da tela, ao centro, logo abaixo de “Descreva a vaga, responsabilidades,” (473,744,590,82)
- [campo de texto longo] "Vale-refeição Plano de saúde Vale-transporte" — conteúdo, no meio da tela, ao centro, logo abaixo de “Formação, experiência, habilidades…” (473,875,590,82)
- [checkbox] "Salário a combinar" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Vale-refeição Plano de saúde Vale-t” (473,1000,13,13)
- [campo] "1.600,00" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Salário a combinar” (473,1054,590,42)
- [campo] "(27) 99999-9999" — conteúdo, mais abaixo (rolando a página), ao centro (473,1187,590,42)
- [campo] "rh@empresa.com.br" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “(27) 99999-9999” (473,1270,590,42)
- [campo] "https://seusite.com/candidatura" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “rh@empresa.com.br” (473,1354,590,42)
- [link] "Cancelar" — conteúdo, no fim da página, à direita (814,1420,98,42)
- [botão] "Publicar vaga" — conteúdo, no fim da página, à direita, logo abaixo de “https://seusite.com/candidatura” (924,1420,139,42)

## o que você vê
Formulário para publicar uma vaga de emprego.
- Complete seu cadastro: pode aparecer antes; "Preencher depois" pula por agora.
- Título, cidade e descrição: obrigatórios.
- Tipo de contrato: CLT, PJ/Autônomo, Estágio, Trainee, Temporário, Freelancer.
- Carga horária, modelo de trabalho (presencial, home office, híbrido), bairro.
- Requisitos e benefícios (um por linha).
- Salário: valor ou "a combinar".
- PCD (vaga para pessoa com deficiência), Primeiro emprego, Urgente: marcações que destacam a vaga.
- WhatsApp, e-mail para currículo ou link externo: como o candidato se inscreve.
- Ao salvar, a tela diz se a vaga entrou no ar ou foi para aprovação.
