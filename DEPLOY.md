# 🚀 Guia de Deploy para GitHub Pages

## Método 1: Deploy Automático com GitHub Actions (Recomendado)

### Passos:

1. **Faça commit e push das alterações**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

2. **Configure o GitHub Pages**
   - Vá em: https://github.com/vitorluzz/JC_Project/settings/pages
   - Em **Source**, selecione: **GitHub Actions**
   - Aguarde o deploy automático (cerca de 2-3 minutos)

3. **Acesse seu site**
   - URL: https://vitorluzz.github.io/JC_Project/

### Como funciona:
- Toda vez que você fizer push na branch `main`, o GitHub Actions irá:
  1. Instalar as dependências
  2. Fazer build do projeto
  3. Fazer deploy automático para GitHub Pages

---

## Método 2: Deploy Manual com gh-pages

### Passos:

1. **Certifique-se de que está na branch main**
   ```bash
   git checkout main
   ```

2. **Execute o comando de deploy**
   ```bash
   npm run deploy
   ```

3. **Configure o GitHub Pages**
   - Vá em: https://github.com/vitorluzz/JC_Project/settings/pages
   - Em **Source**, selecione:
     - **Branch**: `gh-pages`
     - **Folder**: `/ (root)`
   - Clique em **Save**

4. **Acesse seu site**
   - URL: https://vitorluzz.github.io/JC_Project/

---

## 🔄 Atualizando o Site

### Com GitHub Actions (automático):
```bash
git add .
git commit -m "Sua mensagem de commit"
git push origin main
```
*O deploy acontece automaticamente!*

### Com gh-pages (manual):
```bash
npm run deploy
```

---

## ✅ Checklist Antes do Deploy

- [ ] Todas as imagens estão na pasta `public/img/`
- [ ] Todos os modelos 3D estão na pasta `public/objects/`
- [ ] O build local funciona (`npm run build`)
- [ ] O preview local funciona (`npm run preview`)
- [ ] As alterações foram commitadas no Git

---

## 🐛 Troubleshooting

### Erro 404 ao acessar o site
**Solução**: Verifique se a configuração do GitHub Pages está correta (Source: GitHub Actions ou gh-pages)

### Assets não carregam (404)
**Solução**: Confirme que `base: '/JC_Project/'` está em `vite.config.js`

### Deploy não funciona
**Solução**: 
1. Verifique se o repositório é público
2. Confirme que GitHub Pages está habilitado nas configurações
3. Veja os logs do GitHub Actions em: https://github.com/vitorluzz/JC_Project/actions

### Mudanças não aparecem
**Solução**: 
1. Limpe o cache do navegador (Ctrl + Shift + R)
2. Aguarde 2-3 minutos após o deploy
3. Verifique se o commit chegou no GitHub

---

## 📱 Testando Localmente com Base Path

Para testar como ficará no GitHub Pages:

```bash
npm run build
npm run preview
```

Acesse: http://localhost:4173/JC_Project/

---

## 🎯 URLs Importantes

- **Repositório**: https://github.com/vitorluzz/JC_Project
- **Site**: https://vitorluzz.github.io/JC_Project/
- **GitHub Actions**: https://github.com/vitorluzz/JC_Project/actions
- **Configurações Pages**: https://github.com/vitorluzz/JC_Project/settings/pages
