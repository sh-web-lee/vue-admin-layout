# @souljs/vue-admin-layout

<div align="center">
	<h1>Soul Admin Layout</h1>
  <span><a href="./README.md">English</a> | 中文</span>
</div>

> [!NOTE]
> 如果你认为`AdminLayout`对你有帮助，或者你喜欢我们的项目，请在GitHub上给我们⭐️。您的支持是我们不断改进和添加新功能的动力!感谢您的支持!


## 使用

**环境准备**

确保您的环境满足以下要求:

- **NodeJS**: >=18.0.0, 建议18.19.0或更高版本。

**安装**

```bash
npm install @souljs/vue-admin-layout
yarn install @souljs/vue-admin-layout
pnpm install @souljs/vue-admin-layout
```

```vue
<script setup lang="ts">
import { AdminLayout } from "@souljs/vue-admin-layout";
import "@souljs/vue-admin-layout/dist/style.css";
</script>

<template>
  <AdminLayout></AdminLayout>
</template>
```

## AdminLayout

后台管理系统的布局组件

- 支持垂直(vertical)和水平(horizontal)两种布局模式
- 布局由头部 Header、页签 Tab、侧边栏 Sider、主体内容 Content 和底部 Footer 组成，除了主体内容 Content，其余都可以控制是否渲染
- 支持两种滚动模式：容器滚动(wrapper)和主体内容滚动(content)
- 支持主体内容 Content 全屏

### Api 用法

#### 属性

| 字段                      | 说明                                                                     | 类型                      | 默认值                    |
| ------------------------- | ------------------------------------------------------------------------ | ------------------------- | ------------------------- |
| mode                      | 布局模式                                                                 | [LayoutMode](#LayoutMode) | "vertical"                |
| commonClass               | 组件的通用样式类名，可控制容器、头部、页签、侧边栏、主体和底部的公共样式 | string                    | "transition-all-300"      |
| fixedTop                  | 固定上面的头部和 Tab 页签部分                                            | boolean                   | true                      |


### 说明

#### LayoutMode

```ts
/**
 * 布局模式
 * - horizontal 水平
 * - vertical 垂直
 */
type LayoutMode = "horizontal" | "vertical";
```