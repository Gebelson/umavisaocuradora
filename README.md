# Uma Visão Curadora

Página de vendas estática da coleção *Uma Visão Curadora*. Os arquivos publicados estão em `dist/`.

Para conferir localmente, execute `python -m http.server 4173 --directory dist` e abra `http://localhost:4173`.

## Segurança

- A página usa uma Content Security Policy (CSP) em `<meta>` que permite apenas os recursos necessários. O JavaScript local usa `textContent` ao atualizar o diálogo; não interpreta conteúdo como HTML.
- A política de referência evita enviar o endereço da página a outros sites.
- A publicação atual usa o controle de acesso da hospedagem. Não coloque senhas, tokens ou dados privados em HTML, CSS, JavaScript ou arquivos de `dist/`.
- O servidor de hospedagem deve configurar cabeçalhos de resposta como `Content-Security-Policy` (incluindo `frame-ancestors`), `X-Content-Type-Options` e `Referrer-Policy` quando esse recurso estiver disponível. A CSP em `<meta>` não substitui esses cabeçalhos.
- Quem recebe uma página no navegador pode ver seu HTML, CSS, JavaScript e imagens pelas ferramentas do próprio navegador. A proteção de conteúdo confidencial precisa ocorrer antes de enviá-lo ao visitante.
