
# is-page-active

  

This is a tool to detect if the current page is active, and it provides a listener and a function which can detect directly.

  

## Getting Started

  

Just follow these steps below.

  

### Installing

  

#### yarn

  

```

yarn add is-page-active

```

  

#### npm

  

```

npm install is-page-active --save

```

  

### Examples

#### detect if the browser support this feature

```javascript
import { isSupported } from  "is-page-active";
console.log(isSupported());
// true
```

#### detect if the current page is active directly

```javascript
import { isActive } from  "is-page-active";
console.log(isActive());
// true
```

#### add a listener to do something when the active status changes

```javascript
import { onActiveChange } from  "is-page-active";
onActiveChange((active) => {
	if(active) {
		console.log("The page is active now")
	} else {
		console.log("The page is inactive now")
	}
})
```

## License

  

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details