# Tutu-wheel-react

[![CircleCI](https://circleci.com/gh/weite122/Tutu-wheel-react.svg?style=svg)](https://circleci.com/gh/weite122/Tutu-wheel-react)  [![npm version](https://badge.fury.io/js/tutu-wheel-react.svg)](https://badge.fury.io/js/tutu-wheel-react)  ![GitHub](https://img.shields.io/github/license/weite122/Tutu-wheel-react)


## 一套好用的 PC 端 React 组件库


- 本组件库仅供学习交流，请勿在生产环境中使用

## 安装
```vue
$ npm install tutu-wheel-react 
$ yarn add tutu-wheel-react 
```

## 使用

```vue
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Button } from 'tutu-wheel-react '
import 'tutu-wheel-react/lib/index.scss'


ReactDOM.render(
  <div>
    <Button>Default</Button>
  </div>,
  mountNode
)
```

- 需要注意的是，样式文件需要单独引入。

## 特别提醒
- 使用 tutu-wheel-react 时，需要使用 border-box 盒模型，否则会影响样式。代码示例：
```vue
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

