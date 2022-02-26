import express from 'express'
import path from "path";

//声明express
const app = express();
const port = process.env.PORT || 3001

//设置返回体为 json
app.use(express.json());

//设置routes
import routes from "./routes";

app.use("/", routes);

//设置公共的静态文件目录public
app.use(express.static(path.join(__dirname, '../public')));

//build配置，如果在生产模式下运行，则为前端的“build”目录提供服务。
if (process.env.NODE_ENV === 'production') {
    console.log('Running in production!');

    // Make all files in that folder public
    app.use(express.static(path.join(__dirname, '../../frontend/build')));

    // If we get any GET request we can't process using one of the server routes, serve up index.html by default.
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../frontend/build/index.html'));
    });
}

app.listen(port, () => console.log(`App server listening on port ${port}!`))