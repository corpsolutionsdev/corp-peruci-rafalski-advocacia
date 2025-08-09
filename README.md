# 🏛️ Peruci & Rafalski Advocacia

**Especialistas em Direitos Trabalhistas e Previdenciários em Canoinhas-SC**

[![Website](https://img.shields.io/badge/Website-Live-brightgreen)](https://perucierafalski.adv.br)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-5.0-orange.svg)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-3.0-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📋 Sobre o Projeto

Website institucional da **Peruci & Rafalski Advocacia**, especializada em direitos trabalhistas e previdenciários. O projeto oferece uma landing page moderna, responsiva e otimizada para SEO, com foco na conversão de visitantes em clientes.

### 🎯 Objetivos
- Apresentar os serviços jurídicos da advocacia
- Estabelecer credibilidade e confiança
- Facilitar o contato e agendamento de consultas
- Otimizar para motores de busca (SEO)
- Proporcionar experiência mobile-first

## 🚀 Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilos modernos com variáveis CSS e Flexbox/Grid
- **JavaScript (ES6+)** - Funcionalidades interativas e responsivas
- **Font Awesome 6.4.0** - Ícones vetoriais
- **Google Fonts (Inter)** - Tipografia moderna e legível

### SEO & Performance
- **Meta tags otimizadas** para redes sociais (Open Graph, Twitter Cards)
- **Schema.org markup** para rich snippets
- **Sitemap XML** para indexação
- **Robots.txt** para controle de crawlers
- **Manifest.json** para PWA
- **Lazy loading** de imagens
- **Compressão de imagens** (WebP)

### Design & UX
- **Design responsivo** para todos os dispositivos
- **Paleta de cores** profissional (preto, laranja, branco)
- **Animações CSS** suaves e elegantes
- **Navegação intuitiva** com menu mobile
- **Call-to-actions** estratégicos

## 📁 Estrutura do Projeto

```
corp-peruci-rafalski-advocacia/
├── 📄 index.html              # Página principal
├── 📄 manifest.json           # Configuração PWA
├── 📄 robots.txt              # Controle de crawlers
├── 📄 sitemap.xml             # Mapa do site
├── 📄 LICENSE                  # Licença MIT
├── 📄 README.md               # Este arquivo
│
├── 📁 src/                    # Código fonte
│   ├── 📁 css/
│   │   └── 📄 base.css        # Estilos principais
│   ├── 📁 js/
│   │   └── 📄 index.js        # Funcionalidades JavaScript
│   └── 📁 img/
│       ├── 📄 background.webp # Imagem de fundo
│       ├── 📄 logo.png        # Logo da advocacia
│       ├── 📄 icon.png        # Favicon
│       ├── 📄 peruci.png      # Foto do Dr. Peruci
│       └── 📄 rafalski.png    # Foto do Dr. Rafalski
│
└── 📁 docs/                   # Documentação (se aplicável)
```

## 🎨 Características do Design

### Paleta de Cores
- **Primária**: `#020202` (Preto)
- **Secundária**: `#0d0e0f` (Cinza escuro)
- **Destaque**: `#f77428` (Laranja)
- **Texto claro**: `#ffffff` (Branco)
- **Texto escuro**: `#333333` (Cinza escuro)

### Tipografia
- **Família**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700, 800
- **Hierarquia**: Títulos, subtítulos e corpo de texto bem definidos

### Componentes
- **Header fixo** com navegação responsiva
- **Hero section** com call-to-action principal
- **Seções modulares** para cada serviço
- **Cards informativos** com hover effects
- **Formulário de contato** integrado
- **Footer** com informações completas

## 🚀 Como Executar

### Pré-requisitos
- Navegador web moderno
- Servidor web local (opcional para desenvolvimento)

### Instalação Local

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/corp-peruci-rafalski-advocacia.git
   cd corp-peruci-rafalski-advocacia
   ```

2. **Abra no navegador**
   - Duplo clique no arquivo `index.html`, ou
   - Use um servidor local:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (com http-server)
     npx http-server
     
     # PHP
     php -S localhost:8000
     ```

3. **Acesse no navegador**
   ```
   http://localhost:8000
   ```

### Deploy em Produção

1. **Upload dos arquivos** para o servidor web
2. **Configurar domínio** e SSL
3. **Verificar SEO** com ferramentas como Google Search Console
4. **Testar responsividade** em diferentes dispositivos

## 📱 Funcionalidades

### ✅ Implementadas
- [x] Design responsivo para mobile, tablet e desktop
- [x] Menu de navegação mobile com hamburger
- [x] Scroll suave para seções internas
- [x] Header com efeito de scroll
- [x] Botão "Voltar ao topo"
- [x] Lazy loading de imagens
- [x] Animações CSS e transições
- [x] Formulário de contato funcional
- [x] Integração com WhatsApp
- [x] SEO otimizado com meta tags
- [x] PWA com manifest.json
- [x] Sitemap XML
- [x] Robots.txt configurado

### 🔄 Futuras Implementações
- [ ] Blog jurídico integrado
- [ ] Sistema de agendamento online
- [ ] Chat em tempo real
- [ ] Área do cliente
- [ ] Integração com CRM
- [ ] Analytics avançado
- [ ] Testes A/B
- [ ] Otimização de performance

## 🎯 Seções da Landing Page

1. **Header** - Logo e navegação principal
2. **Hero** - Apresentação e call-to-action principal
3. **Sobre** - Perfil dos advogados
4. **Serviços** - Áreas de atuação
5. **Processo** - Como trabalhamos
6. **Casos de Sucesso** - Histórico de vitórias
7. **Depoimentos** - Feedback dos clientes
8. **Contato** - Formulário e informações
9. **Footer** - Links e informações adicionais

## 🔧 Personalização

### Cores
Edite as variáveis CSS em `src/css/base.css`:
```css
:root {
    --primary-color: #020202;
    --secondary-color: #0d0e0f;
    --accent-color: #f77428;
    /* ... outras cores */
}
```

### Conteúdo
- **Textos**: Edite diretamente no `index.html`
- **Imagens**: Substitua arquivos em `src/img/`
- **Funcionalidades**: Modifique `src/js/index.js`

### SEO
- **Meta tags**: Atualize em `index.html`
- **Sitemap**: Modifique `sitemap.xml`
- **Manifest**: Ajuste `manifest.json`

## 📊 Performance

### Otimizações Implementadas
- **Imagens WebP** para melhor compressão
- **CSS minificado** e organizado
- **JavaScript modular** e eficiente
- **Lazy loading** de recursos
- **Fonts otimizadas** com display swap

### Métricas Alvo
- **Lighthouse Score**: 90+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🌐 Compatibilidade

### Navegadores Suportados
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

### Dispositivos
- ✅ Desktop (1920x1080+)
- ✅ Tablet (768x1024)
- ✅ Mobile (320x568+)
- ✅ Landscape e Portrait

## 📈 SEO & Marketing

### Meta Tags Implementadas
- **Title** otimizado para conversão
- **Description** com call-to-action
- **Keywords** relevantes para o nicho
- **Open Graph** para redes sociais
- **Twitter Cards** para compartilhamento
- **Schema.org** para rich snippets

### Local SEO
- **Geo tags** para Canoinhas-SC
- **Coordenadas** precisas
- **Informações de negócio** estruturadas
- **Números de contato** e endereço

## 🤝 Contribuição

1. **Fork** o projeto
2. **Crie** uma branch para sua feature
3. **Commit** suas mudanças
4. **Push** para a branch
5. **Abra** um Pull Request

### Padrões de Código
- **HTML**: Semântico e acessível
- **CSS**: BEM methodology
- **JavaScript**: ES6+ com comentários
- **Commits**: Conventional Commits

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**Peruci & Rafalski Advocacia**
- **Localização**: Canoinhas-SC, Brasil
- **Website**: [perucierafalski.adv.br](https://perucierafalski.adv.br)
- **Email**: [contato@perucierafalski.adv.br](mailto:contato@perucierafalski.adv.br)
- **WhatsApp**: [Entre em contato](https://wa.me/5547999999999)

## 🙏 Agradecimentos

- **Google Fonts** pela tipografia Inter
- **Font Awesome** pelos ícones
- **Comunidade web** pelas melhores práticas
- **Clientes** pela confiança depositada

---

**Desenvolvido com ❤️ para a Peruci & Rafalski Advocacia**

*Última atualização: Janeiro 2024*
