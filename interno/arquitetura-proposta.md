# arquitetura proposta do suporte

## estado

- proposta em construção, sem implementação ou benchmark.
- organização aprovada pelo usuário: pastas públicas `usuario/`, `cliente/` e `admin/`, com relatórios em `interno/`; parceiro mantém permissão específica e não é cliente comum.
- modelos sugeridos, ainda não avaliados: usuário com qwen 3.7 flash; cliente com gpt 6 luna low; admin com gpt 6 luna medium.
- agentes de coleta usam gpt 6 luna medium pelo provedor configurado opencodex, não OpenRouter.
- a base é local, fora de `portal-cidade/`; criar ou publicar repositório GitHub não está autorizado nesta etapa.

## fluxo de baixo custo

1. o servidor determina portal, público e permissões reais; filtra o catálogo acessível antes da classificação.
2. uma chamada unificada ao classificador identifica categoria, aba e intenção/tipo de problema e devolve candidatos de documentos com scores. a página atual é pista, não autorização nem restrição absoluta de assunto.
3. proposta do usuário: se o score do candidato principal for maior que 0,80, apresentar o vídeo ou passo a passo correspondente sem chamar o modelo de chat. isso só se aplica a tutorial revisado, vigente, compatível com o público e com os pré-requisitos, e com asset de vídeo existente quando oferecido. nenhum artigo desta coleta está automaticamente aprovado.
4. oferecer feedback explícito: `resolveu` ou `não resolveu`; avançar passos guardados não exige LLM.
5. se não resolveu, perguntar brevemente em qual passo parou e o que apareceu, aproveitando informação já fornecida. carregar o documento correspondente na chamada ao modelo de chat, junto da pergunta original, tutorial/versão, passo e falha relatada. não pedir que o usuário repita a conversa.
6. o modelo orienta o desvio com as mesmas permissões. se necessário, recuperar documentos complementares autorizados, sem assumir que o primeiro diagnóstico estava correto.
7. se score insuficiente, candidatos ambíguos ou tutorial ausente/não aprovado, esclarecer ou recorrer ao modelo de chat; não mostrar um tutorial como diagnóstico confirmado.

## interpretação dos scores

- `maior que 80%` foi a proposta expressa; fronteira exata inicial: score > 0,80, não >= 0,80.
- até avaliar calibração em exemplos reais, tratar o número como score, não probabilidade comprovada de resolver.
- não multiplicar scores de categoria, aba e problema como se fossem probabilidades independentes.
- a margem entre candidatos e os critérios finais de liberação ainda precisam de avaliação; nenhum valor adicional foi aprovado.

## documentos e isolamento

- separar conteúdo nas pastas `usuario/`, `cliente/` e `admin/`; dentro de cada público, organizar por função/tarefa. Relatórios permanecem em `interno/` e não são carregados no chat.
- parceiro comercial e jornalista exigem capacidades próprias; pertencer à pasta cliente não autoriza acesso a todos os artigos dela.
- classificador sugere IDs existentes; servidor valida ID, versão, público, permissões, módulo e estado de revisão.
- relatórios internos, fontes técnicas e este documento de arquitetura não devem ser carregados automaticamente no atendimento.
- suporte orienta; não executa mudanças de cadastro, permissões ou dinheiro. a proposta não revoga D-395 do assistente público de busca.

## cache e contexto

- aproveitar cache de aplicação para tutoriais aprovados e avanço de passos sem geração.
- prompt cache é mecanismo distinto, dependente do endpoint: prefixo estável/versionado antes dos dados variáveis; nenhum hit foi medido nesta etapa.
- contexto de escalada guarda fatos curtos e atribuídos ao usuário, não raciocínio interno; nunca solicitar senha, código de recuperação ou credencial.
- feedback `não resolveu` mantém a instrução contestada e o resultado observado para não repetir cegamente o mesmo percurso.

## evidência necessária antes de ativar

- revisar o tutorial contra interface renderizada e regras atuais; conferir vídeo e transcrição quando disponíveis.
- avaliar classificação, calibração, escolha errada de tutorial e pedidos ambíguos por público.
- conferir isolamento entre portais e papéis e bloqueio de artigos não aprovados.
- medir custo total, latência, feedback de resolução, escaladas e retorno pelo mesmo problema; ausência de feedback não conta como resolução.
- medir redução de suporte humano contra baseline; meta de 90% não foi demonstrada.
