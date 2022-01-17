<template>
  <VSheet rounded="lg">
    <VList color="transparent">
      <VListItemGroup
          v-model="selectedItem"
          color="primary"
      >
        <VListItem
            v-for="board in boards"
            :key="board['id']"
            v-on:click="onSelectedBoardChanged(board['id'])"
            link
        >
          <VListItemContent>
            <VListItemTitle>
              {{ board["name"] }}
            </VListItemTitle>
          </VListItemContent>
        </VListItem>
      </VListItemGroup>
    </VList>
  </VSheet>
</template>

<script>
import {listBoards} from "@/api/BoardApi";
import Vue from "vue";

export default {
  name: "BoardList",
  props:["onSelectedBoardChanged"],
  created:async function() {
    // 板块
    let tmp = await listBoards();
    this.boards = tmp.data;
    // 重新渲染
    Vue.set(this.boards,0,this.boards[0]);
    this.onSelectedBoardChanged(this.boards[0]["id"]);
  },
  data(){
    return{
      boards:this.boards,
      selectedItem: 0,
      onSelectedIndexChanged:(newBoardId)=>{
        this.onSelectedBoardChanged(newBoardId);
      }
    }
  }
}
</script>

<style scoped>

</style>