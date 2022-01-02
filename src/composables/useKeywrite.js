import { ref, onMounted, computed } from "vue";
import KeywriteWeb from "@keywrite/web";
const useKeywrite = (inputRef, options) => {
  const instance = ref(null);
  const toggle = () => {
    if (instance.value) {
      instance.value.on = !instance.value.on;
    }
  };
  const on = computed(() => {
    return instance.value && instance.value.on;
  });
  onMounted(() => {
    instance.value = new KeywriteWeb(inputRef.value, options);
  });
  return { instance, toggle, on };
};

export default useKeywrite;
