# /painel/vagas/cadastrar — nova vaga (`.../cadastrar/page.tsx`, 5 linhas)
- gate: módulo `vagas` (prefixo `/painel/vagas`); desligado mostra "ModuloDesativado" (`painel/layout.tsx:91-98`). ATENÇÃO: "vagas" no frontend = vagas de emprego.
- permissão: só papéis admin/master entram no painel (`src/lib/painel-permissoes.ts`).
- faz: `<VagaForm />` (`vagas/VagaForm.tsx`), modo criar.
- campos: Contratante (obrigatório), Título, Área, Tipo de contrato (CLT, PJ / Autônomo, Estágio, Trainee, Temporário, Freelancer), Carga horária, Modelo de trabalho (home office/híbrido), PCD, 1º emprego, Urgente, Destaque, Descrição, Requisitos, Benefícios (um por linha), Salário único ou "A combinar", WhatsApp, E-mail, Link externo de candidatura, cidade/bairro, expira em, status.
- APIs: `vagas.areas.listar`, `vagas.contratantes.listar`, `guia.config.get` (:137-139), `vagas.vagas.criar` (:257); volta a `/painel/vagas` (:262).
- estados: "Não foi possível carregar áreas, contratantes ou cidades" (:141); "Preencha os campos obrigatórios" (:214); "O salário não pode ser negativo" (:225); telefone (:193).
- problemas: fato — salário vai para `salario_min`, `salario_max` sempre nulo; vagas antigas com faixa avisam e colapsam no salvar (comentário :73-95).
- admin vs cliente: equivale a `/minha-conta/vagas/nova` (`minha-conta/vagas/VagaForm.tsx`, outro componente). Admin escolhe o contratante, destaque e status; cliente não.

## o que você vê
Tela para cadastrar uma vaga de emprego em nome de uma empresa contratante. Para abrir: na parte Conteúdo do menu, em `Vagas de Emprego`, clique em `Nova Vaga` (ou em `+ Nova Vaga` na lista). `Publicar vaga` grava; `Cancelar` volta.
- "Empresa Contratante": campo Contratante * (lista "Selecione um contratante"), a empresa que oferece a vaga. O link `Cadastrar contratante` só aparece quando ainda não existe nenhum contratante; com contratantes já cadastrados, crie um novo em `Contratantes` do menu.
- "Dados da Vaga": Título * (ex.: Desenvolvedor Full Stack Pleno), Área, Tipo de contrato (CLT, PJ / Autônomo, Estágio, Trainee, Temporário, Freelancer), Carga horária (ex.: 44h, 12x36), cidade e bairro, Modelo de trabalho (Presencial, Home Office, Híbrido) e as caixas Vaga PCD, 1º Emprego, Urgente e Destaque.
- "Salário": caixa "A combinar" ou campo "Salário (R$)" (um valor único).
- "Descrição": Descrição da vaga *, Requisitos e "Benefícios (um por linha)".
- "Contato / Candidatura": "URL de candidatura (site externo)", "WhatsApp para contato" e "E-mail para currículo".
- "Configurações": Status (Ativa, Pausada, Encerrada) e Expira em (data em que a vaga sai do ar).

## posições na tela (print de 2026-10-16, 1280x900)
- print: [painel-vagas-cadastrar.png](../prints/painel-vagas-cadastrar.png) · dados brutos: [json](../prints/json/painel-vagas-cadastrar.json)
- aberta em `/painel/vagas/cadastrar`; coordenadas em px a partir do canto superior esquerdo da página inteira (x,y,largura,altura)
- [título] "grandevix (local)" — menu lateral, no topo da página, à esquerda (14,16,207,19)
- [link] "Ver portal" — topo, no topo da página, à direita (1147,16,109,34)
- [menu] "27 itens: Recolher menu · Painel · Aprovações e Denúncias · Notícias · Notícias Automáticas · Guia Comercial · Vagas de Emprego · Listar Vagas · Nova Vaga · Áreas de Vagas · Contratantes · Classificados · Guia Turístico / Eventos · Artigos …" — menu lateral, no topo da página, à esquerda (lista de 27 itens em coluna) (10,18,255,953)
- [título] "Nova Vaga" — topo, no topo da página, à esquerda (300,19,91,28)
- [título] "Nova Vaga" — conteúdo, na parte de cima, ao centro (450,99,121,32)
- [botão] "←" — conteúdo, na parte de cima, à esquerda (418,103,16,24)
- [título] "Empresa Contratante" — conteúdo, na parte de cima, ao centro (439,176,678,20)
- [título] "Dados da Vaga" — conteúdo, na parte de cima, ao centro (439,338,678,20)
- [campo] "Ex: Desenvolvedor Full Stack Pleno" — conteúdo, no meio da tela, ao centro, logo abaixo de “Dados da Vaga” (439,398,447,38)
- [campo] "Área" — conteúdo, no meio da tela, à direita, logo abaixo de “Dados da Vaga” (902,398,215,38)
- [campo] "Ex: 44h, 12x36, 30h" — conteúdo, no meio da tela, à direita, logo abaixo de “Ex: Desenvolvedor Full Stack Pleno” (786,476,331,38)
- [campo] "Cidade" — conteúdo, no meio da tela, ao centro (439,554,331,38)
- [campo] "Bairro" — conteúdo, no meio da tela, à direita, logo abaixo de “Ex: 44h, 12x36, 30h” (786,554,331,38)
- [radio] "Presencial" — conteúdo, no meio da tela, ao centro, logo abaixo de “Cidade” (439,635,13,13)
- [radio] "Home Office" — conteúdo, no meio da tela, ao centro, logo abaixo de “Cidade” (541,635,13,13)
- [radio] "Híbrido" — conteúdo, no meio da tela, ao centro, logo abaixo de “Cidade” (656,635,13,13)
- [checkbox] "Vaga PCD" — conteúdo, no meio da tela, ao centro, logo abaixo de “Presencial” (439,671,13,13)
- [checkbox] "1º Emprego" — conteúdo, no meio da tela, ao centro, logo abaixo de “Home Office” (541,671,13,13)
- [checkbox] "Urgente" — conteúdo, no meio da tela, ao centro, logo abaixo de “Híbrido” (652,671,13,13)
- [checkbox] "Destaque" — conteúdo, no meio da tela, ao centro, logo abaixo de “Cidade” (739,671,13,13)
- [título] "Salário" — conteúdo, no meio da tela, ao centro (439,754,678,20)
- [checkbox] "A combinar" — conteúdo, no meio da tela, ao centro, logo abaixo de “Salário” (439,793,13,13)
- [link] "Falar com o suporte no WhatsApp" — conteúdo, no meio da tela, à direita (1200,820,56,56)
- [campo] "3.000,00" — conteúdo, no meio da tela, ao centro, logo abaixo de “A combinar” (439,850,678,38)
- [selo] "··" — menu lateral, no meio da tela, à esquerda (16,858,32,32)
- [título] "Contato / Candidatura" — conteúdo, mais abaixo (rolando a página), ao centro (439,954,678,20)
- [campo] "https://seusite.com/candidatura" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Contato / Candidatura” (439,1014,678,38)
- [campo] "(27) 99999-9999" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “https://seusite.com/candidatura” (518,1113,599,38)
- [campo] "rh@empresa.com.br" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “(27) 99999-9999” (439,1192,678,38)
- [título] "Descrição" — conteúdo, mais abaixo (rolando a página), ao centro (439,1316,678,20)
- [campo de texto longo] "Descreva a vaga, responsabilidades, rotina…" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Descrição” (439,1376,678,138)
- [campo de texto longo] "Formação, experiência, habilidades…" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Descreva a vaga, responsabilidades,” (439,1561,678,98)
- [campo de texto longo] "Vale-refeição Plano de saúde Vale-transporte" — conteúdo, mais abaixo (rolando a página), ao centro, logo abaixo de “Formação, experiência, habilidades…” (439,1706,678,98)
- [título] "Configurações" — conteúdo, mais abaixo (rolando a página), ao centro (439,1877,678,20)
- [campo] "" — conteúdo, mais abaixo (rolando a página), à direita, logo abaixo de “Configurações” (786,1937,331,38)
- [botão] "Cancelar" — conteúdo, no fim da página, à direita (889,2020,98,42)
- [botão] "Publicar vaga" — conteúdo, no fim da página, à direita (999,2020,139,42)
