<style scoped>
.index{margin-top: -40px;}
.swiperMint{height: 3.4rem; margin-bottom: .3rem;}
.marquee_box{display: block; position: relative; width: 100%; height: 30px; overflow: hidden;}
.anim{transition: all 0.5s; margin-top: -30px;}
#marquee li{list-style: none; line-height: 30px; height: 30px;}
.swiperMint img{border-radius: 10px;}
.IndexText{float: right; margin: -.6rem .4rem 0 0; position: absolute; right: 0; z-index: 9999; background: rgba(0,0,0,0.4); color: #fff; font-size: .3rem; width: .9rem; height: .5rem; line-height: .5rem; text-align: center; border-radius: 20px;}
.selectAddress{background-color: #f2f2f2; border-radius: 4rem; margin-bottom: .3rem; position: relative; height: 40px; line-height: 40px; text-align: center;}
.selectAddress img{border-radius: 100%; display: block;}
.selectTit{float: left; text-align: center; width: 100%; color: #343434; font-size: .26rem;}
.downIcon{width: 30px; height: 30px; position: absolute; right: 0rem; top: 50%; margin-top: -15px; float: right; margin-right: 6px;}
.indexNavList dl{width: 25%; float: left; text-align: center; margin: .24rem 0;}
.indexNavList dl dt{width: 30px;height: 30px; margin: 0 auto;}
.indexNavList a:nth-child(2) dl dt{width:21px;	}
.indexNavList dl dd{font-size: .24rem; margin-top: .1rem;}
.indexPark{margin-top: .2rem;}
.indexPark h4{color: #030303; font-size: .28rem; padding: 0 0rem .2rem 0rem;}
.indexPark img{border-radius: 10px;}
.indexActivi h4{margin-bottom: -.2rem;}
.indexActivi dl{width: 100%; border-bottom: 1px solid #eaeaea; box-sizing: border-box; padding: .2rem 0;}
.indexActivi dl:last-child{border-bottom: none; padding-bottom: 0;}
.indexActivi dl dt{float: left; max-width: 150px; width: 40%;}
.indexActivi dl dd{float: left; width: 60%; box-sizing: border-box; padding: .03rem .2rem;}
.indexActivi dl dd .activTit{font-size: .24rem;}
.indexActivi dl dd .mint-button{height: 20px; line-height: 20px; margin-top: .1rem; font-size: .14rem; border: 1px solid #5280d6; background-color: transparent; color: #5c85e1;}
.lookBack{color: #979797; font-size: .2rem; padding-top: .1rem;}
@media(max-width:320px){.lookBack{padding-top: 0;}}
</style>
<template>
	<div class="index">
		<div class="indexTop sizing">  
			<div class="swiperMint">
				<mt-swipe :auto="4000"  @change="handleChange" :show-indicators="false">
					<mt-swipe-item v-for="(item,index) in swiper"><img :src="item.img" /></mt-swipe-item> 
				</mt-swipe>
				<p class="IndexText">{{index+1}}/{{Indexlength}}</p>
			</div>
			<!--<div class="marquee_box">
				<ul id="marquee" ref="marquee" :class="{anim:animate==true}">
					<li v-for='item in items'>{{item.name}}</li>
				</ul>
			</div>-->
			<div class="indexNavList clearfix">
				<router-link to='/infinite'> 
					<dl>
						<dt><img src="../assets/images/more.jpg"/></dt>
						<dd>加载更多</dd>
					</dl>
				</router-link>
				<router-link to='/uesrAuthentication'> 
					<dl>
						<dt><img src="../assets/images/address.jpg"/></dt>
						<dd>表单验证</dd>
					</dl>
				</router-link>
				<router-link to='/Alert'> 
					<dl>
						<dt><img src="../assets/images/policy.jpg"/></dt>
						<dd>弹框</dd>
					</dl>
				</router-link>
				<router-link to='/'> 
					<dl>
						<dt><img src="../assets/images/qiye.jpg"/></dt>
						<dd>企业入驻</dd>
					</dl>
				</router-link>
				<router-link to='/'> 
					<dl>
						<dt><img src="../assets/images/shitang.jpg"/></dt>
						<dd>园区食堂</dd>
					</dl>
				</router-link>
				<router-link to='/'> 
					<dl>
						<dt><img src="../assets/images/wuye.jpg"/></dt>
						<dd>物业服务</dd>
					</dl>
				</router-link>
				<router-link to='/'> 
					<dl>
						<dt><img src="../assets/images/jingkai.jpg"/></dt>
						<dd>经开通</dd>
					</dl>
				</router-link>
				<router-link to='/'> 
					<dl>
						<dt><img src="../assets/images/navIcon.jpg"/></dt>
						<dd>更多服务</dd>
					</dl>
				</router-link>
			</div>
			<typeFooter></typeFooter>
		</div>	 
	</div>
</template>

<script>
	import typeFooter from './footer/typeFooter';
	export default {
		name: 'index',
		components:{
			typeFooter
		},
		data() {
			return {
				animate: false,
				items: [{
						name: "马云"
					},
					{
						name: "雷军"
					},
					{
						name: "王勤"
					}
				],
				swiper:[  
					{
						img:'/static/images/swiperMo.jpg'
					},
					{
						img:'/static/images/1.png'
					},
					{
						img:'/static/images/2.png'
					}
				],
				index:'',
				Indexlength:'',
			}
		},
		created: function() {
			setInterval(this.scroll, 3000);
			this.index = 0;
			this.Indexlength = this.swiper.length; 
		},
		methods: {
			handleChange(index) {
				this.index = index;
				this.Indexlength = this.swiper.length; 
		   },
			scroll() {
				this.animate = true; // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
				setTimeout(() => { //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
					this.items.push(this.items[0]); // 将数组的第一个元素添加到数组的
					this.items.shift(); //删除数组的第一个元素
					this.animate = false; // margin-top 为0 的时候取消过渡动画，实现无缝滚动
				}, 2000)
			}
		}

	}
</script> 