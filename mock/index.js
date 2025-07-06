module.exports = {
  "GET /api/user": (req, res) => {
    res.send({ id: 1, name: "Taro" });
  },
  "POST /login": (req, res) => {
    const { username, password } = req.body;
    if (username === "test" && password === "test") {
      res.send({ code: 200, message: "ログイン成功" });
    } else {
      res
        .status(401)
        .send({ code: 401, message: "ユーザー名またはパスワードが違います" });
    }
  },
  "POST /logout": (req, res) => {
    // セッションアウト処理を記述
    console.log("$$$$$$");
    res.send({ message: "ログアウトしました" });
  },
};
