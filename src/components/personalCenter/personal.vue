<style>
	.personTit{
		background: #fff; 
		box-sizing: border-box;
		padding: .4rem .4rem;
	}
	.personTit dt{float: left;width: 1.4rem;height: 1.4rem;}
	.personTit dt img{border-radius: 100%;border: 1px solid #ccc;}
	.personTit dd{float: left;margin-left: .6rem;margin-top: .3rem;line-height: .4rem;}
	.personTit dd p{font-size: 16px;}
	.personTit dd p:last-child{color: #ccc;margin-top: .1rem;}
	.personal ul{background: #fff;margin-top: .1rem;}
	.iconSize{width: 24px;height: 24px;display: inline-block;} 
	.mint-cell-wrapper{ background-position: bottom left;} 
</style>
<template>
	<div class="personal heightAuto">
		<mt-header fixed title='个人中心'></mt-header> 
		<div class="personTit">
			<dl class="clearfix">
				<dt><img src="../../assets/images/photo.jpg"/></dt>
				<router-link to='/uesrAuthentication'>
					<dd>
						<p>{{nameTitle}}</p>
						<p>{{authenTication}}</p>
					</dd>
				</router-link> 
			</dl>
		</div>
		<ul>
			<li>
				<mt-cell title="我的报名" to="/"> 
				  <img slot="icon" class="iconSize" src="../../assets/images/photo.jpg" width="24px" height="24px">
				</mt-cell>
			</li>
			<li>
				<mt-cell title="需求建议" to="/"> 
				  <img slot="icon" class="iconSize" src="../../assets/images/photo.jpg" width="24px" height="24px">
				</mt-cell>
			</li>
			<li>
				<mt-cell title="企业认证" to="/"> 
				  <img slot="icon" class="iconSize" src="../../assets/images/photo.jpg" width="24px" height="24px">
				</mt-cell>
			</li>
			<li>
				<mt-cell title="服务热线" @click.native='openAction'> 
				  <img slot="icon" class="iconSize" src="../../assets/images/photo.jpg" width="24px" height="24px">
				</mt-cell>
			</li>
		</ul>
		<mt-actionsheet
		  :actions="actions"
		  v-model="sheetVisible">
		</mt-actionsheet>
	</div>
</template>

<script>
//		var h = $(window).height();
//	var c = $('.index_container').height();
//		 
//	if(c > h){
//		console.log(h,c) 
//	}else{
//		alert('111')
//		$('body').css('height',$(window).height()+'px');
//	}
	export default{
		data(){
			return{
				nameTitle:'微信名称',
				authenTication:'去认证',
				actions:[
					{name:'15210021753',method:this.callTel},
					{name:'2',method:this.callTel}
				],
				sheetVisible:false
			}
		},
		methods:{
			openAction(){
				this.sheetVisible = true;
			},
			callTel(v){ 
				console.log(v.name)
				this.callPhone(v.name);
			}, 
			callPhone (phoneNumber) {
			    window.location.href = 'tel://' + phoneNumber
			}
		}
		
	}
	
</script> 