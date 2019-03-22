<style>

</style>

<template>
	<div class="typePage" v-if="isType">
		<dl v-if="pageType == 0">
			<dt><img src="../../assets/images/power_ico.png" /></dt>
			<dd>暂无数据</dd>
		</dl> 
		<dl v-if="pageType == 1">
			<dt><img src="../../assets/images/build_ico.png" /></dt>
			<dd>项目正在施工</dd>
		</dl> 
		<dl v-if="pageType == 2">
			<dt><img src="../../assets/images/kong.jpg" /></dt>
			<dd>网络奔溃</dd>
		</dl> 
	</div>
</template>

<script>
//	<typePage :isType=true :pageType='0'></typePage>
	export default {
		props: {
			isType: {
				default() {
					return false;
				}
			},
			pageType: {
				default() {
					return 0;
				}
			}
		},
	}
</script>