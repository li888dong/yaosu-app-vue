<style scoped>
    @import "Login.css";
</style>
<template>
    <div class="login-container">
        <div class="login-container-header">
            <div v-if="curPage==='register'"><i class="icon iconfont icon-fanhui" @click="$router.go(-1)"></i></div>
            <div v-if="curPage==='login'&&loginType==='password'"><i class="icon iconfont icon-fanhui"
                                                                     @click="$router.go(-1)"></i><span
                class="msg-login-btn" @click="loginType='msg'">短信登陆</span></div>
            <div v-if="curPage==='login'&&loginType==='msg'"><i class="icon iconfont icon-fanhui"
                                                                @click="$router.go(-1)"></i><span class="msg-login-btn"
                                                                                                  @click="loginType='password'">密码登陆</span>
            </div>
            <h2 v-if="curPage==='register'" class="title">欢迎注册</h2>
            <h2 v-if="curPage==='login'" class="title">欢迎登陆</h2>
        </div>

        <div class="form-container">
            <label>
                <span>手机号</span><br>
                <input type="tel" class="login-input" ref="tel" v-model="phone">
            </label>
            <label v-if="passwordShow">
                <span>密码</span><br>
                <input type="password" class="login-input" v-model="password">
            </label>
            <label style="position: relative" v-if="msgShow">
                <span>短信验证码</span><br>
                <input type="tel" class="login-input" v-model="smsCode" maxlength="6">
                <button :disabled="gettingCode" class="yzm-btn" @click="getSmsCode"><span
                    v-if="!gettingCode">获取验证码</span><span v-if="gettingCode">{{num}}</span></button>
            </label>
            <label v-if="curPage==='register'">
                <input type="checkbox" autofocus v-model="agree">我已阅读并同意《药素网注册协议》
            </label>
        </div>
        <div v-if="curPage==='login'" class="login-btn-group">
            <p class="register-btn" @click="curPage='register'"><span>新用户注册 <i
                class="icon iconfont icon-more"></i></span></p>
            <p class="login-btn" @click="login"><span>直接登陆 <i class="icon iconfont icon-more"></i></span>
            </p>
        </div>
        <p v-else class="submit-btn" @click="registerAndLogin"><span>注册并登陆 <i
            class="icon iconfont icon-more"></i></span></p>
    </div>
</template>
<script>
    export default {
        name: 'login',
        data() {
            return {
                uid: '',
                nic: '',
                curPage: 'login',
                loginType: 'password',
                gettingCode: false,
                timer: null,
                num: 60,
                phone: '',
                password: '',
                smsCode: '',
                agree: true
            }
        },
        computed: {
            passwordShow() {
                return this.loginType === 'password' || this.curPage === 'register'
            },
            msgShow() {
                return this.loginType === 'msg' || this.curPage === 'register'
            }
        },
        mounted() {
            this.$refs.tel.focus()
        },
        watch: {
            num() {
                if (this.num < 1) {
                    clearInterval(this.timer);
                    this.gettingCode = false;
                    this.num = 60
                }
            }
        },
        methods: {
            validate() {
                if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phone)) {
                    this.$message.error({message:'手机号码格式错误'});
                    return false
                }
                if (!/^[A-Za-z0-9]{6,14}$/.test(this.password)) {
                    this.$message.error({message:'密码6-14位字母加数字'});
                    return false
                }
                if (!/^[0-9]{6}$/.test(this.smsCode)) {
                    this.$message.error({message:'验证码 6数字'});
                    return false
                }
                if (!this.agree) {
                    this.$message.error({message:'请同意协议'});
                    return false
                }
                return true
            },
            login() {
                if (this.loginType === 'msg') {
                    this.smsLogin();
                    return
                }
                if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phone)) {
                    this.$message.error({message:'手机号码格式错误'});
                    return false
                }
                if (!/^[A-Za-z0-9]{6,14}$/.test(this.password)) {
                    this.$message.error({message:'密码6-14位字母加数字'});
                    return false
                }
                this.$http.post(this.$APIs.LOGIN, {
                    phone: this.phone,
                    password: this.password
                })
                    .then(res => {
                        console.log(res)
                        if(res.data.status===200){
                            this.loginSuccess(res);
                        }else {
                            this.$message.error({message:res.data.msg});
                        }
                    })
                    .catch(err => {
                        console.log(err)
                        this.$message.error({message:'网络错误'});
                    })
            },
            smsLogin() {
                if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phone)) {
                    this.$message.error({message:'手机号码格式错误'});
                    return false
                }
                if (!/^[0-9]{6}$/.test(this.smsCode)) {
                    this.$message.error({message:'验证码 6数字'});
                    return false
                }
                this.$http.post(this.$APIs.MSG_LOGIN, {
                    phone: this.phone,
                    smsCode: this.smsCode
                })
                    .then(res => {
                        console.log(res)
                        if(res.data.status===200){
                            this.loginSuccess(res);
                        }else {
                            this.$message.error({message:res.data.msg});
                        }
                    })
                    .catch(err => {
                        this.$message.error({message:'网络错误'});
                    })
            },
            registerAndLogin() {
                if (!this.validate()) {
                    return false
                }

                this.$http.post(this.$APIs.REGISTER_AND_LOGIN, {
                    phone: this.phone,
                    smsCode: this.smsCode,
                    password: this.password
                })
                    .then(res => {
                        console.log(res)
                        if(res.data.status===200){
                            this.loginSuccess(res);
                        }else {
                            this.$message.error({message:res.data.msg});
                        }
                    })
                    .catch(err => {
                        this.$message.error({message:'网络错误'});
                    })
            },
            getSmsCode() {
                clearInterval(this.timer);
                if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phone)) {
                    this.$message.error({message:'手机号码格式错误'});
                    return false
                }
                this.gettingCode = true;
                this.timer = setInterval(() => {
                    this.num--
                }, 1000);
                this.$http.post(this.$APIs.MSG_CODE, {
                    phone: this.phone,
                    type: 'A',
                    flag: this.curPage === 'login' ? 'B' : 'A'
                })
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        this.$message.error({message:'网络错误'});
                    })
            },
            loginSuccess(res){
                this.uid = res.data.data.mall_cus.userid;
                this.nic = res.data.data.mall_cus.nic;
                localStorage.setItem('uid', this.uid);
                localStorage.setItem('nic', this.nic);
                this.$router.push('person');
            }
        }
    }
</script>

