<template>
  <div>
    <h1>HomePage</h1>
    <button v-on:click="logout">ログアウト</button>
    <div>
      <table>
        <tr>
          <th>種類</th>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
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
