<template>
  <div>
    <h1>Income</h1>
    <form v-on:submit.prevent="addIncome()">
      <table>
        <tr>
          <th>日時</th>
          <td>
            <input type="date" v-model="date" />
          </td>
        </tr>
        <tr>
          <th>カテゴリ</th>
          <td>
            <select v-model="category">
              <option v-for="category in categoryList" :key="category">
                {{ category }}
              </option>
            </select>
          </td>
        </tr>
        <tr>
          <th>内容</th>
          <td>
            <input type="text" v-model="content" placeholder="ex.)宿代" />
          </td>
        </tr>
        <tr>
          <th>価格</th>
          <td><input type="number" v-model="price" placeholder="1000" />円</td>
        </tr>
        <tr>
          <th>備考</th>
          <td>
            <input type="text" v-model="memo" placeholder="メモ程度に" />
          </td>
        </tr>
      </table>
      <button type="submit">登録</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "IncomeView",
  data() {
    return {
      // バックエンドから受信するべき
      categoryList: ["給与", "賞与", "年金", "その他"],
      date: this.getToday(),
      content: "",
      category: "",
      price: "",
      memo: "",
    };
  },
  methods: {
    getToday() {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const dd = String(today.getDate()).padStart(2, "0");
      return `${yyyy}-${mm}-${dd}`;
    },
    async addIncome() {
      try {
        const response = await axios.post("http://localhost:8080/register", {
          date: this.date,
          content: this.content,
          category: this.category,
          price: this.price,
          memo: this.memo,
        });
        console.log(response);
      } catch (error) {
        console.log(error.response);
      }
    },
  },
};
</script>
