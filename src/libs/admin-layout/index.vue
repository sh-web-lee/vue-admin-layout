<template>
  <div :class="[':soul: relative h-full', ...comKls]" :style="cssVars">
    <div :class="[
      ':soul: flex flex-col h-full',
      ns.e('wrapper')
    ]">
      <!-- header -->
      <template v-if="showHeader">
        <header
          v-show="!fullContent"
          :class="[
            style['layout-header'],
            ns.e('header'),
            headerLeftGapClass
          ]"
        >
          <slot name="header"></slot>
        </header>
      </template>
  
      <!-- web sider -->
      <template v-if="showSider">
        <aside
          :class="[
            ':soul: absolute left-0 top-0 h-full',
            style['layout-sider'],
            siderClass,
            siderPaddingClass,
            ns.e('sider'),
            siderCollapse ? style['layout-sider_collapsed'] : style['layout-sider']
          ]"
        >
          <slot name="sider"></slot>
        </aside>
      </template>
  
      <!-- mobile sider -->
      <template v-if="showMobileSider">
        <aside
          :class="[
            style['layout-mobile-sider'],
            mobileSiderClass,
            ns.e('sider')
          ]"
        >
          <slot name="sider"></slot>
        </aside>
      </template>

      <!-- content -->
      <main
        :class="[
          ':soul: flex flex-col flex-grow',
          leftGapClass,
          contentClass,
          ns.e('content')
        ]"
      >
        <slot />
      </main>

      <!-- footer -->
      <template v-if="showFooter">
        <footer
          v-show="!fullContent"
          :class="[
            style['layout-footer'],
            ':soul: flex-shrink-0',
            footerClass,
            footerLeftGapClass,
            ns.e('footer'),
            { ':soul: absolute left-0 bottom-0 w-full': fixedFooter }
          ]"
        >
          <slot name="footer" />
        </footer>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from "../..//hooks"
import { LAYOUT_MAX_Z_INDEX, createLayoutCssVars } from './shared';
import type { LayoutProps } from './types';
import style from './index.module.css';

const props = withDefaults(defineProps<LayoutProps>(), {
  mode: 'vertical',
  headerHeight: 56,
  siderCollapse: false,
  headerVisible: true,
  siderVisible: true,
  siderWidth: 220,
  siderCollapsedWidth: 64,
  footerVisible: true,
  footerHeight: 48,
  maxZIndex: LAYOUT_MAX_Z_INDEX,
  
})

type SlotFn = (props?: Record<string, unknown>) => any

type Slots = {
  /** slot main */
  default?: SlotFn;
  /** slot header */
  header?: SlotFn;
  /** slot sider */
  sider?: SlotFn;
  /** slot footer */
  footer?: SlotFn;
}
const slots = defineSlots<Slots>();

// mode 水平、垂直
const isVertical = computed(() => props.mode === 'vertical');
const isHorizontal = computed(() => props.mode === 'horizontal');

// class样式
const leftGapClass = computed(() =>{
  if (!props.fullContent && showSider.value) {
    return props.siderCollapse ? style['left-gap_collapsed'] : style['left-gap']
  }
})

const headerLeftGapClass = computed(() => (isVertical.value ? leftGapClass.value : ''))

const footerLeftGapClass = computed(() => {
  const condition1 = isVertical.value;
  const condition2 = isHorizontal.value && props.fixedFooter;

  if (condition1 || condition2) {
    return leftGapClass.value
  }

  return ''
})

// visible
const showHeader = computed(() => Boolean(slots.header) && props.headerVisible)
const showSider = computed(() => !props.isMobile && Boolean(slots.sider) && props.siderVisible)
const showMobileSider = computed(() => props.isMobile && Boolean(slots.sider) && props.siderVisible)
const showFooter = computed(() => Boolean(slots.footer) && props.footerVisible);


const ns = useNamespace('layout')

const comKls = computed(() => {
  return [
    ns.b('')
  ]
})

/** CSS 变量 */
const cssVars = computed(() =>createLayoutCssVars(props))

const siderPaddingClass = computed(() => {
  let cls = '';

  if (showHeader.value && !headerLeftGapClass.value) {
    cls += style['sider-padding-top']
  }

  return cls;
})
</script>
<style lang="scss" scoped></style>