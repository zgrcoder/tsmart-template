## smart-cli 命令

### 配置镜像

```
npm config set registry=https://mirrors.tencent.com/npm/
```

### 安装Cli工具

```
npm install -g smart-cli
```

### 模板开发调试

```
# 初始化项目
tsmart init [projectName]

# 启动项目，本地调试组件
tsmart start

# 构建组件
tsmart build

# 自定义组件
tsmart widget <widgetId>

# 发布组件
tsmart publish
```
