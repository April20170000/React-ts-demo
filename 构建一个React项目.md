### 构建一个React项目
  
  >1. `npm install -g create-react-app`
  >2. `npx create-react-app my-app --template typescript`
    将会得到一个后缀为.tsx的react项目
  >3. `npm start`

### 配置

  >插件类，ESLint ...

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

