<template>
  <div class="home-new">
    <MyPanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
      <!-- 使用右侧插槽 -->
      <template #right>
        <AppMore path="/" />
      </template>
      <!-- 使用默认插槽 -->
      <ul v-if="goods.length" class="goods-list">
        <li class="goods-item" v-for="item in goods" :key="item.id">
          <router-link to="/">
            <img :src="item.listPicUrl" alt="">
            <div class="title ellipsis">{{ item.name }}</div>
            <div class="price">￥{{ item.retailPrice }} <del v-show="item.retailPrice < item.counterPrice"
                del>￥{{ item.counterPrice }}</del></div>
          </router-link>
        </li>
      </ul>
      <!-- 骨架屏 -->
       <!-- <div v-else class="goods-list">
         <el-skeleton v-for="i in 4" :key="i" style="width: 265px" :loading="loading" animated>
           <template #template>
             <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
             <div style="padding: 14px">
               <el-skeleton-item variant="h3" style="width: 50%" />
               <div style="
                 display: flex;
                 align-items: center;
                 justify-items: space-between;
                 margin-top: 16px;
                 height: 16px;
               ">
                 <el-skeleton-item variant="text" style="margin-right: 16px" />
                 <el-skeleton-item variant="text" style="width: 30%" />
               </div>
             </div>
           </template>
         </el-skeleton>
       </div> -->
       
       <!-- 自己写的骨架屏 -->
       <HomeNewSkeleton v-else/>
    </MyPanel>
  </div>
</template>

<script setup>
import MyPanel from '@/components/MyPanel.vue';
import AppMore from '@/components/library/AppMore.vue';
import HomeNewSkeleton from '@/components/Skeleton/HomeNewSkeleton.vue';
import { getNew } from '@/api';
import { ref, onMounted } from 'vue';

const goods = ref([])
const loading = ref(true)

const getNewList = async () => {
  try {
    const res = await getNew()
    console.log(res);
    if (res.code == 200) {
      goods.value = res.data.result.slice(0, 4)
    }
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  getNewList()
})

</script>

<style lang="less" scoped>
.home-new {
  .goods-list {
    display: flex;
    margin-bottom: 40px;
    justify-content: space-between;

    .goods-item {
      width: 265px;
      height: 365px;
      background-color: #f5f5f5;

      img {
        width: 265px;
        height: 265px;
      }

      .title {
        font-size: 16px;
        text-align: center;
        padding: 15px 25px;
      }

      .price {
        text-align: center;
        margin-top: 10px;
        color: @priceColor;

        del {
          color: #999;
          margin-left: 5px;
        }
      }

      .hoverShadow();
    }

  }
}
</style>