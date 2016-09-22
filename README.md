# Prevent Default

## Objectives
+ Explain what prevent default does and when it's used
+ Use `event.preventDefault()` to stop default browser behavior

## Intro

What happens when you submit a form? Think about when you sign up for an online service, such as an Amazon account, or log into your Facebook or email accounts. What happens in the browser when you submit those forms? As soon as the form is submitted, the page in the browser refreshes. This happens every single time. This is known as the default browser behavior.

While this is obviously the behavior we would want to have most of the time, there are times when you maybe don't want a page refresh. Maybe you have client-side validations that check to make sure the form input is correct and the user doesn't enter valid input. Maybe you're building a single page application (like the calculator we built, or a to-do list), and refreshing the page would clear the data from the page.

Both of those circumstances involve stopping jQuery from performing the default behavior. We can do that by using the `preventDefault` function.

## Default Behavior

Let's say we have the following form with a div below it:

```html
<form>
  <input type="text" id="name">
  <input type="submit" value="submit">
</form>
<div id="hello">
</div>
```

And the following `submit` event that says hello to the user based on the name they entered. The greeting is added to the `div` with the ID `hello`. 

```js
$('form').on('submit', function(event){
  var name = $('#name').val();
  $("#hello").text("Hello, " + name);
});
```

When you actually enter and submit the form, instead of seeing the greeting, you'll see the page refresh. Go ahead and open `index.html` in the browser and `js/script.js` in the text editor. You'll want to uncomment the code under the comment `// browser refreshes on submit` and make sure the rest of the code in the file is commented out. Go ahead and test the form submission. You should see the form submit and the page refresh. Obviously that isn't going to cut it for us.

## jQuery Event Object

So how do we use `preventDefault`? We need to refactor our code slightly:

```js
$('form').on('submit', function(event){
  var name = $('#name').val();
  $("#hello").text("Hello, " + name);
  event.preventDefault();
});
```

In the above code, we had to pass an `event` to the anonymous function. This `event` is the jQuery event object. Every time an event is bound to an element, this jQuery event object is created to represent that event. 

In `js/script.js` go ahead and comment out all the code except for the code directly below the comment `//examine event object`. That code should have `debugger`. Refresh `index.html` in the browser and fire your click event. When you're dropped in the debugger console, go ahead and take a look at `event`.

You should see something like this:

```js
event
> n.Event {originalEvent: Event, type: "submit", timeStamp: 1453912261129, jQuery211012266199523583055: true, which: undefined…}
```

`event.currentTarget;` will return the HTML `form` because that is the element the submit event is bound to. `event.type;` returns `"submit"`.

## Using Prevent Default

Now that we know what `event` represents, let's talk about what we do with that object. We have to pass `event` as an argument to the anonymous callback function. 

```js
$('form').on('submit', function(event){
 //code
});
```

Now that we have `event` accessible inside the function, we can use it to call `preventDefault`:

```js
event.preventDefault();
```

This stops the event from performing its default behavior. Go into `js/script.js` and comment out all the code except the lines directly below the `// stop page refresh` comment. Now refresh `index.html` in the browser and submit the form. You should see your greeting appear!

## Resources

+ [jQuery Event Object](https://api.jquery.com/category/events/event-object/).

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/js-jquery-prevent-default-readme' title='Prevent Default'>Prevent Default</a> on Learn.co and start learning to code for free.</p>
