<template>
  <div class="input">
    <input ref="inputElement" v-model="inputValue" placeholder="Search" />
    <div class="input-icon" @click="handleClick">
      <icon-search v-if="isInputInactive" />
      <icon-close v-else />
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from '@vue/composition-api'
import debounce from 'lodash/debounce'
import { useQuery } from '@/use/router'

export default {
  name: 'ProjectListSearch',
  setup() {
    const { search, update } = useQuery()
    const inputElement = ref()
    const inputValue = ref(search.value || '')

    const isInputInactive = computed(() => inputValue.value === '')

    watch(
      inputValue,
      debounce(value => update({ search: value }), 300),
      { immediate: false },
    )

    const focusInput = () => {
      inputElement.value.focus()
    }

    const clearInput = () => {
      inputValue.value = ''
      focusInput()
    }

    const handleClick = () =>
      isInputInactive.value ? focusInput() : clearInput()

    return {
      inputElement,
      inputValue,
      clearInput,
      isInputInactive,
      handleClick,
    }
  },
}
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  background: hsla(0, 0%, 50%, 0.15);
  border: 1px solid hsla(0, 0%, 50%, 0.15);
  border-radius: 2px;
  padding: 2px 0 2px 5px;
  transition: box-shadow 0.1s ease-in-out;

  &:focus-within {
    box-shadow: 0 0 5px var(--link);
    border: 1px solid var(--link);
  }

  input {
    background: none;
    outline: none;
    border: none;
    width: 100%;

    .is-dark & {
      color: hsla(0, 0%, 100%, 0.7);
    }
  }
}

.input-icon {
  cursor: pointer;
  color: hsla(0, 0%, 50%, 0.5);
  width: 26px;
  padding: 0 5px;
  box-sizing: border-box;
  display: flex;
}
</style>
