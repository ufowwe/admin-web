<template>
	<!--<el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
		<el-form-item label="活动名称">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
		<el-form-item label="活动区域">
			<el-select v-model="form.region" placeholder="请选择活动区域">
				<el-option label="区域一" value="shanghai"></el-option>
				<el-option label="区域二" value="beijing"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="活动时间">
			<el-col :span="11">
				<el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
			</el-col>
			<el-col class="line" :span="2">-</el-col>
			<el-col :span="11">
				<el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
			</el-col>
		</el-form-item>
		<el-form-item label="即时配送">
			<el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
		</el-form-item>
		<el-form-item label="活动性质">
			<el-checkbox-group v-model="form.type">
				<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
				<el-checkbox label="地推活动" name="type"></el-checkbox>
				<el-checkbox label="线下主题活动" name="type"></el-checkbox>
				<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
			</el-checkbox-group>
		</el-form-item>
		<el-form-item label="特殊资源">
			<el-radio-group v-model="form.resource">
				<el-radio label="线上品牌商赞助"></el-radio>
				<el-radio label="线下场地免费"></el-radio>
			</el-radio-group>
		</el-form-item>
		<el-form-item label="活动形式">
			<el-input type="textarea" v-model="form.desc"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary">立即创建</el-button>
			<el-button @click.native.prevent>取消</el-button>
		</el-form-item>
	</el-form>-->
	<section>
	<!--<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
		<el-form :inline="true" :model="filters">
			<el-form-item>
				<el-input v-model="filters.name" placeholder="商户简称"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" v-on:click="getCommer">查询</el-button>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="handleAdd">新增</el-button>
			</el-form-item>
		</el-form>
	</el-col>-->
	<el-table :data="commer" height="270" border style="width: 100%">
		<el-table-column prop="id" label="id">
		</el-table-column>
		<el-table-column prop="fullName" label="商户名">
		</el-table-column>
		<el-table-column prop="shortName" label="商户简称">
		</el-table-column>
		<el-table-column prop="businessScope" label="业务范围">
		</el-table-column>
		<el-table-column prop="city" label="城市">
		</el-table-column>
		<el-table-column prop="address" label="地区">
		</el-table-column>
		<el-table-column prop="email" label="邮箱">
		</el-table-column>
		<el-table-column prop="phoneNumber" label="座机">
		</el-table-column>
		<el-table-column prop="mobileNumber" label="手机号">
		</el-table-column>
		<el-table-column prop="serviceHotline" label="客服热线">
		</el-table-column>
		<el-table-column prop="qq" label="QQ">
		</el-table-column>
		<el-table-column prop="operatorId" label="操作员">
		</el-table-column>
		<el-table-column prop="createTime" label="创建日期">
		</el-table-column>
	</el-table>
	</section>
</template>

<script>
//	import getCommerList from '../../api/api';
	import {data} from '../../api/api.js';
	export default {
		data() {
			return {
				/*filters:{
				name:''	
				},*/
				total: 0,
				pageNo: 1,
				commer:[],
				pageSize:4
				/*form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}*/
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			//获取用户列表
			
			/*getCommer() {
				let para = {
					pageNo: this.pageNo,
					pageSize : this.pageSize 
				};
				this.listLoading = true;  
				//NProgress.start();
				getCommerList(para).then((res) => {
					console.log(111333333333333311)
					this.total = res.data.total;
					this.commer = res.data.commer;
					this.listLoading = false;
					console.log(11111)
					//NProgress.done();
				});
			},*/
			getCommer() {
				let para = {
					pageNo: this.pageNo,
					pageSize : this.pageSize 
				};
				
				data.pageMerchantInfo(para).then((res)=>{
					console.log(111+res);
				}).catch((error)=>{
					console.log(222+error);
				})
				data.add(para).then((res)=>{
					console.log(333+res);
				}).catch((error)=>{
					console.log(444+error);
				})
////				$ajax.get('/api/admin/merchant/manage/pageMerchantInfo',{params:para})
//		        .then(
//		          (response) => {
//		          	console.log(response.data)
//		            //处理逻辑，这里response.data是你返回的数据，至于response的其他属性自己去看文档
//		          })
//		        .catch((error) => {
//		        	console.log('cuowu')
//		          //这里处理异常，error.response.status 是返回的网页状态码，比如404，500，状态码具体值也可以在服务端自己指定，比如
////		                    return response()->json(['status' => false,'message' => '令牌丢失'],403);
//		          //error.response.data返回的是服务端返回的信息
//		        });
			}
			//显示新增界面
			/*handleAdd: function () {
				this.addFormVisible = true;
				this.addForm = {
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				};
			}*/
		},
		created() {
			this.getCommer();
		}
	}

</script>