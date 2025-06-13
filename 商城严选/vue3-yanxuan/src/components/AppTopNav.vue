<template>
  <div class="app-top-nav">
    <div class="w">
      <ul>
        <template v-if="userInfo.token">
          <li><a href="javascript:;">张三</a></li>
          <li><a href="javascript:;">退出登录</a></li>
        </template>
        <li v-else><a href="javascript:;">登录/注册</a></li>
        <li><a href="javascript:;">我的订单</a></li>
        <li><a href="javascript:;">会员</a></li>
        <li><a href="javascript:;">甄选家</a></li>
        <li><a href="javascript:;">企业采购</a></li>
        <li><a href="javascript:;">客户服务</a></li>
        <li><a href="javascript:;">
            <i class="iconfont icon-shouji"></i>
            APP</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    // 读取仓库数据
    const store =  useStore()
    // 仓库分模块管理，所有store.state.user里面获取userinfo模块的数据
    let userInfo = computed(() => store.state.user.userinfo)
    return {
      userInfo
    }
  }
}
</script>

<style lang="less" scoped>
.app-top-nav {
  margin-top: 40px;
  background-color: #333;

  ul {
    display: flex;
    height: 40px;
    line-height: 40px;
    justify-content: flex-end;

    li {
      a {
        font-size: 12px;
        color: #ccc;
        padding: 0 10px;
        border-left: 1px solid #ccc;
        &:hover {
          color: @xtxColor;
        }
      }
    }

    li:nth-child(1) {
      a {
        border-left: 0;
      }
    }
  }
}
</style>