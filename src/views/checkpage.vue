<template>
    <div class="checkpage">
        <checkinfo />
        <footers />
    </div>
</template>
<script>
import footers from '../components/footer'
import checkinfo from '../components/checkinfo'
export default {
    components:{
        checkinfo,
        footers
    }
}
</script>
<style>
.checkpage{
    display: flex;
  flex-direction: column;
  align-items: center;
}
</style>