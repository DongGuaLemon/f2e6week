<template>
  <div>
    <div class="checkinfo">
      <div class="titleleft">
        <div class="left" @click="changeImg('0')">
          <img src="../assets/btn_chevronleft.svg" />
        </div>
        <b-card style="width: 464px;height:554px;">
          <div style="display:flex;justify-content:center;">
            <b-card-img
              :src="oneinfo.imageUrl[imgInd]"
              class="rounded-0"
              style="width:400px;height:400px"
            ></b-card-img>
          </div>
          <b-card-text class="card-text-title">{{oneinfo.name}}</b-card-text>
          <b-card-text class="cardtext">平日/假日</b-card-text>
          <b-card-text class="cardtext">${{oneinfo.normalDayPrice}}/{{oneinfo.holidayPrice}}</b-card-text>
        </b-card>
        <div class="right" @click="changeImg('1')">
          <img src="../assets/btn_chevronright.svg" />
        </div>
      </div>
      <div class="titleright">
        <div>
          <ul style="list-style:none;font: Bold 18px/21px Arial Rounded MT;">
            <li>房客人數限制:{{oneinfo.descriptionShort.GuestMax}}人</li>
            <li>床型:{{oneinfo.descriptionShort.Bed[0]}}</li>
            <li>衛浴數量:{{oneinfo.descriptionShort['Private-Bath']}}間</li>
            <li>房間尺寸:{{oneinfo.descriptionShort.Footage}}平方</li>
          </ul>
        </div>
        <div class="description">
          <span>{{oneinfo.description}}</span>
        </div>
      </div>
    </div>
    <div class="checkmain">
      <div class="checkleft">
        <div>
          <div>
            <span style="font: Bold 20px/23px Arial Rounded MT;">--此房型可預訂狀態</span>
          </div>
          <vue-datepicker-local v-model="time" type="inline" :disabled-date="disabledDate"></vue-datepicker-local>
        </div>
        <div class="amenities">
          <div>
            <ul style="list-style:none">
              <li>
                <img src="../assets/Icon_check.svg" style="vertical-align:middle;" />提供項目
              </li>
            </ul>
            <ul style="list-style:none">
              <li v-for="(item,index) in haveamenities" :key="index">{{item}}</li>
            </ul>
          </div>
          <div>
            <ul style="list-style:none">
              <li>
                <img src="../assets/Icon_cross.svg" style="vertical-align:middle;" />未提供項目
              </li>
            </ul>
            <ul style="list-style:none">
              <li v-for="(item,index) in nothaveamenities" :key="index">{{item}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="checkright">
        <div class="checkinout">
          <div class="checkinoutinfo">
            <div class="CheckIn">
              <div>CheckIn</div>
              <div>15:00-21:00</div>
            </div>
            <div style="font: Bold 40px/21px Arial Rounded MT;margin-bottom:10px;">|</div>
            <div class="CheckOut">
              <div>CheckOut</div>
              <div>10:00</div>
            </div>
          </div>
        </div>
        <b-card title="即刻預定" tag="article" style="width:404px;height:348px;margin-top:15px;" class="mb-2">
          <div class="checkcard">
            <div>
              <b-row class="my-1">
                <b-col sm="3">
                  <label for="input-default">姓名:</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input id="input-default" placeholder="Enter your name"></b-form-input>
                </b-col>
              </b-row>
            </div>
            <div>
              <b-row>
                <b-col sm="3">
                  <label for="input-default">電話:</label>
                </b-col>
                <b-col sm="9">
                  <b-form-input id="input-default" type="tel" placeholder="Enter your Phone"></b-form-input>
                </b-col>
              </b-row>
            </div>
            <div class="datepickers">
              日期:
              <div class="picker">
                <el-date-picker
                  v-model="value1"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="開始日期"
                  end-placeholder="结束日期"
                ></el-date-picker>
              </div>
            </div>
            <b-button href="#" variant="dark" class="checkbtn">預約</b-button>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VueDatepickerLocal from "vue-datepicker-local";
export default {
  data() {
    return {
      imgInd: 0,
      value1: "",
      time: new Date(),
      have: {},
      nothave: {}
    };
  },
  computed: {
    ...mapGetters(["info", "oneinfo"]),
    Info() {
      let card = this.info;
      return card;
    },
    haveamenities() {
      for (let i in this.oneinfo.amenities) {
        if (this.oneinfo.amenities[i] == true) {
          this.have[i] = i;
        }
      }
      return this.have;
    },
    nothaveamenities() {
      for (let i in this.oneinfo.amenities) {
        if (this.oneinfo.amenities[i] == false) {
          this.nothave[i] = i;
        }
      }
      return this.nothave;
    }
  },
  methods: {
    disabledDate(time) {
      var day = time.getDay();
      return day === 0 || day === 6;
    },
    changeImg(e) {
      if (e) {
        if (this.imgInd >= this.oneinfo.imageUrl.length - 1) {
          this.imgInd = 0;
        } else {
          this.imgInd++;
        }
      }
      if (!e) {
        if (this.imgInd < 0) {
          this.imgInd = this.oneinfo.imageUrl.length - 1;
        } else {
          this.imgInd--;
        }
      }
    }
  },
  created() {
    this.$store.dispatch("GetInfo");
    this.$store.dispatch(
      "GetoneInfo",
      this.$route.params.id
    );
  },
  components: {
    VueDatepickerLocal
  }
};
</script>
<style>
.checkinfo {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}
.titleleft {
  display: flex;
  align-items: center;
}
.left {
  margin-right: 15px;
}
.right {
  margin-left: 15px;
}
.card-text-title{
    font: Bold 30px/34px Arial Rounded MT;
    margin-top: 3%;
}
.cardtext{
    font: Bold 18px/21px Arial Rounded MT;
}
.titleright {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.description {
  font: Bold 18px/21px Arial Rounded MT;
}
.checkmain {
  display: flex;
  justify-content: space-around;
  margin-top: 5%;
}
.checkinout {
  width: 350px;
  height: 95px;
  background-color: white;
  border-radius: 5px;
  position: relative;
  margin-top: 25px;
}
.checkinoutinfo {
  width: 330px;
  height: 80px;
  border: 5px solid #aaaaaa;
  border-radius: 5px;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.CheckIn {
  display: flex;
  flex-direction: column;
  align-items: center;
  font: Bold 18px/21px Arial Rounded MT;
}
.CheckOut {
  display: flex;
  flex-direction: column;
  align-items: center;
  font: Bold 18px/21px Arial Rounded MT;
}
.el-range-input {
  margin-left: 5px !important;
}
.datepickers {
  display: flex;
}
.el-date-editor--daterange.el-input__inner {
  width: 310px !important;
}
.checkcard {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80%;
}
.checkright {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.checkleft{
    display: flex;
    flex-direction: column;
    align-items: center
}
.checkbtn {
  width: 150px;
  border-radius: 50px !important;
  margin: 0 auto;
}

.amenities {
  display: flex;
  margin-top:10%; 
}
.calendar-body{
    width: 290px;
    height: 250px;
}
.datepicker-popup{
    font-size: 15px;
}
</style>
