### validator-wxp

一款小巧无依赖的表单验证库，支持独立字符串验证。

#### How to use it？

Step1:

- npm install validator-wxp —save

Step2:

- in you want to use JS file 

- just for string

  ```javascript
  // just for string
  import Validator from 'validator-wxp'
  var v = new Validator()
  v.isPhone('sss') // false
  ```

- for form validation

  ```javascript
  import Validator from 'validator-wxp'
  var v = new Validator('form_name',[
      name:"alphanumeric", // form内部表单元素name
  	display:"字数小于5个字符|大于15个字符", // 错误提示
      rules: 'min_length(5)|max_length(15)' // 需要的规则
  ],function(evt, obj){
      // if get error--> obj.errors.length>0
    	// 你所需要的dom操作，如显示在什么元素内，页面滚动等
  })
  // 支持onblur等事件调用验证函数 blurValidate()
  function blurValidate(){
  	v.validate()
  }

  ```

  ​

