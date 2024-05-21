# @souljs/vue-admin-layout

<div align="center">
	<h1>Soul Admin Layout</h1>
  <span>English | <a href="./README.zh_CN.md">中文</a></span>
</div>

> [!NOTE]
> If you think `SoybeanAdmin` is helpful to you, or you like our project, please give us a ⭐️ on GitHub. Your support is the driving force for us to continue to improve and add new features! Thank you for your support!


## Usage

**Environment Preparation**

Make sure your environment meets the following requirements:

- **NodeJS**: >=18.0.0, recommended 18.19.0 or higher.

**Install Dependencies**

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

Background management system layout components

- Support vertical (vertical) and horizontal (horizontal) two layout modes
- The layout consists of Header, Tab, sidebar Sider, body Content, and bottom Footer, all of which can be controlled to render or not, except body Content
- Supports full-screen Content

### Api usage

#### Stats

| Fields                      | Instructions                                                                     | Type                      | Default                    |
| ------------------------- | ------------------------------------------------------------------------ | ------------------------- | ------------------------- |
| mode                      | Layout Pattern                                                                 | [LayoutMode](#LayoutMode) | "vertical"                |
| commonClass               | A generic style class name for a component that controls common styles for containers, headers, tabs, sidebars, bodies, and bottoms | string                    | "transition-all-300"      |
| fixedTop                  | Fix the top header and Tab section                                            | boolean                   | true                      |


### Instructions

#### LayoutMode

```ts
/**
 * Layout Pattern
 * - horizontal 
 * - vertical 
 */
type LayoutMode = "horizontal" | "vertical";
```