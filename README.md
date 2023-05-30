# Vue 3 + TypeScript + Vite

### 1 项目配置

#### 一、eslint 配置

**eslint 中文官网:http://eslint.cn/**
配置文件: `.eslint.cjs`
忽略文件: `.eslintignore`

#### 二、配置 prettier

规则: `.prettierrc.json `
忽略文件: `.prettierignore `
**通过 pnpm run lint 去检测语法，如果出现不规范格式,通过 pnpm run fix 修改**

#### 三、配置 stylelint

[stylelint](https://stylelint.io/)为 css 的 lint 工具。
配置文件: `.stylelintrc.cjs`
忽略文件: `.stylelintignore `
**官网:https://stylelint.bootcss.com/**

**运行`pnpm run format`的时候，会把代码 格式化**

#### 四、配置 husky

### 2 src 别名的配置

`vite.config.ts` - _alias_
`tsconfig.json` - _compilerOptions/paths_

### 3 环境变量的配置

```
.env.development
.env.production
.env.test
```

`变量必须以 VITE_ 为前缀才能暴露给外部读取`
`通过 import.meta.env 获取环境变量`

### 4 SVG 图标配置

SVG 全部放在 `src/assets/icons`
已配置为全剧组件

### 5 全局组件

`src/components/index.ts`内部可增加全局组建配置

### 6 sass

`src/styles/index.scss` 全局 sass 入口
`src/styles/reset.scss` 清除默认样式
`src/styles/index.scss` 全局变量声明文件$.
