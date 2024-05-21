import type { KebabCase } from '../../types'
import type { LayoutProps } from './types';



/** 最大的zIndex值 */
export const LAYOUT_MAX_Z_INDEX = 100;

type Prefix = '--soul-';

type CssVarsPros = Pick<
  LayoutProps,
  'headerHeight' | 'footerHeight' | 'siderWidth' | 'siderCollapsedWidth'
> & {
  headerZIndex?: number;
  siderZIndex?: number;
  footerZIndex?: number;
}

type CssVars = {
  [K in keyof CssVarsPros as `${Prefix}${KebabCase<K>}`]: string | number
}

function createCssVars(props: CssVarsPros) {
  const cssVars: CssVars = {
    '--soul-footer-height': `${props.footerHeight}px`,
    '--soul-footer-z-index': `${props.footerZIndex}`,
    '--soul-header-height': `${props.headerHeight}px`,
    '--soul-header-z-index': `${props.headerZIndex}`,
    '--soul-sider-collapsed-width': `${props.siderCollapsedWidth}px`,
    '--soul-sider-width': `${props.siderWidth}px`,
    '--soul-sider-z-index': `${props.siderZIndex}`
  }
  
  return cssVars;
}

export function createLayoutCssVars(props: LayoutProps) {
  const {
    headerHeight,
    siderWidth,
    maxZIndex = LAYOUT_MAX_Z_INDEX,
    isMobile,
    siderCollapsedWidth,
    footerHeight,
    mode
  } = props;


  const headerZIndex = maxZIndex - 3;
  const siderZIndex = mode === 'vertical' || isMobile ? maxZIndex - 1 : maxZIndex - 4;
  const footerZIndex = maxZIndex - 5;

  const cssProps: CssVarsPros = {
    headerHeight,
    headerZIndex,
    siderWidth,
    siderZIndex,
    siderCollapsedWidth,
    footerHeight,
    footerZIndex
  }

  return createCssVars(cssProps)
}