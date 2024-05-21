import {
  InjectionKey,
  Ref,
  computed,
  getCurrentInstance,
  inject,
  ref,
  unref,
} from "vue";

export const defaultNamespace = "soul-admin";

function _bem(namespace: string, block: string, blockSuffix: string, element: string) {
  let cls = `${namespace}-${block}`
  if (blockSuffix) {
    cls += `-${blockSuffix}`
  }
  if (element) {
    cls += `__${element}`
  }

  return cls;
}

const namespaceContextKey: InjectionKey<Ref<string | undefined>> = Symbol(
  "namespaceContextKey"
);

function useGetDerivedNamespace(namespaceOverrides?: Ref<string | undefined>) {
  const derivedNamespace =
    namespaceOverrides ||
    (getCurrentInstance()
      ? inject(namespaceContextKey, ref(defaultNamespace))
      : ref(defaultNamespace));

  const namespace = computed(() => {
    return unref(derivedNamespace) || defaultNamespace;
  });

  return namespace;
}

export function useNamespace(
  block: string,
  namespaceOverrides?: Ref<string | undefined>
) {
  const namespace = useGetDerivedNamespace(namespaceOverrides);
  const b = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "");
  const e = (element = "") => _bem(namespace.value, block, "", element)

  return {
    b,
    e
  }
}
