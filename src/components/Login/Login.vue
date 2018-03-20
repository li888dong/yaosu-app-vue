<style scoped>
    .login-container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 !important;
        background-color: #03A657;
        color: #ffffff;
        padding: 0 20px;
    }

    .login-container form {
        margin-top: 40px;
    }

    .login-container .title {
        padding: 10px;
        font-weight: normal;
        margin-top: 40px;
    }

    .login-container .msg-login-btn {
        position: absolute;
        right: 20px;
        top: 10px;
        font-size: 14px;
    }

    .login-container .login-container-header .icon-fanhui {
        position: absolute;
        left: 10px;
        top: 15px;
    }

    .login-container label {
        display: block;
        font-size: 14px;
        margin: 20px 0;

    }

    .login-container input[type=checkbox] {
        outline: none;
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }

    .login-input {
        width: 100%;
        height: 40px;
        font-size: 18px;
        border: none;
        border-bottom: 1px solid #ffffff;
        outline: none;
        background-color: transparent;
        color: white;
    }

    .yzm-btn {
        width: 100px;
        height: 30px;
        border: none;
        outline: none;
        position: absolute;
        right: 10px;
        bottom: 10px;
        border-radius: 4px;
        color: #fff;
        background-color: #ccc;
    }

    .login-btn-group {
        position: absolute;
        bottom: 20px;
        width: 90%;
        display: flex;
        flex-flow: row;
        justify-content: space-around;
    }

    .submit-btn {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translate(-50%);
    }

    .rotate_180 {
        display: inline-block;
        transform: rotate(180deg);
        border: 1px solid transparent;
        border-radius: 50%;
        opacity: 0.5;
        background-color: #ccc;
        color: #999;
        padding: 3px;
        font-weight: bold;
    }
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

        <form>
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
        </form>
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
                    alert('手机号码格式错误');
                    return false
                }
                if (!/^[A-Za-z0-9]{6,14}$/.test(this.password)) {
                    alert('密码6-14位字母加数字');
                    return false
                }
                if (!/^[0-9]{6}$/.test(this.smsCode)) {
                    alert('验证码 6数字');
                    return false
                }
                if (!this.agree) {
                    alert('请同意协议');
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
                    alert('手机号码格式错误');
                    return false
                }
                if (!/^[A-Za-z0-9]{6,14}$/.test(this.password)) {
                    alert('密码6-14位字母加数字');
                    return false
                }
                this.$http.post(this.$APIs.LOGIN, {
                    phone: this.phone,
                    password: this.password
                })
                    .then(res => {
                        this.uid = res.data.data.tbCus.userid;
                        this.nic = res.data.data.tbCus.nic;
                        localStorage.setItem('uid', this.uid);
                        localStorage.setItem('nic', this.nic);
                        this.$router.push('home');
                        console.log(res)
                    })
                    .catch(err => {
                        alert(err)
                    })
            },
            smsLogin() {
                if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phone)) {
                    alert('手机号码格式错误');
                    return false
                }
                if (!/^[0-9]{6}$/.test(this.smsCode)) {
                    alert('验证码 6数字');
                    return false
                }
                this.$http.post(this.$APIs.MSG_LOGIN, {
                    phone: this.phone,
                    smsCode: this.smsCode
                })
                    .then(res => {
                        console.log(res);
                        this.uid = res.data.data.tbCus.userid;
                        this.nic = res.data.data.tbCus.nic;
                        localStorage.setItem('uid', this.uid);
                        localStorage.setItem('nic', this.nic);
                        this.$router.push('home');
                    })
                    .catch(err => {
                        alert(err)
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
                        console.log(res);
                        this.uid = res.data.data.tbCus.userid;
                        this.nic = res.data.data.tbCus.nic;
                        localStorage.setItem('uid', this.uid);
                        localStorage.setItem('nic', this.nic);
                        this.$router.push('home');
                    })
                    .catch(err => {
                        alert(err)
                    })
            },
            getSmsCode() {
                clearInterval(this.timer);
                if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phone)) {
                    alert('手机号码格式错误');
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
                        alert(err)
                    })
            }
        }
    }
</script>

