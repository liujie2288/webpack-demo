# 用于测试 ProvidePlugin 插件

正常使用一个包，需要通过`import`或`require`引入，比如`import $ from jquery`，通过 `ProvidePlugin`插件，可以实现自动引入相应模块以及模块中的属性，而不需要在文件中书写导入代码。

根据传入 `ProvidePlugin` 的配置， 在打包时，会自动查找配置中指定的标识符(配置对象的键)，如果找到，则会自动倒入该标识符对应的模块或者模块中的属性。

PS:
1. 当文件中没有标识符的定义时，才会自动导入模块 
2. 当文件中已经导出了依赖模块时，自动导入并不会重复导入相应模块
3. 可以导入一个模块中的某一个函数。比如：`{_map: ["lodash", "map"]}`（注意：这里就算只使用了一个函数，也导入了整个包，打包时没有tree shaking）
4. 当导入一个ESModule的默认导出时，需要显示指定`default`属性，比如：`{Vue: ['vue/dist/vue.esm.js', 'default']}`