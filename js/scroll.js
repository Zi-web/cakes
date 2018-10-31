var isScrolling = false;
 
    window.addEventListener("scroll", throttleScroll, false);
 
    function throttleScroll(e) {
      if (isScrolling == false) {
        window.requestAnimationFrame(function() {
          scrolling(e);
          isScrolling = false;
        });
      }
      isScrolling = true;
    }
 
    document.addEventListener("DOMContentLoaded", scrolling, false);
 
    var listItems = document.querySelectorAll(".our-cake__wrapper h2, .about__text h2, .about__text h3, .contacts__wrapper h2, .order__wrapper h2, .reviews__title, .advantage__title");
    var firstBox = document.querySelector("#firstBox");
    var secondBox = document.querySelector("#secondBox");
 
    function scrolling(e) {
 
        for (var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];
 
        if (isPartiallyVisible(listItem)) {
          listItem.classList.add("active");
        } else {
          listItem.classList.remove("active");
        }
      }
    }
 
    function isPartiallyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
 
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
      var height = elementBoundary.height;
 
      return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }
 
    function isFullyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
 
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
 
      return ((top >= 0) && (bottom <= window.innerHeight));
    }