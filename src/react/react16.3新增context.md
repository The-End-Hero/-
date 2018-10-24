## 新Context API

```react
const ThemeContext = React.createContext('light')
class ThemeProvider extends React.Component {
  state = {theme: 'light'}
  render() {
    return ThemeContext.provide(this.state.theme, this.props.children)
  }
}

const ThemeConsumer = ({children}) => ThemeContext.consume(children)

class App extends React.Component {
  render() {
    <ThemeProvider>
      <ThemeConsumer>{val => <div>{val}</div>}</ThemeConsumer>
    </ThemeProvider>
  }
}
```

新的 `context API` 主要由以下三部分组成

- `React.createContext` 用于传递 `初始值`（可选择 [使用 bitmask 的一个奇妙的选择性退出函数](https://link.juejin.im?target=https%3A%2F%2Ftwitter.com%2Facdlite%2Fstatus%2F957446433656864768)），返回一个包含 `provider` 和 `consumer` 的对象
- `provide` 函数使用 `higher`，并可以接收任何值
- `consume` 函数在 `provider` 之后任何地方使用，并传递一个返回 `JSX` 的函数（这有点像 `render prop` 组件，但 `consume` 不是组件）。