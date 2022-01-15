<template>
  <VBadge
      avatar
      bordered
      bottom
      offset-x="18"
      offset-y="18"
      v-if="profile['admin']"
      light
      title="管理成员"
  >
    <template v-slot:badge>
      <VAvatar>
        <VIcon dark size="15">
          mdi-check
        </VIcon>
      </VAvatar>
    </template>

    <VAvatar size="40">
      <VImg :src="profile['avatarUrl']" :alt="profile['userName']"></VImg>
    </VAvatar>
  </VBadge>

  <VBadge
      avatar
      bordered
      bottom
      offset-x="18"
      offset-y="18"
      v-else-if="profile['official']"
      light
      :title="profile['official']"
  >
    <template v-slot:badge>
      <VAvatar color="orange">
        <VIcon dark size="15">
          mdi-check
        </VIcon>
      </VAvatar>
    </template>

    <VAvatar size="40">
      <VImg :src="profile['avatarUrl']" :alt="profile['userName']"></VImg>
    </VAvatar>
  </VBadge>

  <VAvatar size="40" v-else>
    <VImg :src="profile['avatarUrl']" :alt="profile['userName']"></VImg>
  </VAvatar>
</template>

<script>
export default {
  name: "AvatarView",
  props:["profile"]
}
</script>

<style scoped>

</style>