<style scoped="scoped"> 
	.mint_footer{width: 100%;height: 70px !important;background-color: #f4f4f4;z-index: 22;}
	.mint_footer footer a{display: block; flex: 1;text-align: center;color: #3b3b3b;}
	.mint_footer footer dt{width: 30px;margin: 0 auto;margin-bottom: 5px;margin-top: 10px;}
	.mint_footer dd{display: block;}
	.on{display: none;}
	footer{height: inherit;}
	.mint_footer footer dt img,.mint_footer footer dt{width: 30px;height: 30px !important;}
	.is-active{color: #4E6CDB !important;}
	/*.router-link-exact-active.router-link-active .on{display: block;}
	.router-link-exact-active.router-link-active .off{display: none;}*/
</style>

<template>
 <div class="mint_footer" id="mint_footer">
  	<footer class="displayFlex"> 
  		<router-link  :class="{'is-active':$route.meta.active === item.href}" v-for="(item,index) in navLists" :to="item.href" @click.native="footItem(item.text)">
  			<dl>
  				<dt> 
  					<img :src="$route.meta.tit === item.text ? item.active : item.img"/>
  				</dt>
  				<dd>{{item.text}}</dd>
  			</dl>
  		</router-link>
  	</footer>
  </div>
</template>

<script>
	import { mapState, mapGetters, mapActions,mapdMutation } from 'vuex';  //每次使用引入
	export default {
		data(){
			return{
/*				navLists:[
	                {
	                    "text":"园区",
	                    'href':'/',
	                    'img':'../../assets/images/icon/offIndex.png',
	                    'active':'../../assets/images/icon/onIndex.png'
	                },
	                {
	                    "text":"活动",
	                    'href':'/activity',
	                    'img':'../../assets/images/icon/offHot.png',
	                    'active':'../../assets/images/icon/onHot.png'
	                },
	                {
	                    "text":"咱们",
	                    'href':'/personal',
	                    'img':'../../assets/images/icon/offZen.png',
	                    'active':'../../assets/images/icon/offZen.png'
	                }
	            ],*/
			    changeRed:'首页',
				navLists:[
	                {
	                    "text":"首页",
	                    'href':'/index',
	                    'img':'./static/images/offIndex.png',
	                    'active':'./static/images/onIndex.png',
	                    'actTxt':'actTxt'
	                },
	                {
	                    "text":"热点",
	                    'href':'/activity',
	                    'img':'./static/images/offHot.png',
	                    'active':'./static/images/onHot.png',
	                    'actTxt':'actTxt'
	                },
	                {
	                    "text":"咱们",
	                    'href':'/personal',
	                    'img':'./static/images/offZen.png',
	                    'active':'./static/images/onZen.png',
	                    'actTxt':'actTxt'
	                }
	            ],
			}
		},
		computed:{
			...mapGetters([
				//'footActive'
			])
		},
		mounted(){
			this.changeRed = this.footActive; 
//			alert(this.changeRed)
		},
		created(){ 
		},
		methods:{
			...mapActions([
				'setFootActive'
			]),
			footItem(v){  
				this.changeRed = v;
				this.setFootActive(this.changeRed)
			}
		}
	}
</script> 