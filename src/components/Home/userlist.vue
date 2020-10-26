<template>
    <div>
        <h3>用户列表</h3>
         <!-- 顶部导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>权限管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 用户列表主体部分 -->
        <el-card>
            <!-- 主体视图区 -->
            <el-row :gutter="25"> <!-- 间隙 -->
                <el-col :span="10"> <!-- 列宽-->
                    <!-- 搜索添加 queryInfo进行数据绑定 -->             <!-- 内容清除再查询 -->
                    <el-input placeholder="请输入搜索内容" v-model="queryInfo.query" clearable @clear="getUserList">
                        <el-button slot="append" icon="el-icon-search" @click="getUserList">
                        </el-button>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <!-- 搜索按钮 -->
                    <el-button type="primary" 
                    @click="addDialogVisible = true">
                    添加用户
                    </el-button>
                </el-col>
            </el-row>

            <!-- 用户列表 -->
            <el-table :data="userList" border stripe >  <!--  stripe隔行变色 -->
                <el-table-column type="index"></el-table-column>    <!--  索引列 -->
                <el-table-column label="用户名" prop="username"></el-table-column>    <!--  索引列 -->
                <el-table-column label="邮箱" prop="email"></el-table-column>    <!--  索引列 -->
                <el-table-column label="密码" prop="password"></el-table-column>    <!--  索引列 -->
                <el-table-column label="角色" prop="role"></el-table-column>    <!--  索引列 -->
                <el-table-column label="状态" prop="state">
                    <!-- 操作栏 -->
                    <template slot-scope="scope">
                        <!-- scope为每一行生成的数据    state状态-->
                        <el-switch v-model="scope.row.state" @change="userStateChanged(scope.row)"></el-switch>
                    </template>
                </el-table-column>    <!--  索引列 -->
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <!-- 修改 -->
                        <el-button type="primary" icon="el-icon-edit" size="mini" @click="showEditDialog(scope.row.id)"></el-button>
                        <!-- 删除 -->
                        <el-button  content="删除用户" type="danger" icon="el-icon-delete" size="mini" @click="deleteUser(scope.row.id)"></el-button>
                        <!-- 权限 -->
                        <el-tooltip effect="dark" content="分配权限" placement="top-start" :enterable="false"><!--文字提示 enterable 隐藏-->
                            <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
                        </el-tooltip>
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
                    :page-sizes="[1, 2, 5, 10,15,100]"
                    :page-size="queryInfo.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="number">
                </el-pagination>
            </div>
        </el-card>

        <!-- 新增用户区域 -->
        <el-dialog title="添加用户" :visible.sync="addDialogVisible" width="50%" @close="addDialogClosed"> 
            <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px">
                <!-- 用户名 -->
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="addForm.username"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item label="密码" prop="password">
                    <el-input v-model="addForm.password"></el-input>
                </el-form-item>
                <!-- 邮箱 -->
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="addForm.email"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dislog-footer">
                <el-button @click="addDialogVisible = false">取消</el-button>
                <el-button @click="addUser" type="primary">确定</el-button>
            </span>
        </el-dialog>
        <!-- 修改用户区域 -->
        <el-dialog title="修改用户" :visible.sync="editDialogVisible" width="50%" @close="editDialogClosed"> 
            <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="70px">
                <!-- 用户名 -->
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="editForm.username" disabled></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item label="密码" prop="password">
                    <el-input v-model="editForm.password"></el-input>
                </el-form-item>
                <!-- 邮箱 -->
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="editForm.email"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dislog-footer">
                <el-button @click="editDialogVisible = false">取消</el-button>
                <el-button @click="editUserInfo" type="primary">确定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    created() {
        // 获取用户列表
        this.getUserList();
    },
    data(){
        return{
            //查询信息封装的实体
            queryInfo:{         
                query:"",       //  查询信息  模糊查询的内容
                pageNum:1,      //  当前页
                pageSize: 10,   //  每页最大数
            },
            userList:[],        //  用户列表  数组
            number: 0,           //  初始的最大值为 0 
            //添加   属性
            addDialogVisible:false,         //  对话框状态
            addForm:{
                username:'',
                password:'',
                email:'',
            },
            // 表单验证     添加或者注册
            addFormRules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 2, max: 12, message: '长度在 6 到 16 个字符', trigger: 'blur' }          
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }          
                ],
                email: [
                    { required: true, message: '请输入邮箱', trigger: 'blur' },
                    { min: 4, max: 20, message: '请正确输入邮箱地址', trigger: 'blur' }          
                ]
            },
            // 修改用户信息
            editForm:{},
            //显示隐藏对话框
            editDialogVisible:false,
            // 表单验证    修改
            editFormRules: {
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }          
                ],
                email: [
                    { required: true, message: '请输入邮箱', trigger: 'blur' },
                    { min: 4, max: 20, message: '请正确输入邮箱地址', trigger: 'blur' }          
                ]
            },
        };                         
    },
    methods:{
        // 查询用户
        async getUserList() {
            // 调用post请求
            // 将整个的请求 信息  传到 res 上
            //console.log(111111);
             //  get提交路径alluser
            //访问路径 /allUser   解析结果到data中res（返回结果）
            const {data:res} = await this.$http.get("allUser",{params: this.queryInfo});
            this.userList = res.data; // 将返回数据赋值  到 userList  用户数据封装
//            console.log(queryInfo);
            this.number = res.numbers; // 总个数
            //console.log(res);
        },
        // 分页功能
        //  使用getUserList方法获取最大页数
        handleSizeChange(newSize){
            this.queryInfo.pageSize = newSize;
            this.getUserList(); 
        },
        // 当前页数
        handleCurrentChange(newNum){
            this.queryInfo.pageNum = newNum;
            this.getUserList(); 
        },
        // 修改--用户状态
        async userStateChanged(userInfo) {
            const { data: res } = await this.$http.put(`userState?id=${userInfo.id}&state=${userInfo.state}`);
            if (res != "success") {
                userInfo.id = !userInfo.id;
                return this.$message.error("操作失败！！！");
            }
            this.$message.success("操作成功！！！");
        },
        // 添加用户
        //监听用户   清零
        addDialogClosed(){
            this.$refs.addFormRef.resetFields(); 
        },
        addUser(){
            this.$refs.addFormRef.validate(async valid=>{
                console.log(valid);
                // 验证
                if(!valid) return;
                // 提交结果
                const {data:res} = await this.$http.post("addUser",this.addForm);
                if(res!="success"){
                    return this.$message.error("添加失败！！");
                }
                this.$message.success("添加成功！！");
                this.addDialogVisible = false;
                this.getUserList();
            });
        },
        // 删除用户
        async deleteUser(id){
            // 删除信息封装到result中   提示信息
            const confirmResult= await this.$confirm('用户删除后不可恢复，想好了？','提示',{
                confirmButtonText:'确定',
                cancelButtonText:'取消',
                type:'warning'
            }).catch(err => err)
            // 取消删除
            if(confirmResult!='confirm'){
                return this.$message.info("已取消！");
            }
            //删除的方法
            const{data:res}= await this.$http.delete("deleteUser?id="+id);
            if(res!="success"){
                return this.$message.error("删除失败！");
            }
            this.$message.success("删除成功！");
            this.getUserList();
        },
        // 修改用户
        // 显示对话框
        async showEditDialog(id){
            const {data:res} = await this.$http.get("getupdate?id="+id);
            // const {data:res} = await this.$http.get("allUser",{params: this.queryInfo});
            this.editForm =res;                 //查询的信息填入edit中      编辑的 新值
            this.editDialogVisible =true;       //开启编辑对话框
        },
        // 关闭窗口
        editDialogClosed(){
            this.$refs.editFormRef.resetFields();   //重置信息
        },
        // 确认修改
        editUserInfo(){
            this.$refs.editFormRef.validate(async valid =>{
                if(!valid) return;
                //发起修改请求
                const {data:res} = await this.$http.put("editUser",this.editForm);
            if(res!="success"){
                return this.$message.error("操作失败！");
            }
            this.$message.success("修改成功！");
            this.editDialogVisible =false;       //关闭编辑对话框
            this.getUserList();                  //调用userlist 加载用户列表
            })
        },
    },
}
</script>

<style lang="less" scoped>
/* 顶部样式 */
.el-breadcrumb{
    margin-bottom: 15px;
    font-size: 17px;
}
</style>