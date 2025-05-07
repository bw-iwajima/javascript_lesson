console.log("Q1変数");
//nickname, age に自分の名前と年齢を代入し、文字列連結で以下のようにコンソールに出力してください。
let nickname = "ごっしー";
let age = 28;
console.log("私のニックネームは" + nickname + "です。" + "年齢は" + age + "歳です。")

console.log("Q2配列");
//変数 languages に JavaScript, PHP, Ruby, Python, Go の 5 つの値を持つ配列を代入し、
//その中から JavaScript, Python を取得し、テンプレートリテラルを用いて以下のようにコンソールに出力してください。
let languages = ["JavaScript","PHP","Ruby","Python","Go"];
let template = `${languages[0]}
${languages[3]}`;
console.log(template);


console.log("Q3オブジェクト");
//下記の変数 user を使用し 26 をコンソールに出力してください
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

console.log("Q4配列×オブジェクト");
//下記の変数 playerList を使用し The Legend of Zelda をコンソールに出力してください。
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

console.log("Q5四則演算");
//Q4 で定義した変数 playerList を使用し、
//John, Bob, Michael の年齢の平均値を計算した結果をコンソールに出力してください。
let average = (playerList[0].age + playerList[1].age + playerList[2].age)/3;
console.log(average);

console.log("Q6関数");
//Hello とコンソールに出力する関数 sayHello を定義し、実行してください。
//変数 sayWorld に World とコンソールに出力する無名関数を代入し、実行してください。

function sayHello(){
  console.log("Hello");
}
sayHello();

const sayWorld = function(){
  console.log("Hello");
}
sayWorld();

console.log("Q7 メソッド");
//Q3 で定義した変数 user に '2000-09-27'を値とする birthday プロパティを追加してください。
//Q3 で定義した変数 user に Hello！とコンソールに出力するメソッド sayHello を追加し、実行してください。
//※ いずれも Q3 で定義した変数 user を直接書き換えないこと

user.birthday = "2000-09-27";
user.sayHello = function(){
  console.log("Hello!");
};
console.log(user.birthday);
user.sayHello();

console.log("Q8引数");
//下記の空のオブジェクト calc を使用し、以下問題を解いてください。
//let calc = {};
//2 つの引数 x, y の和をコンソールに出力する add メソッドを定義し、7 になるように実行して下さい。
let calc = {
  add: function(x,y){
    console.log(x+y);
  }
}  
calc.add(3,4);

//2 つの引数 x, y の差をコンソールに出力する subtract メソッドを定義し、10 になるように実行して下さい。
calc = {
  substract: function(x,y){
    console.log(x-y);
  }
  
}
calc.substract(20,10);

//2 つの引数 x, y の積をコンソールに出力する multiply メソッドを定義し、49 になるように実行して下さい。")
calc ={
  multiply: function(x,y){
    console.log(x*y);
  }
}
calc.multiply(7,7);

//2 つの引数 x, y の商をコンソールに出力する divide メソッドを定義し、5 になるように実行して下さい。
calc ={
  divide: function(x,y){
      console.log(x/y);
  }
}
calc.divide(15,3);

console.log("Q9返り値");
//2 つの引数 x, y を受け取り、x を y で割った剰余を返り値とする関数 remainder を定義し、5 と 3 を引数に渡して実行した返り値を用いて文字列連結で以下のようにコンソールに出力してください。

function remainder(x,y){
  let surplus = (x%y);
  return surplus;
}  

const x = 5;
const y = 3;
console.log(x+ "を"+ y+ "で割った余りは"+ remainder(5,3)+"です");

console.log("Q10スコープ");
//xはfoo関数内で定義されているローカル変数のため
//関数fooの外で使おうとしてもスコープ外となり参照できない

console.log("応用編 問題");
console.log("Q1標準組み込みオブジェクト");
//標準組み込みオブジェクトMathを使用し、0～9のランダムな整数をコンソールに出力してください

let random = Math.floor(Math.random()*10);
console.log(random);

console.log("Q2 コールバック関数");
//関数setTimeoutを使用し、3秒後に以下のようにコンソールに出力してください
//Hello World!

function  timeout(callback){
  setTimeout(callback,3000)
}

timeout(function(){
  console.log("Hello World!");
});

console.log("Q3 if");
//変数 num に 任意の数値を代入し、下記条件のもと文字列をコンソールに出し分ける処理を作成してください。
/*条件
num が 0 より大きければnum is greater than 0
num が 0 より小さければnum is less than 0
num が 0 であればnum is 0
*/
let Num = 3;

if(Num>0){
  console.log("num is greater than 0");
}else if(Num<0){
  console.log("num is less than 0");
}else if (Num == 0){
  console.log("num is 0");
}


console.log("Q4 for");
//変数 numbers に空の配列を代入した後、0 ~ 99 までの数字を変数 numbers に全て追加し、
// 値が追加された状態の変数 numbers をコンソールに出力してください

let numbers =[];

for(let i = 0; i < 100; i++){
  numbers[i] =i;
}

console.log(numbers);

console.log("Q5 for×if");
//以下の変数 mixed から 要素を一つずつ取り出し、
// 下記条件のもと文字列をコンソールに出し分ける処理を作成してください。
//Number であり偶数の時は even
//Number であり奇数の時は odd
//Number 以外の時は not number

let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < 7; i++ ){
  if(typeof mixed[i] == "number"&& mixed[i]%2==0){
    console.log("even");
  } else if(typeof mixed[i]== "number"&&mixed[i]%2==1){
    console.log("odd");
  } else if(typeof mixed[i] !=="number"){
    console.log("not number");
  } 
}