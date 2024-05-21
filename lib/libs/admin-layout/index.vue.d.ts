import type { LayoutProps } from './types';
type SlotFn = (props?: Record<string, unknown>) => any;
type Slots = {
    /** slot main */
    default?: SlotFn;
    /** slot header */
    header?: SlotFn;
    /** slot sider */
    sider?: SlotFn;
    /** slot footer */
    footer?: SlotFn;
};
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<LayoutProps>, {
    mode: string;
    headerHeight: number;
    siderCollapse: boolean;
    headerVisible: boolean;
    siderVisible: boolean;
    siderWidth: number;
    siderCollapsedWidth: number;
    footerVisible: boolean;
    footerHeight: number;
    maxZIndex: number;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<LayoutProps>, {
    mode: string;
    headerHeight: number;
    siderCollapse: boolean;
    headerVisible: boolean;
    siderVisible: boolean;
    siderWidth: number;
    siderCollapsedWidth: number;
    footerVisible: boolean;
    footerHeight: number;
    maxZIndex: number;
}>>>, {
    mode: import("./types").LayoutMode;
    maxZIndex: number;
    headerVisible: boolean;
    headerHeight: number;
    siderVisible: boolean;
    siderCollapse: boolean;
    siderWidth: number;
    siderCollapsedWidth: number;
    footerHeight: number;
    footerVisible: boolean;
}, {}>, Readonly<Slots> & Slots>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
