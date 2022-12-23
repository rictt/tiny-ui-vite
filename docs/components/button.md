# Button按钮

常用操作按钮

## 基础用法

基础的函数用法

:::demo 使用`size`, `color`, `plain`, `round`属性来定义Button的样式
```vue
<template>
 <div style="margin-bottom:20px;">
  <VButton color="blue">主要按钮</VButton>
  <VButton color="green">绿色按钮</VButton>
  <VButton color="gray">灰色按钮</VButton>
  <VButton color="yellow">黄色按钮</VButton>
  <VButton color="red">红色按钮</VButton>
 </div>
 <div style="margin-bottom:20px;"
 >
  <VButton color="blue" plain>朴素按钮</VButton>
  <VButton color="green" plain>绿色按钮</VButton>
  <VButton color="gray" plain>灰色按钮</VButton>
  <VButton color="yellow" plain>黄色按钮</VButton>
  <VButton color="red" plain>红色按钮</VButton>
 </div>
 <div style="margin-bottom:20px;">
  <VButton size="small" plain>小按钮</VButton>
  <VButton size="medium" plain>中按钮</VButton>
  <VButton size="large" plain>大按钮</VButton>
 </div>
 <div style="margin-bottom:20px;">
  <VButton color="blue" round plain icon="search">搜索按钮</VButton>
  <VButton color="green" round plain icon="edit">编辑按钮</VButton>
  <VButton color="gray" round plain icon="check">成功按钮</VButton>
  <VButton color="yellow" round plain icon="message">提示按钮</VButton>
  <VButton color="red" round plain icon="delete">删除按钮</VButton>
 </div>
 <div style="margin-bottom:20px;">
  <VButton color="blue" round plain icon="search"></VButton>
  <VButton color="green" round plain icon="edit"></VButton>
  <VButton color="gray" round plain icon="check"></VButton>
  <VButton color="yellow" round plain icon="message"></VButton>
  <VButton color="red" round plain icon="delete"></VButton>
 </div>
</template>
```
:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

::: demo
```vue
<template>
 <div class="flex flex-row">
  <VButton icon="edit" plain></VButton>
  <VButton icon="delete" plain></VButton>
  <VButton icon="share" plain></VButton>
  <VButton round plain icon="search">搜索</VButton>
 </div>
</template>
```
:::
