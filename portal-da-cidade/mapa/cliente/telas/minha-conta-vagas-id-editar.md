# /minha-conta/vagas/[id]/editar

Arquivos: `src/app/minha-conta/vagas/[id]/editar/page.tsx`, `vagas/VagaForm.tsx`

## quem acessa
- empresa dona da vaga. Outros perfis: redirecionados. Quem não é dono: o servidor responde (404 vira "Vaga não encontrada. Ela pode ter sido excluída.", 403 vira acesso negado) (`VagaForm.tsx:186-193`).

## gate de módulo/plano
- nenhum de tela. Sem etapa de completar cadastro (só a criação tem). Reativar uma vaga acima do limite é recusado pelo servidor.

## o que faz
- edita uma vaga existente. Se `edicao_reenvia_para_analise` for verdadeiro, avisa que a edição volta para análise (`VagaForm.tsx:181`, hipótese sobre o texto do aviso: não lido).
- vaga reprovada: o link "Corrigir e reenviar" da lista leva aqui (`vagas/page.tsx:303`).

## ações e campos
- os mesmos de Nova vaga (ver `minha-conta-vagas-nova.md`). Título muda para "Editar vaga" e o botão de enviar vira `Salvar alterações` (com `Cancelar`); janela final "Alterações salvas".

## APIs
- `GET /painel/{portal}/vagas/{id}/` (`cliente-api.ts:2040`), `PATCH` do mesmo (`:2064`), áreas, contratante, config do portal.

## estados de erro/vazio
- iguais ao formulário de criação, mais 404/403 de carga.

## possíveis problemas para leigo
- fato: ao carregar vaga com faixa (mín e máx), só `salario_min ?? salario_max` entra no campo e ao salvar `salario_max` vai nulo (`VagaForm.tsx:175,240`). A faixa antiga se perde silenciosamente. Hipótese de impacto: só afeta vagas criadas pelo painel com faixa.
- fato: a página de rota é Server Component; `Number(id)` com id não numérico gera `NaN` sem tratamento específico (`page.tsx:9`). Hipótese: leva a erro de carga.

## posições na tela (print de 2026-10-16, 1280x900)
- print: [minha-conta-vagas-id-editar.png](../prints/minha-conta-vagas-id-editar.png) · versão celular: [minha-conta-vagas-id-editar-390.png](../prints/minha-conta-vagas-id-editar-390.png) · dados brutos: [json](../prints/json/minha-conta-vagas-id-editar.json)
- aberta em `/minha-conta/vagas/1/editar` com dados do banco de teste; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "Editar vaga" — topo, no topo da página, ao centro (480,16,97,28)
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
- [link] "Cancelar" — conteúdo, no fim da página, ao centro (790,1420,98,42)
- [botão] "Salvar alterações" — conteúdo, no fim da página, à direita, logo abaixo de “https://seusite.com/candidatura” (900,1420,163,42)

## o que você vê
Formulário para mudar uma vaga que já existe.
- Os mesmos campos de "Nova vaga", já preenchidos.
- Em alguns portais, editar manda a vaga de novo para análise; a tela avisa.
- Se a vaga foi reprovada, você chega aqui por "Corrigir e reenviar".
