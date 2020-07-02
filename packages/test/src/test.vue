<template>
    <div>
        <button @click="add">{{ num }}</button>
        Hello {{ message }}
    </div>
</template>

<script>
export default {
  name: 'test', // 这个名字很重要，它就是未来的标签名<yuan-test></yuan-test>
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    add() {
      // eslint-disable-next-line no-plusplus
      this.num++;
    },
  },
  props: {
    message: String,
  },
};
</script>

<style scoped>

</style>
