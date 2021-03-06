let que = document.getElementById("que");
let res = document.getElementById("res");
let logo = document.getElementById("logo");
let maru = document.getElementById("maru");
let batsu = document.getElementById("batsu");
let cnt = 30;
let sco = 0;
let flag = true;
//タイマー処理
let time = setInterval(() => {
  if (cnt > 0) {
    cnt--;
    res.textContent = "スコア : " + sco + " | 時間 : " + cnt + "秒";
  } else {
    res.style.color = "red";
    res.textContent = "スコア : " + sco + " | 終了";
    que.textContent = "時間切れ";
    flag = false;
    clearInterval(time);
  }
}, 1000);
let num = 0;
let max = 10;
let name = new Array(max);
name = [
  "秋田犬",
  "チワワ",
  "トイプードル",
  "シーズー",
  "ブルドック",
  "ダックスフント",
  "ポメラニアン",
  "スピッツ",
  "土佐犬",
  "たけし",
];
let seikai = new Array(max);
seikai = ["〇", "〇", "×", "〇", "×", "×", "×", "〇", "〇", "〇"];
//〇をクリックしたとき
maru.addEventListener("click", () => {
  if (flag) {
    console.log("maru");
    if (seikai[num] == "〇") {
      console.log("正解");
      que.textContent = "問題" + (num + 1) + "正解";
      sco++;
      res.textContent = "スコア : " + sco + " | 時間 : " + cnt + "秒";
    } else {
      console.log("不正解");
      que.textContent = "問題" + (num + 1) + "不正解";
    }
    num++;
    if (num < max) {
      setTimeout(() => {
        que.textContent = "問題" + (num + 1) + " " + name[num];
        logo.src = "img/logo" + num + ".png";
      }, 500);
    } else {
      que.textContent = "問題の回答終了";
      clearInterval(time);
      if (sco == max) {
        que.textContent = "全問正解！おめでとう";
        logo.src = "img/clear.png";
      }
    }
  }
});
//×をクリックしたとき
batsu.addEventListener("click", () => {
  if (flag) {
    console.log("batsu");
    if (seikai[num] == "×") {
      console.log("正解");
      que.textContent = "問題" + (num + 1) + "正解";
      sco++;
      res.textContent = "スコア : " + sco + " | 時間 : " + cnt + "秒";
    } else {
      console.log("不正解");
      que.textContent = "問題" + (num + 1) + "不正解";
    }
    num++;
    if (num < max) {
      setTimeout(() => {
        que.textContent = "問題" + (num + 1) + " " + name[num];
        logo.src = "img/logo" + num + ".png";
      }, 500);
    } else {
      que.textContent = "問題の回答終了";
      clearInterval(time);
      if (sco == max) {
        que.textContent = "全問正解！おめでとう";
        logo.src = "img/clear.png";
      }
    }
  }
});
