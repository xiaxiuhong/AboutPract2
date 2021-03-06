(function (w, d) {
  var sub = d.getElementById('meizu-header-sub'),
      product = d.getElementById('meizu-header-link-product'),
      addHandle = function (element, type, handler) {
        if (element.addEventListener) {
          element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
          element.attachEvent('on' + type, handler);
        } else {
          element['on' + type] = handler;
        }
      },
      getEvent = function (event) {
        return event ? event : w.event;
      },
      getTarget = function (event) {
        return event.target || event.srcElement;
      },
      setOpacity = function (element, num) {
        element.parentNode.style.opacity = num;
        element.parentNode.style.zoom = 1;
        element.parentNode.style.filter = 'alpha(opacity='+ num*100 +')';
      },
      handler = function (event) {
        event = getEvent(event);
        var target = getTarget(event);
        if (target.className === 'a-mx4') {
          setOpacity(arr['a-mx4'], 1);
          setOpacity(arr['a-mx3'], 0.5);
          setOpacity(arr['a-mx2'], 0.5);
        } else if (target.className === 'a-mx3') {
          setOpacity(arr['a-mx4'], 0.5);
          setOpacity(arr['a-mx3'], 1);
          setOpacity(arr['a-mx2'], 0.5);
        } else if (target.className === 'a-mx2') {
          setOpacity(arr['a-mx4'], 0.5);
          setOpacity(arr['a-mx3'], 0.5);
          setOpacity(arr['a-mx2'], 1);
        }
      },
      clear = function () {
        setOpacity(arr['a-mx4'], 1);
        setOpacity(arr['a-mx3'], 1);
        setOpacity(arr['a-mx2'], 1);
      },
      a = sub.getElementsByTagName('a'),
      arr = [];
  for (var i = a.length - 1; i >= 0; i--) {
    arr[a[i].className] = a[i];
    addHandle(a[i].parentNode, 'mouseover', handler);
  };
  addHandle(product, 'mouseleave', clear);
})(window, document);
$(function () {
  var product = $('#meizu-header-link-product'),
      subnav = $('#meizu-header-sub'),
      nav = $('nav');
      show = function () {
        product.addClass('hover');
        subnav.stop().slideDown();
        
      },
      hide = function () {
        product.removeClass('hover');
        subnav.stop().slideUp(function () {
          
        });
      };
  product.mouseover(show);
  subnav.mouseover(show);
  product.mouseout(hide);
  subnav.mouseout(hide);
});