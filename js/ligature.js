/*
* Symbolset
* www.symbolset.com
* Copyright © 2012 Oak Studios LLC
* 
* Upload this file to your web server
* and place this before the closing </body> tag.
* <script src="webfonts/ss-social.js"></script>
*/

if (/(MSIE [7-9]\.|Opera.*Version\/(11|12)\.|Chrome\/([5-9]|10)\.|Version\/(4)[\.0-9]+ Safari\/|Version\/(4|5\.0)[\.0-9]+? Mobile\/.*Safari\/)/.test(navigator.userAgent)) {

  if (typeof legacy !== 'function') {

    /* domready.js */
    !function(a,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&typeof define.amd=="object"?define(b):this[a]=b()}("ready",function(a){function m(a){l=1;while(a=b.shift())a()}var b=[],c,d=!1,e=document,f=e.documentElement,g=f.doScroll,h="DOMContentLoaded",i="addEventListener",j="onreadystatechange",k="readyState",l=/^loade|c/.test(e[k]);return e[i]&&e[i](h,c=function(){e.removeEventListener(h,c,d),m()},d),g&&e.attachEvent(j,c=function(){/^c/.test(e[k])&&(e.detachEvent(j,c),m())}),a=g?function(c){self!=top?l?c():b.push(c):function(){try{f.doScroll("left")}catch(b){return setTimeout(function(){a(c)},50)}c()}()}:function(a){l?a():b.push(a)}})
    
    var legacy = function(node) {
      
      if (!node instanceof Object) return false;
      
      if (node.length) {
        for (var i=0; i<node.length; i++) {
          legacy(node[i]);
        }
        return;
      };
      
      if (node.value) {
        node.value = liga(node.value);
      } else if (node.nodeValue) {
        node.nodeValue = liga(node.nodeValue);
      } else if (node.innerHTML) {
        node.innerHTML = liga(node.innerHTML);
      }
        
    };
    
    var getElementsByClassName = function(node, classname) {
      var a = [];
      var re = new RegExp('(^| )'+classname+'( |$)');
      var els = node.getElementsByTagName("*");
      for(var i=0,j=els.length; i<j; i++)
          if(re.test(els[i].className))a.push(els[i]);
      return a;
    };
    
    var liga = function(that) {
      var re = new RegExp(keywords.join('|'),"gi");
      return that.replace(re, function(v) { 
        return icons[v.toLowerCase()];
      });
    };
    
    ready(function() {
      if (document.getElementsByClassName) {
        legacy(document.getElementsByClassName('icon'));
      } else {
        legacy(getElementsByClassName(document.body, 'icon'));
      }
    });
  
  }
  
  var set={'meltmedia':'\uF621','dribbble':'\uF660','twitter':'\uF611','github':'\uF670','mail':'\u2709'};

  if (typeof icons !== 'object' || typeof icons !== 'object') {
    var icons = set; 
    var keywords = [];
    for (var i in set) { keywords.push(i); };
  } else {
    for (var i in set) { icons[i] = set[i]; keywords.push(i); }
  };
  
};