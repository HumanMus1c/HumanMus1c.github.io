---
title: 🎉Github博客笔记🎉
tags:
  - 笔记
  - 博客
---

[![Logo](/images/Logo.png "Blog")](https://github.com/HumanMus1c)

# #🔑生成 ssh 密钥并绑定到GitHub

```bash
	ssh-keygen -t rsa -C "123456789@xxx.com"
```

# #🔑测试密钥是否绑定成功

```bash
	ssh -T git@github.com
```

# #👤设置全局用户

```bash
	git config --global user.name "HumanMus1c"
	git config --global user.email "123456789@xxx.com"
```


# #🔲安装hexo博客框架

```bash
	npm install -g hexo-cli
```

## #初始化博客

```bash
	npx hexo init
```

# #🔳安装Next主题(主题文件放置到theme文件夹下)

```bash
	npm install hexo-theme-next
```

## #本地预览网站步骤

### #每次修改文件都要重新生成博客页面

```bash
	hexo c
```

```bash
	hexo g
```

```bash
	hexo s
```

# #📝设置主题并引用theme config配置文件

```markdown
	# Extensions
	## Plugins: https://hexo.io/plugins/
	## Themes: https://hexo.io/themes/
	theme: next
	#themes/next/_config.yml
```

> theme配置信息next要和根目录下themes文件夹中放置的子主题文件夹名一致，才会读取主题文件以及配置信息。
> 
![代码](/images/Untitled.png "代码")
![文件夹](/images/Untitled1.png "文件夹")

# #🚀配置部署信息


## 🔧仓库设置修改：


### 🔧Github仓库名格式：&lt;github ID&lt;.github.io



### 🔧修改默认branch为:main
![仓库Settings修改branch](/images/Untitled2.png "仓库Settings修改branch")


### 🔧修改Pages为gh-pages_/root
![仓库Settings修改pages](/images/Untitled3.png "仓库Settings修改pages_Build and Deployment")


# #根目录 _config文件设置github部署配置信息

```markdown
	# Deployment
	## Docs: https://hexo.io/docs/one-command-deployment
	deploy:
	type: git
	repo: git@github.com:HumanMus1c/HumanMus1c.github.io.git
	branch: gh-pages
```

# #📄网页内容

#将需要生成的网页内容以.md格式放置在/source/_posts目录下

🔔文件开头需要按格式填写标题🔔

⚠️否则该文章将以“未命名”为标题⚠️

```markdown
---
title: Github网站笔记
---
```

链接图片
给图片增加链接，请将图像的Markdown 括在方括号中，然后将链接添加在圆括号中。

[![图片](/images/desktop-202303200000.jpg "landscape")](https://markdown.com.cn/basic-syntax/images.html)