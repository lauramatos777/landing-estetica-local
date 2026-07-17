# Essenza Estética — Landing Page

Projeto de portfólio: landing page estática para um negócio fictício de estética e bem-estar.

**Objetivo**

- Criar uma landing page visualmente elegante, acessível e responsiva que comunique profissionalismo e converta visitantes em contatos.

**Tecnologias**

- HTML5
- CSS3 (vanilla)
- JavaScript (vanilla)

**Funcionalidades implementadas**

- Hero com CTAs principais
- Seção Sobre com pilares da marca
- Seção Serviços com metadados e micro-CTAs
- Seção Diferenciais com provas e fluxo de atendimento
- Depoimentos (testimonials)
- CTA final com formulário rápido que abre WhatsApp com mensagem pré-preenchida
- Footer moderno com navegação, contato e redes sociais
- Responsividade e melhorias de acessibilidade básicas

**Estrutura do projeto**

- File: [index.html](index.html)
- File: [styles/style.css](styles/style.css)
- File: [scripts/main.js](scripts/main.js)
- Directory: [assets/images](assets/images)

**Como executar localmente**

Opções simples para visualizar o projeto:

- Abrir `index.html` diretamente no navegador (uso rápido).
- Ou servir via um servidor local (recomendado):

```
# Python 3
python -m http.server 8000

# então abra http://localhost:8000
```

- Se preferir usar uma extensão do editor (por exemplo, Live Server no VS Code), abra a pasta do projeto e inicie o servidor.

**Validação e testes manuais**

- Teste de responsividade em tamanhos: desktop, notebook, tablet, celular.
- Navegação por teclado (skip link, foco visível).
- Envio do formulário CTA — abre WhatsApp com mensagem pré-preenchida.

**Aprendizados durante o desenvolvimento**

- Prática de layout responsivo com CSS Grid e Flexbox.
- Importância da semântica HTML (`figure`, `figcaption`, `main`, `nav`).
- Acessibilidade básica: skip link, foco visível e atributos `autocomplete`/`inputmode`.
- Fluxo de commits organizado com Conventional Commits ajuda a contar a história do projeto.

**Melhorias futuras**

- Implementar imagens reais e otimização (compressão, srcset).
- Testes automatizados de regressão visual e linting (HTML/CSS/JS).
- Inserir formulários reais com back-end para persistência de leads.
- Integrar analytics e monitoramento de performance.

**Autor**

Laura Matos — desenvolvedora front-end (projeto de portfólio).

---

Se precisar, posso gerar uma versão compacta do README em Português formal para apresentação ao cliente.
