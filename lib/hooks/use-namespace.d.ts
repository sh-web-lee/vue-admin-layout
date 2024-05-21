import { Ref } from "vue";
export declare const defaultNamespace = "soul-admin";
export declare function useNamespace(block: string, namespaceOverrides?: Ref<string | undefined>): {
    b: (blockSuffix?: string) => string;
    e: (element?: string) => string;
};
