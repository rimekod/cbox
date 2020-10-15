# CBOX


![](https://i.hizliresim.com/j6stbj.png)

### With CBOX, you can make an alert box in 15 seconds without using HTML and CSS!

  - Functional Buttons
  - Color and design adjustments
  - Delay and animation properties

### Basic Usage
```html
    <script src="https://cdn.jsdelivr.net/gh/rimekod/cbox@74bd2b7/cbox.js"></script>
```
```js
    CBOX.create("This website uses cookies to provide you with a better experience.", {
       firstButtonText: "I Agree",
       secondButtonText: "Quit",
    });
    CBOX.firstButton(() => {
       document.cookie = "cookiesAccepted=true";
       CBOX.hide();
    })
    CBOX.secondButton(() => {
       CBOX.hide();
    })
```

### Settings

"settings" is the second argument to the "create" function and is an object.

| Value | Type | Default |
| ------ | ------ | ------ |
| animation | String ("bottom 1200") | "right 400"
| delay | Int (3000) | 100
| boxWidth | String ("450px") | auto
| boxBackground | String ("#000") | "#f5f6f9"
| contentColor | String ("#328fa8") | "#000"
| firstButtonDisplay | Bool (true & false) | true
| secondButtonDisplay | Bool (true & false) | true
| firstButtonText | String ("OK!") | "Accept"
| secondButtonText | String ("NO!") | "Close"
| firstButtonBackground | String ("#328fa8") | "#00d68f"
| secondButtonBackground | String ("transparent") | "indianred"
| firstButtonTextColor | String ("#000") | "#fff"
| secondButtonTextColor | String ("#ddd") | "#fff"

### On Website:
---
![](https://i.hizliresim.com/j2utzQ.png)

----

License
----

MIT

## Author
[rimekod](https://rimekod.com)

