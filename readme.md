# Switch element
Simple switch component.
## Usage
In `<head>...</head>` put<br>
```html
<script src="switch.js"></script>
```
### Set value or change callback

#### Setting default value
```html
<app-switch value="true"></app-switch>
```
Default value: false

#### Getting value
```javascript
let switchElement = document.getElementById('my-switch-1');
alert(switchElement.value);
```

#### Setting value
```javascript
let switchElement = document.getElementById('my-switch-1');
switchElement.value = true;
```

#### Click callback
```javascript
let switchElement = document.getElementById('my-switch-1');
switchElement.addEventListener('click', function( ev ) {
    alert('Switch value: ' + ev.target.value);
});
```

### Style customization
```html
<app-switch style="--value-false-color:#f00;--value-true-color:#0f0;"></app-switch>
```
`--value-false-color` - false value color<br>
`--value-true-color` - true value color<br>
You can change size by setting font-size:
```html
<app-switch style="font-size: 2em"></app-switch>
```
