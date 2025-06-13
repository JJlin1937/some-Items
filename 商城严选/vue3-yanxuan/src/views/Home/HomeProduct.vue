<template>
  <div class="home-product">
    <MyPanel v-for="item in productList" :key="item.id" :title="item.name" :subTitle="item.saleInfo">
      <!-- 使用右侧插槽 -->
      <template #right>
        <div class="sub">
          <router-link v-for="sub in item.children" :key="sub.id" to="/">{{sub.name}}</router-link>
        </div>
        <AppMore />
      </template>

      <!-- 使用默认插槽 -->
      <div class="goods">
        <!-- 左侧 -->
        <router-link class="left" to="/">
          <img :src="item.picture" alt="">
        </router-link>
        <!-- 右侧 -->
        <div class="right">
          <div class="title">
            <ul class="goods-list">
              <li v-for="good in item.goods" :key="good.id">
                <MyGoodsItem :goods="good" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MyPanel>
  </div>
</template>

<script setup>
import AppMore from '@/components/library/AppMore.vue';
import MyPanel from '@/components/MyPanel.vue';
import MyGoodsItem from '@/components/MyGoodsItem.vue';
import { getProduct } from '@/api';
import { onMounted, ref } from 'vue';

const productList = ref([])

onMounted(async () => {
  try {
    const res = await getProduct()
    console.log('商品分类',res);
    
    productList.value = res.result
  } catch (error) {
    console.log(error)
  }
})  
</script>

<style lang="less" scoped>
.home-product {
  background-color: #fff;
  padding-bottom: 40px;
  .sub {
    a {
      font-size: 16px;
      padding: 2px 10px;
      border-radius: 4px;

      &:hover {
        background-color: @xtxColor;
        color: #fff;
      }

      &:last-child {
        margin-right: 100px;
      }
    }
  }

  .goods {
    height: 610px;
    display: flex;

    .left {
      width: 240px;
      margin-right: 10px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .right {
      flex: 1;

      .goods-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
  }
}
</style>