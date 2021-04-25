// 注释后,借助ProvidePlugin插件，可以自动引入jquery
// import $ from "jquery";

// 如果`$`存在定义，则不会自动导入jquery
// const $ = function () {
//   return {
//     css: () => {},
//   };
// };
// $("body").css("background", "red");

// 遇到`_map`自动导入配置（`{_map: ["lodash", "map"]}`）的lodash的map函数
_map([1, 2, 3], function (a, b) {
  console.log(a, b);
});
