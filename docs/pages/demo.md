```hint|directive
reactPTR intents to use with mobile device, desktop are emulate with touch simulation
```

### Default Style

```react
<div className="demo">
    <PullToRefresh>
        <h4>Pull Me To Refresh</h4>
    </PullToRefresh>
</div>
```

### Material Style (Android / Google)

```react
<div className="demo">
    <PullToRefresh loader={Loaders.Material} >
        <h4>Pull Me To Refresh</h4>
    </PullToRefresh>
</div>
```

### Modern Style (Windows 10/8/8.1)

```react
<div className="demo">
    <PullToRefresh
        loader={Loaders.Modern}
        onRefresh={ (resolve, reject) => setTimeout( ()=> resolve(), 4000) }
    >
        <h4>Pull Me To Refresh</h4>
    </PullToRefresh>
</div>
```

### Rocket Style (Yelp)

```react
<div className="demo">
    <PullToRefresh
        loader={Loaders.Rocket}
        onRefresh={ (resolve, reject) => setTimeout( ()=> resolve(), 5000) }
    >
        <h4>Pull Me To Refresh</h4>
    </PullToRefresh>
</div>
```