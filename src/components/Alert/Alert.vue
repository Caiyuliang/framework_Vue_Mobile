<template>
	<div>
		<mt-button type="default" @click="Alert">default</mt-button>
		
	</div>

</template>

<script>
	import { MessageBox } from 'mint-ui'
	export default{
		
		created(){
			 
		},
		methods:{
			Alert(){
				MessageBox.confirm('确定执行此操作?').then(action => {
				  console.log(action)
				});
			}
		}
		
	}
	
	
	
</script>

<style>

</style>