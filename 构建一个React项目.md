### 1. 构建一个React项目
  >
  >1. `npm install -g creat-react-app`
  >2. `npx create-react-app my-app --template typescript`

    使用npx可以不执行第一句command，如果本地未安装create-react-app，则npx会将其安装在一个临时目录，使用完之后再删除。
    将会得到一个后缀为.tsx的react项目。
  >3. `npm init react-app my-app`
  >3. `yarn create react-app my-app`
  >3. `npm start`

#### 1.1 npx
npm > v5.2
+ Using locally-installed tools without npm run-script
+ Executing one-off commands
  
  Calling `npx <command>` when `<command>` isn’t already in your $PATH will automatically install a package with that name from the npm registry for you, and invoke it.
+ Run commands with different Node.js versions
  
  `npx node@6 -v`
+ Developing npm run-scripts interactively
+ Share gist-based scripts with friends

  `npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32`
+ Bonus Round: shell auto-fallback

  `standard@7 --version`

#### 1.2 npm init
在npm 6+ 中增加了`npm init <initializer>`这种操作。执行`npm init react-app` 的话 npm 会补全模块名为 create-react-app 并执行`npx create-react-app`。

#### 1.3 工程目录结构

```
my-app jsx
├── node_modules
├── public
│  ├── favicon.ico
│  ├── index.html
│  ├── logo192.png
│  ├── logo512.png
│  └── manifest.json
│  └── robots.txt
└── src
  ├── App.css
  ├── App.js
  ├── App.test.js
  ├── index.css
  ├── index.js
  ├── logo.svg
  └── reportWebVitals.js
  └── setupTests.js
├── package.json
├── README.md
├── .gitignore
```



```
my-app tsx
├── node_modules
├── public
│  ├── favicon.ico
│  ├── index.html
│  ├── logo192.png
│  ├── logo512.png
│  └── manifest.json
│  └── robots.txt
└── src
  ├── App.css
  ├── App.tsx
  ├── App.test.tsx
  ├── index.css
  ├── index.tsx
  ├── logo.svg
  ├── react-app-env.d.ts
  └── reportWebVitals.js
  └── setupTests.js
├── package.json
├── README.md
├── .gitignore
```

jsx dependencies

```json
"@testing-library/jest-dom": "^5.11.4",
"@testing-library/react": "^11.1.0",
"@testing-library/user-event": "^12.1.10",
"react": "^17.0.1",
"react-dom": "^17.0.1",
"react-scripts": "4.0.3",
"web-vitals": "^1.0.1"
```

react-app-env.d.ts

```typescript
/// <reference types="react-scripts" />
```

tsx dependencies

```json
"@testing-library/jest-dom": "^5.11.4",
"@testing-library/react": "^11.1.0",
"@testing-library/user-event": "^12.1.10",
"@types/jest": "^26.0.15",	// added
"@types/node": "^12.0.0",	// added
"@types/react": "^17.0.0",	// added
"@types/react-dom": "^17.0.0",	// added
"react": "^17.0.1",
"react-dom": "^17.0.1",
"react-scripts": "4.0.3",
"typescript": "^4.1.2",
"web-vitals": "^1.0.1"
```



#### 1.4 配置

##### 1.4.1 EditorConfig

VS Code安装 **EditorConfig for VS Code** 插件，在根目录创建.editorconfig文件

```
# Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = tab
indent_size = 4
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
max_line_length = off
trim_trailing_whitespace = false
```

##### 1.4.2 Syntax highlighting

vscode-language-babel: JavaScript syntax highlighting for ES201x, React JSX, Flow and GraphQL.

[Theme - Oceanic Next](https://marketplace.visualstudio.com/items?itemName=naumovs.theme-oceanicnext)

##### 1.4.3 Eslint

```powershell
npx eslint --init
> How would you like to use ESLint? · problems    
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ What format do you want your config file to be in? · JSON
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint@latest
√ Would you like to install them now with npm? · No / Yes
```

devDependencies

```json
"@typescript-eslint/eslint-plugin": "^4.16.1",
"@typescript-eslint/parser": "^4.16.1",
"eslint": "^7.21.0",
"eslint-plugin-react": "^7.22.0",
```

script

```json
"lint": "eslint --ext js,jsx,ts,tsx src/",
"lint-fix": "eslint --ext js,jsx,ts,tsx src/ --fix"
```



.eslintrc.json

```json
{
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"plugins": ["react", "@typescript-eslint"],
	"rules": {
		"indent": ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		"quotes": ["error", "single"],
		"semi": ["error", "always"]
	}
}
```



##### 1.4.4 Prettier

```powershell
npm install --save-dev prettier prettier-eslint eslint-config-prettier stylelint-config-prettier eslint-plugin-prettier
```

.prettierrc.json

```json
{
	"semi": true,
	"printWidth": 140,
	"useTabs": true,
	"tabWidth": 4,
	"singleQuote": true,
	"bracketSpacing": true,
	"jsxBracketSameLine": false,
	"arrowParens": "avoid",
	"jsxSingleQuote": true,
	"trailingComma": "all"
}
```

.eslintrc

```json
"extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint"
],
"plugins": ["react", "@typescript-eslint", "prettier"],
"settings": {
    "react": {
        "version": "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    "import/resolver": {
        "node": {
            "extensions": [".js", ".jsx", ".ts", ".tsx"],
            "paths": ["./src"]
        }
    }
},
```

.prettierignore

```json
**/node_modules
**/dist
**/package.json
**/yarn.lock
**/package-lock.json
**/.eslintrc.js
**/tsconfig.json
```

`yarn add -D husky pretty-quick`    package.json

```json
"husky": {
    "hooks": {
        "pre-push": "yarn lint",
        "pre-commit": "pretty-quick --staged"
    }
}
```

##### 1.4.5 Snippet

**Import**

```
imd→ import { destructuredModule } from 'module'

impt→ import PropTypes from 'prop-types'

redux→ import { connect } from 'react-redux'
```

**PropTypes**

```
ptar→ PropTypes.array.isRequired

ptor→ PropTypes.object.isRequired

ptsr→ PropTypes.string.isRequired

ptnr→ PropTypes.number.isRequired

ptbr→ PropTypes.bool.isRequired
```

**Redux**

```
rxaction→ redux action template

rxconst→ export const $1 = '$1'

rxreducer→ redux reducer template

rxselect→ redux selector template
```

**Component**

**`rcc`**

```javascript
import React, { Component } from 'react'

export default class FileName extends Component {
  render() {
    return <div>$2</div>
  }
}
```

**`rce`**

```javascript
import React, { Component } from 'react'

export class FileName extends Component {
  render() {
    return <div>$2</div>
  }
}

export default $1
```

**`rcep`**

```javascript
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class FileName extends Component {
  static propTypes = {}

  render() {
    return <div>$2</div>
  }
}

export default $1
```

**`rfce`**

```javascript
import React from 'react'

function $1() {
  return <div>$0</div>
}

export default $1
```

**`rafce`**

```javascript
import React from 'react'

const $1 = () => {
  return <div>$0</div>
}

export default $1
```

**`rcredux`**

```javascript
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class FileName extends Component {
  render() {
    return <div>$4</div>
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FileName)
```

**Others**

**`test`**

```javascript
test('should $1', () => {
  $2
})
```

**`cmmb`**

```javascript
/**
|--------------------------------------------------
| $1
|--------------------------------------------------
*/
```

**`clg`**

```javascript
console.log(object)
```



##### 1.4.6 Test配置

```powershell
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

文件名

- Files with `.js` suffix in `__tests__` folders.
- Files with `.test.js/tsx` suffix.
- Files with `.spec.js/tsx` suffix.

chrome plugin: Testing Playground

- 面向最终 DOM 进行测试，会渲染子组件
- 模拟用户的交互方式
- 支持除了 React 以外的其他 UI 框架



data-testid: 针对测试的id



```javascript
// hidden-message.js
import * as React from 'react'

// NOTE: React Testing Library works well with React Hooks and classes.
// Your tests will be the same regardless of how you write your components.
function HiddenMessage({children}) {
  const [showMessage, setShowMessage] = React.useState(false)
  return (
    <div>
      <label htmlFor="toggle">Show Message</label>
      <input
        id="toggle"
        type="checkbox"
        onChange={e => setShowMessage(e.target.checked)}
        checked={showMessage}
      />
      {showMessage ? children : null}
    </div>
  )
}

export default HiddenMessage
```



```js
// __tests__/hidden-message.js
// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import HiddenMessage from '../hidden-message'

test('shows the children when the checkbox is checked', () => {
  const testMessage = 'Test Message'
  render(<HiddenMessage>{testMessage}</HiddenMessage>)

  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  expect(screen.queryByText(testMessage)).toBeNull()

  // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  fireEvent.click(screen.getByLabelText(/show/i))

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  expect(screen.getByText(testMessage)).toBeInTheDocument()
})
```



### 2 create-react-app脚手架提供更多功能



### 安装所需的package，以及相应的@type

   1. react-router-dom 路由
   2. @material-ui/core @material-ui/icons ...

### 创建一个组件

   1. 新建一个.tsx后缀的文件

```javascript
    import React from 'react';
    import './App.css';
    
    export default function App() {
        return (
            <div className="App">
                some description
            </div>
        );
    }
```

### router

​	1. 结合material-ui的tabs组件来实现一个页面内部的路由跳转，
​	    比如路由加参数，参考security landing page，当我从另一个page
​	    通过路由跳转到此页面的某一个tab页面，该如何实现？
​	2. #和/有什么区别，分别在什么情况下使用，如何用？
​	

### componets

​	1. angular项目中angular-material的<mat-icon>有个加载问题，当加载失败时会显示
​	    为文字，已替换成<fa-icon>来解决。那对应的material-ui可能也有相应的问题，
​	    该如何集成font awesome？
​	2. 

#### state

​	1. 数据缓存，父子组件互传
​	2. 例如material-ui的checkbox组件，当我想实现一组checkbox时需要用到for循环，
​	    checked状态由jsb提供时，那checked值就是一个变量，当我在UI上切换某一个状态时，
​	    我该如何给这个checkbox的checked重新赋值并即时刷新UI

#### events






### Material-ui的应用

```javascript
    import React from "react";
    import Grid from "@material-ui/core/Grid";
    import Typography from "@material-ui/core/Typography";
    import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            card: {
                padding: theme.spacing(2),
                textAlign: 'left',
                color: theme.palette.text.secondary,
            },
            mainColor: {
                color: '#34495e'
            },
            img: {
                width: '7rem'
            }
        }),
    );

    export default function FeatureHeading(props: any) {
        const classes = useStyles();
        return (
            <React.Fragment> // render的时候必须有一个父容器包起来，如果不需要的话可以使用此标签，最后生成的时候不会渲染
                <Grid container className={`justify-content-between align-items-center mb-3`}>
                    <Grid item xs>
                        <Typography className={`${classes.mainColor} `} variant="h4" noWrap>
                            {props.heading}
                        </Typography>
                    </Grid>
                    <Grid item xs={3} className={`text-center`}>
                        <img src={props.icon} className={classes.img} alt="" />
                    </Grid>
                </Grid>
                <Typography className={`${classes.mainColor} mb-3`} variant="body1" noWrap>
                    {props.desc}
                </Typography>
            </React.Fragment>
        )
    }
```

### 路由: react-router-dom

```python
npm install react-router-dom --save-dev
```

1. 新建两个页面，分别命名"pageOne" "pageTwo"

```javascript
import React from 'react';
import { Link } from 'react-router-dom';

export default class PageOne extends React.Component {
    render() {
        return (
            <div>
                <Link to="/two">go to pageTwo</Link>
            </div>
        )
    }
}
```

```javascript
import React from 'react';
import { Link } from 'react-router-dom';

export default class PageTwo extends React.Component {
    render() {
        return (
            <div>
                <Link to="/one">go to pageOne</Link>
            </div>
        )
    }
}
```

2. 路由组件

>exact: 精准匹配
    path: 路由地址，可自定义的一个别名
    component：对应的component name，必须驼峰命名并且大写开头

>路由匹配组件有两种:`Route`和`Switch`,`Switch`把多个路由组合在一起。
    对于一个`<Route>`组件，可以设置三种属性：`component`、`render`、`children`来渲染出对应的内容。
当组件已存在时，一般使用`component`属性当需要传递参数变量给组件时，需要使用`render`属性

>有三种常用的导航组件，分别是:`<Link>`、`<NavLink>`、`<Redirect>`。`<NavLink>`是一种特殊的`Link`组件，匹配路径时，渲染的`a`标签带有active。

```javascript
    <HashRouter>
        <Switch>
            <Route exact path="/one" component={PageOne}></Route>
            <Route path="/two" component={PageTwo}></Route>
        </Switch>
    </HashRouter>
```

3. 带参路由
>`useLocation`方法，是浏览器自带的`window.location`的一个封装，`search`的类型为`string`;
`URLSearchParams`员提供了很多实用的方法，`append`, `delete`, `get`, `has`, `set`...


```javascript
function useQuery() {
  return new URLSearchParams(useLocation().search); // 返回了一个URLSearchParams对象
}

function QueryParamsDemo() {
  let query: URLSearchParams = useQuery();

  return (
    <div>
        <h2>Fruits</h2>
        <ul>
          <li>
            <Link to="/account?name=apple">Apple</Link>
          </li>
          <li>
            <Link to="/account?name=pear">Pear</Link>
          </li>
        </ul>
        <Child name={query.get("name")} />
    </div>
  );
}

function Child({ name }: {name: string | null}) {
  return (
    <div>
      {name ? (
        <Typography variant="h6" noWrap>
          The <code>name</code> in the query string is &quot;{name}
          &quot;
        </Typography>
      ) : (
        <Typography variant="h6" noWrap>There is no name in the query string</Typography>
      )}
    </div>
  );
}
```

### 多语言支持: i18next

`npm install react-i18next i18next --save`

如果需要检测当前浏览器的语言或者从服务器获取配置资源可以安装下面依赖
`npm install i18next-http-backend i18next-browser-languagedetector --save`

1. 多语言文件支持json, js格式

>需要在index同级目录下创建一个配置文件，以便添加i18next的配置，该配置将检测并加载翻译内容。

```javascript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from './nls/resources'; // 此文件是多语言匹配表

i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    fallbackLng: 'en', // 默认language
    lng: navigator.language.toLowerCase().slice(0, 2), // 匹配浏览器当前language
    debug: true,
    resources: resources,
    interpolation: {
    escapeValue: false,
    }
});
export default i18n;
```

```javascript
import en from './en.json'
import ar from './ar.json'
import zh from './zh.json'

const resources = {
    ar: {
        translation: ar
    },
    en: {
        translation: en
    },
    zh: {
        translation: zh
    }
}

export default resources;
```

2. 使用

>在hook中使用，此方法只能适用于函数式组件

```javascript
import React from "react";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";

export default function FeatureHeading(props: any) {
    const { t, i18n } = useTranslation(); 
    /* 
    t方法用来翻译; 也可以得到i18n实例更改语言
    例：i18n.changeLanguage('ar');
    */
    return (
        <Grid item xs>
            <Typography variant="h4" noWrap>
                {t(props.heading)}
            </Typography>
        </Grid>
    )
}
```

>使用Transition

```javascript
import { Typography } from "@material-ui/core";
import { Translation } from 'react-i18next';

export default function OtherPage() {
    return (
        <Translation>
        {
            t => <Typography>{t('message')}</Typography>
        }
        </Translation>
    )
}
```

### Build

>`npm run build`
生成一个build文件夹，在build/static文件夹里包含了JS和CSS文件，每个文件名包含了文件内容的唯一哈希；只会编译需要的文件，没有使用到的文件不会进行编译打包。

