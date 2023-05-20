# 建立Github网站笔记
网站笔记
# #生成 ssh 密钥并绑定到GitHub

```bash
**ssh-keygen -t rsa -C "[1714076628@qq.com](mailto:1714076628@qq.com)"**
```

# #测试密钥是否绑定成功

```bash
**ssh -T [git@github.com](mailto:git@github.com)**
```

# #设置全局用户

```bash
**git config --global [user.name](http://user.name/) "HumanMus1c"
git config --global user.email "[1714076628@qq.com](mailto:1714076628@qq.com)"**
```

[git@github.com](mailto:git@github.com):HumanMus1c/HumanMus1c.github.io.git
[https://github.com/HumanMus1c/HumanMus1c.github.io.git](https://github.com/HumanMus1c/HumanMus1c.github.io.git)

# 安装hexo博客框架

```bash
**npm install -g hexo-cli**
```

### #初始化博客

```bash
**npx hexo init**
```

# 安装Next主题

```bash
**npm install hexo-theme-next**
```

## #每次修改文件都要重新生成博客页面

```bash
**hexo c**
```

```bash
**hexo g**
```

```bash
**hexo d**
```

```bash
**hexo s**
```