<template>
  <div>
    <h1>Login</h1>
    <div v-if="errorMessage" id="error">{{ errorMessage }}</div>
    <form v-on:submit.prevent="login">
      <label for="username">ユーザ名</label>
      <input type="text" placeholder="ユーザ名" v-model="username" />
      <br />
      <label for="password">パスワード</label>
      <input type="password" placeholder="パスワード" v-model="password" />
      <br />
      <button type="submit">ログイン</button>
      <br />
      <button type="button" v-on:click="signup">新規登録</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async login() {
      try {
        await axios.post("http://localhost:8080/login", {
          username: this.username,
          password: this.password,
        });
        // '/'に遷移する
        this.$router.push("/");
      } catch (error) {
        // エラーメッセージを受信
        this.errorMessage = error.response.data.message;
      }
    },
    signup() {
      console.log("signup");
    },
  },
};
</script>

<style>
#error {
  color: red;
}
</style>
