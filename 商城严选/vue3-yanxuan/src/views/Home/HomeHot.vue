<template>
  <div class="home-hot">
    <MyPanel title="人气推荐" subTitle="人气爆款 不容错过">
      <!-- 使用默认插槽 -->
      <ul class="goods-list">
        <li class="goods-item" v-for="item in goods" :key="item.id">
          <router-link to="/">
            <img :src="item.scenePicUrl" alt="">
            <div class="title ellipsis-2">{{ item.name }}</div>
          </router-link>
        </li>
      </ul>
    </MyPanel>
  </div>
</template>

<script setup>
import MyPanel from '@/components/MyPanel.vue';
import { getHot } from '@/api';
import { onMounted, ref } from 'vue';

const goods = ref([])

onMounted(async()=>{
  try {
    const res = await getHot()
    console.log('9999999999',res);
    
    if (res.code === 200) {
      goods.value = res.result
    }
  } catch (error) {
  }
})
</script>

<style lang="less" scoped>
.home-hot {
  .goods-list{
    display: flex;
    margin-bottom: 40px;
    justify-content: space-between;
    .goods-item{
      width: 265px;
      height: 365px;
      background-color: #f5f5f5;
      img{
        width: 265px;
        height: 265px;
      }
      .title{
        font-size: 16px;
        text-align: center;
        padding: 15px 25px;
      }
      .price{
        text-align: center;
        margin-top: 10px;
        color: @priceColor;
        del{
          color: #999;
          margin-left: 5px;
        }
      }
      .hoverShadow();
    }

  }
}
</style>