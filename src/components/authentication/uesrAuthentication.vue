<style>
	input {
		appearance: none;
	}
	
	#userAuthentication {
		background: #fff;
	}
	
	.xcode .el-input {
		float: left; 
		
	}
	.xcode .el-input input{padding-right: 120px;}
	.xcode{position: relative;}
	.code{
		margin-left: 10px;
		width: 112px;text-align: center;
		position: absolute;
		z-index: 9999;
		right: 0;
	}
	.el-form-item__label{width:80px !important;    white-space: nowrap;}
	.el-form-item__content{margin-left: 80px !important;}
</style>

<template>
	<div id="userAuthentication" class="sizing">
		<mt-header fixed title='用户认证'></mt-header> 
		<el-form :model="ruleForm2" :rules="rules2" :status-icon="false" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
			<el-form-item label="姓名：" prop="phone">
				<el-input v-model="ruleForm2.phone" type="text" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="联系电话：" prop="phone">
				<el-input v-model="ruleForm2.phone" type="text" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="验证码：" prop="xcode" class="xcode">
				<el-input v-model="ruleForm2.xcode" type="text" autocomplete="off"></el-input>
				<el-button @click="getXcode()" :disabled="disabled" class="code">{{codeText}}</el-button>
			</el-form-item>
			<el-form-item label="密码" prop="pass">
				<el-input type="password" v-model="ruleForm2.pass" autocomplete="new-password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
				<el-button @click="resetForm('ruleForm2')">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import { countDown, regExp } from '../../api/common.js';
	export default {
		data() {
			var phone = (rule, value, callback) => {
				if(!value) {
					return callback(new Error('手机号不能为空'));
				}
				setTimeout(() => {
					if(regExp.phone.test(value)) {
						callback();
					} else {
						callback(new Error('请输入正确手机号'));
					}
				}, 1000);
			};
			var xcode = (rule, value, callback) => {
				if(!value) {
					return callback(new Error('验证码不能为空'));
				}
				setTimeout(() => {
					if(regExp.phone.test(this.ruleForm2.phone)) {
						if(this.ruleForm2.xcode == this.getCode) {
							callback();
						} else {
							callback(new Error('请输入正确的验证码'));
						}
						//callback(new Error('请输入数字值'));
					} else {
						callback(new Error('手机号格式输入不正确'));

					}
				}, 1000);
			};
			var validatePass = (rule, value, callback) => {
				if(!value) {
					return callback(new Error('密码不能为空'));
				}
				setTimeout(() => {
					if(regExp.password.test(value)) {
						if(this.ruleForm2.checkPass !== '') {
							this.$refs.ruleForm2.validateField('checkPass');
						}
						callback();
					} else {
						callback(new Error('请输入密码只能输入6-20个字母、数字、下划线'));
					}
				}, 1000);
			};
			return {
				ruleForm2: {
					pass: '',
					phone: '15210021753',
					xcode: ''
				},
				rules2: {
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					phone: [{
						validator: phone,
						trigger: 'blur'
					}],
					xcode: [{
						validator: xcode,
						trigger: 'blur'
					}],
				},
				codeText: '获取验证码',
				disabled: false,
				getCode: ''
			};
		},
		mounted() {

		},
		created() {

		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if(valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			getXcode() {
				var _this = this;
				if(regExp.phone.test(this.ruleForm2.phone)) { 
//					axios.get('/api/customer/banner/h5GetBannerDetails/' + 25)
//						.then(function(response) {
//							console.log(response);
//						})
//						.catch(function(error) {
//							console.log(error);
//						});
					this.$GET('/api/customer/banner/h5GetBannerDetails/'+25, '', res => { 
						_this.getCode = 1;
						console.log(res);
					}); 
				} else {
					alert('请输入正确的手机号')
				}

			}
		}
	}
</script>