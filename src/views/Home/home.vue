<template>
  <div class="home">
    <img src="../../assets/images/1.jpg" width="100%" />
    <CovInfo />
    <div class="list">
      <div class="smallImg">
        <img src="../../assets/images/1.png" alt="" />
        <div>一元义诊</div>
      </div>
      <div class="smallImg">
        <router-link to="/hesuan">
          <img src="../../assets/images/2.png" alt="" />
          <div>核酸检测</div>
        </router-link>
      </div>
      <div class="smallImg">
        <img src="../../assets/images/3.png" alt="" />
        <div>防疫物资</div>
      </div>
      <div class="smallImg">
        <img src="../../assets/images/4.png" alt="" />
        <div>出行政策</div>
      </div>
    </div>
    <!-- 数据统计 -->
    <div>
      <div class="block"></div>
      <CovNum></CovNum>
    </div>
  </div>
</template>

<script>
import CovInfo from "./CovInfo/index.vue";
import CovNum from "./CovInfo/CovNum.vue";

export default {
  components: {
    CovInfo,
    CovNum,
  },
};
</script>
 
<style>
.list {
  display: flex;
  padding-bottom: 0.2rem;
}
.list > div {
  flex: 1;
  text-align: center;
  color: #666;
}
.list div img {
  width: 0.8rem;
  height: 0.8rem;
}
.block {
  height: 0.3rem;
  background-color: rgba(209, 209, 209, 0.3);
  border-radius: 0.08rem;
}
</style>