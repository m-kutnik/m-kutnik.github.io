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
  width: 300px;
  padding: 2px 0 2px 5px;
  border: 1px solid hsla(0, 0%, 50%, 0.15);
  background: hsla(0, 0%, 50%, 0.15);
  border-radius: 2px;
  transition: box-shadow 0.1s ease-in-out;

  &:focus-within {
    border: 1px solid var(--link);
    box-shadow: 0 0 5px var(--link);
  }

  input {
    width: 100%;
    border: none; // stylelint-disable-line
    background: none;
    outline: none;

    // stylelint-disable-next-line
    .is-dark & {
      color: hsla(0, 0%, 100%, 0.7);
    }
  }

  @media screen and (max-width: 48rem) {
    width: 100%;
  }
}

.input-icon {
  display: flex;
  width: 26px;
  box-sizing: border-box;
  padding: 0 5px;
  color: hsla(0, 0%, 50%, 0.5);
  cursor: pointer;
}
</style>
