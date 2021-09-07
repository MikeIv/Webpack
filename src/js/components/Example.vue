<template>
  <section class="ex__block">
    <div class="ex__wrapper">
      <ul class="ex__list">
        <li class="ex__item">
          <img class="ex__img" src="/assets/img/vue-logo.svg" :alt="altImg">
        </li>
        <li class="ex__item">
          <img class="ex__img" src="/assets/img/logo.png" :alt="altImg">
        </li>
      </ul>

      <p class="ex__txt">{{ message }}</p>
    </div>
  </section>
</template>



<script>

export default {
comments: {

},
  data: () => ({
    message: 'null',
    altImg: 'image'

  }),
  created() {
    this.message = this.$store.getters.getMessage
  }
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
img {
  max-width: 200px;
}
</style>
