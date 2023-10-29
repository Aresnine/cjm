
# cyp-cli



上传包之前需要处理的内容

1、设置源为官方源 

```bash
npm set registry https://www.npmjs.org
这里必须使用https协议
```

npm清除缓存

```
npm cache clean
```

npm 强制清除缓存

```
npm cache clean --force
```

强制清除缓存失败使用

```
npm cache verify
```



本地包挂载使用

```
npm link packageName 或者在对应的目录使用 npm link
```

清除本地的挂载(必须使用管理员权限运行的cmd)

```
npm unlink packageName
```

