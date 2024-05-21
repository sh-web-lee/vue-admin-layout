<template>
  <AdminLayout
    :header-height="40"
    :sider-width="250"
    :is-mobile="false"
    mode='vertical'
    mobile-sider-class="abc"
  >
    <template #header>
      <div class="h-full bg-[#eee]">
        header
      </div>
    </template>
    <template #sider>
      <div class="bg-[#aaa] h-full">
        Sider
      </div>
    </template>
    <div class="bg-[#555]">
      Content
    </div>
    <template #footer>
      <div>
        Footer
      </div>
    </template>
  </AdminLayout>
</template>
<script lang="ts" setup>
import AdminLayout from '../libs/admin-layout/index.vue'

</script>
<style lang="scss" scoped></style>