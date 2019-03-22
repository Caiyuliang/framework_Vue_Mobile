<style> 

</style>

<template>
	<mt-header fixed title="标题过长会隐藏后面的内容啊哈哈哈哈">
	  <router-link to="" @click.native="back" slot="left">
	    <mt-button icon="back">返回</mt-button>
	  </router-link> 
	</mt-header> 
  
</template>

<script>
	
	export default {
		methods:{
			back(){
				 this.$router.go(-1)
			}
		}
	}
</script> 