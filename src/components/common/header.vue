<style> 

</style>

<template> 
	<div> 
	  	<mt-header fixed title='首页'></mt-header> 
	</div>
</template>

<script>
	import { mapState, mapGetters, mapActions,mapdMutation } from 'vuex';  //每次使用引入
	export default { 
		data(){
			return{ 
				title:''
			}
		},
		computed:{
			...mapGetters([
				'titleName'
			])
		},
		mounted(){ 
			  
		},
		created(){
		  
		},
		methods:{ },
		watch: {
		  $route: {
		    handler: function(val, oldVal){
		     // console.log(val.path,oldVal); //监听路由 
		    },
		    // 深度观察监听
		    deep: true
		  }
		},
	}
</script> 