<script>
import { ref, onMounted, defineProps } from "vue";
import useKeywrite from "../composables/useKeywrite";
import { Amharic } from "@keywrite/ethiopic-input-methods";

export default {
  props: {
    modelValue: String,
    placeholder: { type: String, default: "Type here" },
    type: { type: String, default: "text" },
    onReturn: Function,
  },
  setup() {
    const input = ref(null);
    const { on, toggle } = useKeywrite(input, { Amharic: Amharic.inputMethod });
    return {
      input,
      on,
      toggle,
    };
  },
};
</script>
<template>
  <div class="d-flex">
    <button
      class="btn"
      @click="toggle"
      :style="`background:${on ? 'lightgreen' : 'white'};`"
    >
      <i :class="`bi bi-${on ? 'keyboard-fill' : 'keyboard'} mx-1`"></i>
    </button>
    <input
      class="btn flex-grow-1"
      ref="input"
      :type="type"
      :value="modelValue"
      @keyup.enter="onReturn"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
    />
  </div>
</template>
