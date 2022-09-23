<template>
  <div class="info">
    <div class="title">疫情信息</div>
    <a href="##"
      >查看更多 <img src="../../../assets/images/more.png" alt=""
    /></a>
    <ul class="info" v-for="item in CovInfo.data" :key="item.id">
      <li>{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
import api from "../../../api/index";
export default {
  name: "CovInfo",
  data() {
    return {
      CovInfo: {},
      message: 100,
    };
  },
  created() {
    api.getCovInfo().then((res) => {
      console.log(res.data);

      const data = res.data.newslist[0].news;
      this.CovInfo = {
        data: data,
      };
    });
  },
};
</script>

<style  scoped>
.info {
  padding: 0.2rem;
  position: relative;
}
a {
  position: absolute;
  top: 10px;
  right: 15px;
  font-weight: normal;
  color: #4169e2;
  font-size: 0.26rem;
}
a img {
  width: 0.26rem;
}

.title {
  border-left: 0.1rem solid blue;
  padding-left: 0.2rem;
  margin-bottom: 10px;
}
p {
  line-height: 15px;
}
</style>