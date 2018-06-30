<template>
	<section>
		<!--工具条-->
		<!--<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getUser">查询</el-button>
				</el-form-item>
			</el-form>v-loading="loading"
		</el-col>--> 

		<!--列表-->
		<template>
			<el-table :data="chantUrl" highlight-current-row style="width: 100%;">
				<el-table-column prop="id" label="id">
				</el-table-column>
				<el-table-column prop="auditorId" label="商户ID">
				</el-table-column>
				<el-table-column prop="url" label="商户待审核URL">
				</el-table-column>
				<el-table-column prop="status" label="状态">
				</el-table-column>
				<el-table-column prop="auditorTime" label="商户提交时间">
				</el-table-column>
				<el-table-column prop="merchantId" label="审核人ID">
				</el-table-column>
				<el-table-column prop="createTime" label="审核时间">
				</el-table-column>
				<el-table-column prop="auditOpinion" label="审核意见">
				</el-table-column>
			</el-table>
			<el-pagination @size-change="handleSizeChange" 
				@current-change="handleCurrentChange" 
				:current-page="pageindex" 
				:page-sizes="[10,50, 200, 300, 400]" 
				:page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" 
				:total="total"> </el-pagination>
		</template>

	</section>
</template>
<script>
	import { webpass } from '../../api/api';
	
	export default {
		data() {
			return {
				chantUrl:[],
		        pageindex:1,
				pagesize:10,
				total:0
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			//获取商户url列表
			getChantUrl() {
				let para = {
					pageNo: this.pageindex,
					pageSize : this.pagesize 
				};
				
				webpass.pageMerchantUrl(para).then((res)=>{
					console.log(res.data);
					this.chantUrl = res.data.rows;
					this.total = res.data.totalCount;
					
				}).catch((error)=>{
					console.log(error);
				})
			},
			handleSizeChange(val) {
		       console.log('每页 ${val} 条');
		       this.pagesize = val;
		       this.getChantUrl();
		    },
		    handleCurrentChange(val) {
		       console.log('当前页: ${val}');
		       this.pageindex = val;
		       this.getChantUrl();
		    }
		},
		created() {
			this.getChantUrl();
		}
	}

</script>

<style scoped>

</style>