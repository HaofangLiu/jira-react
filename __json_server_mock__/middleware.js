// 中间件模拟错误登录

module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "test" && req.body.password === "1234") {
      return res.status(200).json({
        user: { token: "123123" },
      });
    } else {
      return res.status(400).json({
        message: "用户名密码错误",
      });
    }
  }
  next();
};
