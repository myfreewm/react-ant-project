# react-ant-project

## Step by Step Documentation

- English: https://ant.design/docs/react/use-with-create-react-app
- 中文：https://ant.design/docs/react/use-with-create-react-app-cn

## Preview

```bash
$ npm install
$ npm start
```

or:

```bash
$ yarn
$ yarn start
```

## 目录结构

```
- src/              所有源代码存放的路径
-   index.js        整个应用的入口
-   views/          应用中某个页面的入口文件，一般为路由组件 
-     Home.js       例如，首页的入口就是Home.js
-     Home.css      例如，首页的入口就是Home.css
-   components/     所有应用的组件
-      Home/        例如，views/中一个名为Home的view，则在components/中就有一个名为Home的子文件夹
-        Table.js   Home页面中的一个列表组件
-        Table.css  列表组件对应的样式
-      Share/       不归属于任何view的组件，如一些公共组件等
-   layouts/        布局相关的组件及样式，如菜单、侧边栏、header、footer等
-   redux/          Redux store相关的配置
-   routes/         路由相关的配置
-   utils/          工具函数、常量等
-   styles/         全局公共样式
-   index.css       应用主样式表
```
