<template>
  <div>
    <h1>HomeView</h1>
    <button v-on:click="logout">ログアウト</button>
    <div>
      <table border="1">
        <tr>
          <th>ID</th>
          <th>種類</th>
          <th>名前</th>
          <th>金額</th>
        </tr>
        <tr v-for="expense in expenses" :key="expense.id">
          <td>{{ expense.id }}</td>
          <td>{{ expense.category }}</td>
          <td>{{ expense.name }}</td>
          <td>{{ expense.amount }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      expenses: [],
    };
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:8080/expenses");
      // 家計簿の値をセット
      this.expenses = response.data;
    } catch (error) {
      console.log("エラーレスポンス:", error.response);
    }
  },
  methods: {
    async logout() {
      try {
        await axios.post("http://localhost:8080/logout");
        this.$router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style></style>
