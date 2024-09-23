<template>
  <ElInput ref="inputRef" v-model="formattedValue">
    <template #append>₽</template>
  </ElInput>
</template>

<script setup lang="ts">
  import { PropType, watch } from 'vue';
  import { CurrencyDisplay, useCurrencyInput } from 'vue-currency-input';

  const { inputRef, setValue, formattedValue } = useCurrencyInput({
    currency: 'RUB',
    currencyDisplay: CurrencyDisplay.hidden,
    hideCurrencySymbolOnFocus: false,
    hideGroupingSeparatorOnFocus: false,
    hideNegligibleDecimalDigitsOnFocus: false,
  });

  const props = defineProps({
    modelValue: {
      type: Number as PropType<number | null>,
      required: true,
    },
  });

  watch(
    () => props.modelValue,
    (value) => {
      setValue(value);
    },
  );
</script>
