/**
 * 头部配置
*/
interface HeaderConfig {
    /**
   * 头部可见
   * @default true
  */
  headerVisible?: boolean;
  /**
   * 头部高度
   * @default 56px
  */
  headerHeight?: number;
}

/**
 * 侧边栏配置
*/
interface SiderConfig {
    /**
   * 侧边栏可见
   * @default true
  */
  siderVisible?: boolean;
    /**
   * 侧边栏样式名
   * @default ''
   */
  siderClass?: string;
    /**
   * 移动端的侧边栏样式名
   * @default ''
  */
  mobileSiderClass?: string;
  /**
   * 侧边栏折叠状态
   * @default false
  */
  siderCollapse?: boolean;
  /**
  * 侧边栏未折叠时的宽度
  * @default 220px
  */
  siderWidth?: number;
  /**
   * 侧边栏折叠时的宽度
   * @default 64px
  */
  siderCollapsedWidth?: number;
}

interface ContentConfig {
  /**
   * 主体内容样式名
   * @default ''
  */
  contentClass?: string;
  /**
   * 主体内容是否全屏铺满
   * @description 铺满时，其他元素通过display: none进行隐藏
  */
  fullContent?: boolean;
}

/**
 * 底部配置
 */
interface FooterConfig {
  /**
   * 固定底部
   * @default true
  */
  fixedFooter?: boolean;
  /**
    * 底部可见
    * @default true
   */
  footerVisible?: boolean;
  /**
   * 底部样式名
   * @default ''
  */
  footerClass?: string;
  /**
   * 底部的高度
   * @default 48px
  */
  footerHeight?: number;
}

/**
 * 布局组件的属性
*/
export interface LayoutProps extends HeaderConfig, SiderConfig, ContentConfig, FooterConfig {
  /**
   * 布局模式
   * - {@link LayoutMode}
   */
  mode?: LayoutMode;
  /** 是否是移动端 */
  isMobile?: boolean;
  /** Header,Tab,Sider和Footer的zIndex取值不超过该值 */
  maxZIndex?: number;
}

/**
 * 布局模式
 * - horizontal 水平
 * - vertical 垂直
 */
export type LayoutMode = 'horizontal' | 'vertical';