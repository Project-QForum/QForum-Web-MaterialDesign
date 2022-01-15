<template>
  <VCard
      class="mx-auto"
      color="#2175F3"
      max-width="400"
      dark
  >
    <v-card-text class="text-h5 font-weight-bold">
      「{{profile["introduction"]}}」
    </v-card-text>

    <VCardActions>
      <VListItem class="grow">
        <AvatarView :profile="profile"></AvatarView>

        <VListItemContent style="margin-left: 10px">
          <VListItemTitle>{{ profile["userName"] }}</VListItemTitle>
        </VListItemContent>
      </VListItem>
    </VCardActions>
  </VCard>
</template>

<script>
import AvatarView from "@/components/view/AvatarView";
export default {
  name: "AuthorView",
  components:{AvatarView},
  props:["profile"]
}
</script>

<style scoped>

</style>