<template>
  <div class="hotel">
      <div>
    <b-card-group class="hotelcard">
      <div v-for="(item) in Info" :key="item.id" class="carddis" >
        <b-card style="width: 288px;height:344px;" @click="choicehotel(item.id)">
            <b-card-img :src="item.imageUrl" class="rounded-0" style="width:248px;height:248px"></b-card-img>
          <b-card-text>{{item.name}}</b-card-text>
          <b-card-text>${{item.normalDayPrice}}/{{item.holidayPrice}}</b-card-text>
        </b-card>
      </div>
    </b-card-group>
      </div>
      <div>
    <b-card-group class="hotelcard">
      <div v-for="(item) in Info2" :key="item.id" class="carddis" >
        <b-card style="width: 288px;height:344px;"  @click="choicehotel(item.id)">
            <b-card-img :src="item.imageUrl" class="rounded-0" style="width:248px;height:248px"></b-card-img>
          <b-card-text>{{item.name}}</b-card-text>
          <b-card-text>${{item.normalDayPrice}}/{{item.holidayPrice}}</b-card-text>
        </b-card>
      </div>
    </b-card-group>
      </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["info"]),
    Info(){
       let card=[...this.info]
       return card.slice(0,3)
    },
    Info2(){
        let card=[...this.info]
       return card.slice(3,6)
    }
  },
  methods:{
      choicehotel(id){
          this.$router.push({name:'check',params:{id:id}})
      }
  },
  created() {
    this.$store.dispatch("GetInfo");
  }
};
</script>
<style>
.hotel{
    width: 100%;
}
.hotelcard{
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
}
.carddis{
    margin-right: 25px;
    margin-top:10px;
}
</style>