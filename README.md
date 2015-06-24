# jquery.imageCompare

## Overview

Convert &lt;IMG> elements to interactive image compare elements.

## Demo

http://web.lazygyu.net/demos/imageCompare/

## How to use

```
<!-- 1. import jquery and this plugin file in html page -->
<script src='//code.jquery.com/jquery-1.11.3.min.js'></script>
<script src='jquery.imageCompare.js'></script>

<!-- 2. add img tags -->
<img src='user_image_url' data-cover='user_image_to_compares' />

<!-- 3. call the plugin -->
<script>
$("img").imageCompare({grapWidth:'3px'});
</script>
```

## Options

`grapWidth` : Width of the drag handle. 0 to invisible. Default is '1px'.

`grapColor` : Color of the drag handle. Default is 'white'.

