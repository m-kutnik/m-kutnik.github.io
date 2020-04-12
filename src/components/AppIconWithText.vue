<template functional>
  <div class="icon-container">
    <span class="text">{{ props.text }}</span>
    <component :is="props.icon" />
  </div>
</template>

<style lang="scss" scoped>
.icon-container {
  position: relative;
  display: flex;
  width: 18px;
  flex-direction: column;
  align-items: center;
  margin: 0 3px;
  transform: translateY(-3px);
  transition: all 200ms ease-in-out;

  .text {
    position: absolute;
    bottom: 100%;
    font-size: 0.8rem;
    opacity: 0;
    text-align: center;
    transform: translateY();
    transition: all 200ms ease-in-out;
    white-space: nowrap;
  }

  &:hover {
    transform: translateY(0);

    .text {
      opacity: 1;
      transform: translateY(-0.5rem);
    }
  }
}
</style>
