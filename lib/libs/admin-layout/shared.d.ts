import type { KebabCase } from '../../types';
import type { LayoutProps } from './types';
/** 最大的zIndex值 */
export declare const LAYOUT_MAX_Z_INDEX = 100;
type Prefix = '--soul-';
type CssVarsPros = Pick<LayoutProps, 'headerHeight' | 'footerHeight' | 'siderWidth' | 'siderCollapsedWidth'> & {
    headerZIndex?: number;
    siderZIndex?: number;
    footerZIndex?: number;
};
type CssVars = {
    [K in keyof CssVarsPros as `${Prefix}${KebabCase<K>}`]: string | number;
};
export declare function createLayoutCssVars(props: LayoutProps): CssVars;
export {};
