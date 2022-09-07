# Answers to Mentor questions

## Whats the difference between putting script in a head and in an end of the body? 
Actually there are no significant difference, but for a real life website - it is very much. When you keep the script at the very beginning users will be waiting for something (even the loader) to appear, as browser will be downloading the heavy scripts. 

Scripts in **head**

Scripts to be executed when they are called or when an event is triggered are placed in functions.

Put your functions in the head section, this way they are all in one place, and they do not interfere with page content.

Scripts in **body**

If you don't want your script to be placed inside a function or if your script should write page content, it should be placed in the body section.

(approved by W3Schools)
### What change in script loading when you put HTML properties:async, defer, x  to script tag?

## How to make the same result without script, just with css and html [ascroll to particular part of site using id anchors in URL]?
It's simple! 
First we have to create an anchor (the place we want to scroll) by adding one of those:

```HTML
<a id="anchor-name">The  name where you want to jump</a> 
<h2 id="anchor-name">Section name</h2>
<img id="anchor-name" src="/images/imgname.jpeg"/>
<p id="anchor-name">Paragraph name</p>
```
Next we need to create a hyperlink by using the id of the link target, preceded by #.
```HTML
<a href="#anchor-name">Jump to the part of the page with the “anchor-name” id </a>
```

voilà

## Check what property of sidebar css is responsible for preventing buttons of overflowing text on the whole website
Overflow? I don't really know :C

## What cms are?
Content management system (CMS) - software that allows easy creation and maintenance of a website, as well as its subsequent updating and expansion, including by non-technical designer staff.

So I quess WordPress is one of those. 

## How web developers deal with unexpected long texts in buttons[because of cms source of content]?
## What pug is and what can provide for me in this task [don't have to repeat changes in each file if I want to change something in the website layout] (https://github.com/pugjs/pug )
## What ,,encje" are and why are they used like that?

I'll finish tomorrow, time is over :CCCC