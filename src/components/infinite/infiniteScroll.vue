<style>
/*.index_container{margin-top: 0;    margin-bottom: 0;}*/
</style>

<template>
	<div>
		<mt-header fixed title='加载更多'></mt-header> 
		<div class='loadmore' ref='List'>
			<ul class='contentlist' v-infinite-scroll="loadMore" infinite-scroll-disabled='loading' infinite-scroll-distance='30'>
				<li v-for='(item, index) in orderData' :key="index">
					{{item.name}}
				</li>
			</ul>
			<p v-if='loadingDom' class='loading'>
				没有更多数据
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				orderData: [],
				pageVal: "1",
				pageSize: "10",
				loading: true, //为true时不会触发加载更多，false可以触发
				loadingDom: false,
			}
		},
		mounted() {
			// 适应屏幕高度
			this.$nextTick(() => {
				let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
				var n = h-40-70;
				this.$refs.List.style.height = n + 'px';
			})
		},
		methods: {
			//获取列表
			getList() {
				this.$http.post(url, {
					'PageIndex': this.pageVal,
					'PageSize': this.pageSize,
				}, {
					emulateJSON: true,
					headers: {}
				}).then(data => {
					//当请求没有数据时需要显示的内容，需要注意的是如果上一次正好将数据请求完
					//这次请求的数据Data会为[],就会执行里面的代码，加上this.orderData.length == 0这个限制条件就不会了
					if(data.body.Data.length == 0 && this.orderData.length == 0) {
						this.loading = true;
					} else {
						//有数据并且请求到的数据等于pageSize说明数据库还有多余数据
						if(data.body.Data.length === parseInt(this.pageSize)) {
							for(var i = 0; i < this.pageSize; i++) {
								this.orderData.push(data.body.Data[i]);
							}
							this.loading = false;
						}
						//有数据但是数据库数据已经被请求完，没有其他数据
						else {
							this.loading = true;
							this.loadingDom = true;
							for(var i = 0; i < data.body.Data.length; i++) {
								this.orderData.push(data.body.Data[i]);
							}
						};
						//数据正好请求完，由于前面加了this.orderData.length == 0限制，会走当前逻辑
						if(data.body.Data.length == 0) {
							this.loading = true;
							this.loadingDom = true;
						}
					}
				}, err => {
					console.log('error' + err)
				})
			},
			//分页加载更多
			loadMore() {
				this.loading = true;
				this.pageVal++;
				this.getList();
			}
		}
	}
</script>