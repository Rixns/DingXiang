<template>
  <div>
    <div>
      <div class="head">截止{{ CovNum.modifyTime | time }}全国统计数据</div>

      <ul class="content">
        <li>
          <span>较昨日{{ CovNum.currentConfirmedIncr | number }}</span>
          <div class="bold">{{ CovNum.currentConfirmedCount }}</div>
          <strong>现存确诊</strong>
        </li>
        <li>
          <span>较昨日{{ CovNum.suspectedIncr | number }}</span>
          <div class="bold">{{ CovNum.suspectedCount }}</div>
          <strong>境外输入</strong>
        </li>
        <li>
          <span>较昨日{{ CovNum.seriousIncr | number }}</span>
          <div class="bold">{{ CovNum.seriousCount }}</div>
          <strong>现存无症状</strong>
        </li>
        <li>
          <span>较昨日{{ CovNum.confirmedIncr | number }}</span>
          <div class="bold">{{ CovNum.confirmedCount }}</div>
          <strong>累计确诊</strong>
        </li>
        <li>
          <span>较昨日{{ CovNum.deadIncr | number }}</span>
          <div class="bold">{{ CovNum.deadCount }}</div>
          <strong>现存死亡</strong>
        </li>
        <li>
          <span>较昨日{{ CovNum.curedIncr | number }}</span>
          <div class="bold">{{ CovNum.curedCount }}</div>
          <strong>现存治愈</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from "../../../api/index";
export default {
  data() {
    return {
      CovNum: {},
    };
  },
  mounted() {
    api.getCovInfo().then((res) => {
      //   console.log(res.data.newslist[0].desc);
      let data = res.data.newslist[0].desc;
      this.CovNum = data;
      console.log(this.CovNum);
    });
  },
  filters: {
    number: function (val) {
      val = val > 0 ? "+" + val : val;
      return val;
    },
    time: function (num) {
      var data = new Date(num);
      return data.toLocaleString("chinese");
    },
  },
};
</script>

<style>
.bold {
  font-weight: bold;
}
.head {
  margin-top: 0.3rem;
  margin-left: 0.3rem;
}
.content {
  display: flex;
  flex-wrap: wrap;
  padding: 0.2rem;
  text-align: center;
}
.content li {
  width: 33.3%;
  margin-top: 0.3rem;
}
li:nth-child(1) .bold {
  color: red;
}
li:nth-child(2) .bold {
  color: rgb(0, 255, 110);
}
li:nth-child(3) .bold {
  color: rgb(105, 105, 17);
}
li:nth-child(4) .bold {
  color: rgb(0, 149, 255);
}
li:nth-child(5) .bold {
  color: rgb(255, 0, 191);
}
li:nth-child(6) .bold {
  color: rgb(98, 0, 255);
}
</style>