<template>
  <VSheet
      min-height="50vh"
      rounded="lg"
  >
    <VList color="transparent">
      <template v-for="thread in threads">
        <RouterLink :to="'/thread/'+thread['id']" :key="thread['id']" style="text-decoration: none;">
        <VListItem link>
          <AvatarView :profile="thread['publisher']"></AvatarView>
          <VListItemContent style="margin-left: 20px">
            <v-list-item-title>{{thread['title']}}</v-list-item-title>
            <v-list-item-subtitle>{{thread['publisher']['userName']}}</v-list-item-subtitle>
          </VListItemContent>
        </VListItem>
        </RouterLink>
      </template>
    </VList>
  </VSheet>
</template>

<script>
import {listThreads} from "@/api/ThreadApi";
import Vue from "vue";
import AvatarView from "@/components/view/AvatarView";

export default {
  name: "ThreadList",
  components: {AvatarView},
  props:["boardId"],
  created:async function() {
    // 帖子
    let tmp = await listThreads(this.boardId);
    this.threads = tmp.data;
    // 重新渲染
    Vue.set(this.threads,0,this.threads[0]);
  },
  watch: {
    boardId:async function() {
      // 帖子
      let tmp = await listThreads(this.boardId);
      this.threads = tmp.data;
      // 重新渲染
      Vue.set(this.threads,0,this.threads[0]);
    }
  },
  data(){
    return{
      threads:this.threads
    }
  }
}
</script>

<style scoped>

</style>