<template>
  <VContainer>
    <VAlert
        dismissible
        color="blue"
        border="left"
        elevation="2"
        colored-border
        icon="mdi-forum"
    >
      欢迎访问 QForum 测试站。<br>
      QForum 是 WearBBS 自研的新一代论坛系统，目前处于早期测试阶段，欢迎<a href="https://jq.qq.com/?_wv=1027&k=jby4vXBO" target="_blank">反馈问题</a>。
    </VAlert>

    <VRow>
      <VCol cols="2">
        <BoardList :onSelectedBoardChanged="onSelectedBoardChanged"></BoardList>
      </VCol>

      <VCol>
        <ThreadList :boardId="boardId"></ThreadList>
      </VCol>
    </VRow>
    <RouterLink :to="'/thread/post?boardId='+boardId">
      <VBtn
          class="mx-2"
          fab
          dark
          large
          color="blue"
          fixed
          bottom
          right
      >
        <VIcon dark>
          mdi-plus
        </VIcon>
      </VBtn>
    </RouterLink>

  </VContainer>
</template>

<script>
import BoardList from "@/components/list/BoardList";
import ThreadList from "@/components/list/ThreadList";

export default {
  name: 'App',
  components: {ThreadList, BoardList},
  created: async function () {
  },
  data() {
    return {
      threads:[],
      boardId:1,
    }
  },
  methods:{
    onSelectedBoardChanged:function (newBoardId){
      this.boardId = newBoardId;
    }
  }
};
</script>
