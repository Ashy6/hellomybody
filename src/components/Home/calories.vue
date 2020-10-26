<template>
    <div>
        <h3>食品列表</h3>
         <!-- 顶部导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户平台</el-breadcrumb-item>
            <el-breadcrumb-item>卡路里</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 用户列表主体部分 -->
        <el-card>
            <!-- 主体视图区 -->
            <el-row :gutter="25"> <!-- 间隙 -->
                <el-col :span="10"> <!-- 列宽-->
                    <!-- 搜索添加 queryInfo进行数据绑定 -->             <!-- 内容清除再查询 -->
                    <el-input placeholder="请输入搜索内容" v-model="queryInfo.query" clearable @clear="getFoodList">
                        <el-button slot="append" icon="el-icon-search" @click="getFoodList">
                        </el-button>
                    </el-input>
                </el-col>
            </el-row>

            <!-- 用户列表 -->
            <el-table :data="foodList" border stripe >  <!--  stripe隔行变色 -->
                <el-table-column type="index"></el-table-column>    <!--  索引列 -->
                <el-table-column label="食品名" prop="name"></el-table-column>    <!--  索引列 -->
                <el-table-column label="别名" prop="alias"></el-table-column>    <!--  索引列 -->
                <el-table-column label="卡路里（/100g）" prop="calorie"></el-table-column>    <!--  索引列 -->
                <el-table-column label="操作">
                    <template >
                        此处待开发功能
                    </template>
                </el-table-column>   
            
            </el-table>
            <!-- 分页功能 -->
            <div>
                <!-- size-change每页最大变化数 
                current-change当前变化数 
                layout功能组件 
                page-size="queryInfo.number" 当前页码
                total 获取的总数据  -->
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="queryInfo.pageNum"
                    :page-sizes="[1, 2, 7, 10,15,100]"
                    :page-size="queryInfo.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="number">
                </el-pagination>
            </div>
        </el-card>
    </div>
</template>

<script>


export default {
    created() {
        //获取食品列表
        this.getFoodList();
    },
    data(data){
        return{
            //查询信息封装的实体
            queryInfo:{         
                query:"",       //  查询信息  模糊查询的内容
                pageNum:1,      //  当前页
                pageSize: 10,   //  每页最大数
            },
            foodList:[],        //  列表  数组
            number: 0,           //  初始的最大值为 0 

        };
    },

    methods:{
        async getFoodList() {
            const {data:res} = await this.$http.get("allFood",{params: this.queryInfo});
            this.foodList = res.data; // 将返回数据赋值  到 foodList  数据封装
            console.log(res);
            this.number = res.num; // 总个数

        },
        // 分页功能
        //  使用getFoodList方法获取最大页数
        handleSizeChange(newSize){
            this.queryInfo.pageSize = newSize;
            this.getFoodList(); 
            console.log(newSize);
        },
        // 当前页数
        handleCurrentChange(newNum){
            this.queryInfo.pageNum = newNum;
            this.getFoodList(); 
        },
    },
    
    
}
</script>

<style lang="less" scoped>

.el-breadcrumb{
    margin-bottom: 15px;
    font-size: 17px;
}
</style>