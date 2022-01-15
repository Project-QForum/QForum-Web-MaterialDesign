<template>
  <VSheet rounded="lg" style="padding: 20px;">
    <VRow>
      <VCol>
        <VBtn
            icon
            large
            @click="onLikeBtnClick"
        >

          <VIcon v-if="this.likeList.includes(this.$cookies.get('profile')['id'])" color="blue">mdi-heart</VIcon>
          <VIcon v-else>mdi-heart-outline</VIcon>
        </VBtn>
        {{this.likeList.length}}
      </VCol>
      <VCol>
        <VBtn
            icon
            large
        >
          <VIcon>mdi-share</VIcon>
        </VBtn>
        0
      </VCol>
    </VRow>

  </VSheet>
</template>

<script>
export default {
  name: "ThreadOpsWidget",
  props:["handleLike","handleDisLike","likeList"],
  methods:{
    onLikeBtnClick(){
      if(this.likeList.includes(this.$cookies.get('profile')['id'])){
        this.handleDisLike();
        this.likeList.splice(this.likeList.findIndex(e => e === this.$cookies.get('profile')['id']), 1);
      }
      else{
        this.handleLike();
        this.likeList.push(this.$cookies.get('profile')['id']);
      }
    }
  }
}
</script>

<style scoped>

</style>