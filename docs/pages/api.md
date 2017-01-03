### Properties

* `height : string` height for the container, use string like '10px', default for '100%'

* `onRefresh : func` callback when refresh is request, pass resolve function as first parameters, default 2000ms auto resolve

* `loader : shape` (optional) loader configuration shape consists of following properties
    * `mode : string` (optional) the method to display the loader container, chocie of using `marginTop` or `absolute`

    * `loaderHeight : number` (optional) the height of loader in px, applied to the container when user pull the container

    * `loaderLoadingHeight : number` (optional) the height of loader in px while in its loading state, default to equal to loaderHeight

    * `loaderDefaultIcon : func` (optional) a function that return an react element, pass in progress(1-100) as it's first parameter

    * `loaderLoadingIcon : element` (optional) a react element that display while loader in it's loading state