import React from 'react';
import useGet from './useGet'

//创建上下文
const AppContext = React.createContext({
    articles: []
})

function AppContextProvider({children}) {
    //定义后端请求路径
    const articlesGet = useGet('/api/articles', [])
    //定义上下文
    const context = {
        articles: articlesGet.data,
        articlesLoading: articlesGet.isLoading
    }
    //将子组件的上下文包装在Provider中
    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    );
}

export {AppContextProvider, AppContext} ;