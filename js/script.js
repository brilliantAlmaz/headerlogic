

document.addEventListener('DOMContentLoaded', () => {

   const tabs = document.querySelectorAll('.header__navlink.__haschildren');
   const menu = document.querySelector('.header__menu')
   const burger = document.querySelector('.header__burgerwrapper')

   const menuContents = menu.querySelectorAll('.header__menuitem ')

   tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
         e.preventDefault();
         tabs.forEach(t => { t.classList.remove('active') })
         tabMenuFunc(tab.href);
         tab.classList.add('active');
      })
   })
   burger.addEventListener('click', (e) => {
      e.preventDefault();
      tabMenuFunc(burger.href);
      burger.classList.toggle('active');
      if (burger.classList.contains('active')) {

      } else {
         menu.classList.remove('active')
         tabs.forEach(t => { t.classList.remove('active') });
         burger.classList.remove('active')
      }
   })

   document.addEventListener('click', (e) => {
      if (window.innerWidth > 980) {
         if (!e.target.classList.contains('__menuactivate')) {
            let a = e.target;

            let els = [];
            while (a) {
               if (a.className)
                  els.unshift(a.className);
               a = a.parentNode;
            }
            if (!findInArrayClassLists(els, 'header__menu')) {
               menu.classList.remove('active')
               tabs.forEach(t => { t.classList.remove('active') });
               burger.classList.remove('active')
            }
         }
         let a = e.target;

         let els = [];
         while (a) {
            if (a.className)
               els.unshift(a.className);
            a = a.parentNode;
         }
         if (findInArrayClassLists(els, '__desktop')) {
            document.querySelector('.header').parentNode.classList.remove('scrolled');
            document.querySelector('.upperheader').style.height = upperheaderHeight + 'px'
            document.querySelector('.header__nav').style.height = headerNav + 'px'
            document.querySelector('.upperheader').style.opacity = 1
            document.querySelector('.header__nav').style.opacity = 1
         }

      }

   })
   document.addEventListener('mouseover', (e) => {
      let a = e.target;

      let els = [];
      while (a) {
         if (a.className)
            els.unshift(a.className);
         a = a.parentNode;
      }
      if (findInArrayClassLists(els, '__desktop')) {
         headerShow();
      }

   })



   // headerbtns function

   document.querySelectorAll('.header__menubtn').forEach(btn => {
      btn.addEventListener('click', (e) => {
         if (window.innerWidth > 980) {
            e.preventDefault();
            const hrefString = btn.href.split('/');
            const href = hrefString[hrefString.length - 1]

            btn.parentNode.parentNode.querySelectorAll('.header__menucontent').forEach(mci => {
               mci.classList.remove('active');
            })
            btn.parentNode.parentNode.querySelector('.header__menucontent[id=' + href + "]").classList.add('active')

            btn.parentNode.querySelectorAll('.header__menubtn').forEach(btn => {
               btn.classList.remove('active')
            })
            document.querySelectorAll('.header__menucol._second').forEach(hms => { hms.classList.remove('active'); })
            btn.classList.add('active');
         } else {
            e.preventDefault();
            const hrefString = btn.href.split('/');
            const href = hrefString[hrefString.length - 1]
            console.log('YEEEEEEEEEEEEEES');
            console.log(href);

            btn.parentNode.parentNode.querySelectorAll('.header__menucol._pre').forEach(mci => {
               mci.classList.remove('active');
            })
            btn.parentNode.parentNode.querySelector('.header__menucol._pre#' + href).classList.add('active')

            btn.parentNode.querySelectorAll('.header__menubtn').forEach(btn => {
               btn.classList.remove('active')
            })
         }

      })
   })

   document.querySelectorAll('.header__menulink.__haschildren ').forEach(mnlink => {
      mnlink.addEventListener('click', (e) => {
         e.preventDefault();
         let hrefString = mnlink.href.split('/');
         hrefString = hrefString[hrefString.length - 1];
         hrefString = hrefString.split('-');
         console.log(hrefString);
         const parentHref = mnlink.parentNode.parentNode.parentNode.getAttribute('id');
         if (window.innerWidth > 980) {
            document.querySelectorAll('.header__menucontent#' + hrefString[0] + " .header__menucol._second").forEach(t => {
               t.classList.remove('active');

            })

            document.querySelector('.header__menuitem#' + parentHref + ' .header__menucontent#' + hrefString[0] + " .header__menucol._second#" + hrefString.join('-')).classList.add('active');
         }
      })
   })



   document.querySelectorAll('.header__menucol._pre .header__menulink.__haschildren ').forEach(mnlink => {
      console.log(mnlink);
      mnlink.addEventListener('click', (e) => {

         e.preventDefault();
         let hrefString = mnlink.href.split('/');
         hrefString = hrefString[hrefString.length - 1];
         hrefString = hrefString.split('-');

         document.querySelectorAll('.header__menuitemabs .header__menucol._second').forEach(t => {
            t.classList.remove('active');

         })
         document.querySelector('.header__menuitemabs#' + hrefString[0] + " .header__menucol._second#" + hrefString.join('-')).classList.add('active');

      })
   })
   document.querySelectorAll('.__mobile .header__menucol .header__menulink.__haschildren ').forEach(mnlink => {
      console.log(mnlink);
      mnlink.addEventListener('click', (e) => {

         e.preventDefault();
         let hrefString = mnlink.href.split('/');
         hrefString = hrefString[hrefString.length - 1];
         hrefString = hrefString.split('-');

         document.querySelectorAll('.header__menuitemabs .header__menucol._second').forEach(t => {
            t.classList.remove('active');

         })
         document.querySelector('.header__menuitemabs#' + hrefString[0] + " .header__menucol._second#" + hrefString.join('-')).classList.add('active');

      })
   })

   // fool protection


   document.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', (e => {
         if (a.classList.contains('__haschildren') || a.classList.contains('__menuactivate') || a.classList.contains('header__menubtn')) {
            e.preventDefault();
            console.log('i am not redirecting!');
         } else {
            e.preventDefault();
            alert("На продакшене эта ссылка вела бы на url: " + a.href)
         }
      }))
   })




   // mobile func


   const burgerMob = document.querySelector('.header__burgermenu');
   const menuMob = document.querySelector('.__mobile .header__menu');
   const body = document.querySelector('html');
   burgerMob.addEventListener('click', (e) => {
      burgerMob.classList.toggle('active');
      menuMob.classList.toggle('active');
      if (menuMob.classList.contains('active')) {
         menuMob.style.height = menuMob.style.maxHeight
         body.classList.add('lock');
      } else {
         menuMob.style.height = 0
         body.classList.remove('lock');


      }
   })



   document.querySelectorAll('.header__menutitle svg').forEach(s => {
      s.addEventListener('click', () => {
         if (s.parentNode.parentNode.classList.contains('_pre') || s.parentNode.parentNode.classList.contains('_second')) {
            s.parentNode.parentNode.classList.remove('active');
         } else {
            s.parentNode.parentNode.parentNode.classList.remove('active')
            document.querySelector('.header__menu-inner').classList.remove('active');
         }

      })
   })

   function mobileMenuInit() {
      menuMob.classList.remove('active');
      burgerMob.classList.remove('active');
      body.classList.remove('lock')

      menu.classList.remove('active')
      burger.classList.remove('active')
      if (window.innerWidth <= 980) {
         // "calc(100% - " + + + " - " + +document.querySelector('.__mobile .header').clientHeight + "px)"
         menuMob.style.height = "auto";
         menuMob.style.maxHeight = `calc(100vh - ${document.querySelector('.__mobile .upperheader__body').clientHeight}px - ${document.querySelector('.__mobile .header').clientHeight}px)`;
         menuMob.style.height = "0";
         document.querySelectorAll('.header__menuitemabs').forEach(i => {
            i.style.height = `calc(100vh - ${document.querySelector('.__mobile .upperheader__body').clientHeight}px - ${document.querySelector('.__mobile .header').clientHeight}px - 40px)`;
         })
         document.querySelector('.header__menu-inner').style.height = `calc(100vh - ${document.querySelector('.__mobile .upperheader__body').clientHeight}px - ${document.querySelector('.__mobile .header').clientHeight}px - 40px)`;
         document.querySelectorAll('.header__menucol ').forEach(i => {
            i.style.height = `calc(100vh - ${document.querySelector('.__mobile .upperheader__body').clientHeight}px - ${document.querySelector('.__mobile .header').clientHeight}px - 40px)`;
         })
      } else {
         // "calc(100% - " + + + " - " + +document.querySelector('.__mobile .header').clientHeight + "px)"

         document.querySelectorAll('.header__menuitemabs').forEach(i => {
            i.style.height = `max-content`;
         })
         document.querySelectorAll('.header__menucol ').forEach(i => {
            i.style.height = 'max-content'
         })
      }
   }

   mobileMenuInit();
   fixedHeaderInit();

   window.addEventListener('resize', () => {
      mobileMenuInit();
      fixedHeaderInit()
   })



   const tabsMobile = document.querySelectorAll('.header__navlink.__haschildren');
   const menuMobInner = document.querySelector('.header__menu-inner');
   const menuContentsMob = document.querySelectorAll('.header__menuitemabs');
   tabsMobile.forEach(tab => {
      tab.addEventListener('click', (e) => {
         e.preventDefault();
         tabs.forEach(t => { t.classList.remove('active') })
         mobileMenuFunc(tab.href);
         tab.classList.add('active');
      })
   })
   function mobileMenuFunc(href) {
      console.log(href);
      menuMobInner.classList.add('active')

      const hrefString = href.split('/');
      const id = hrefString[hrefString.length - 1];
      console.log(id);
      menuContentsMob.forEach(mc => {
         if (mc.getAttribute('id') == id) {
            mc.classList.add('active');
         } else {
            mc.classList.remove('active');
         }
      })

   }


   function findInArrayClassLists(array, className) {
      let classFound = false;
      array.forEach(item => {
         if (item.includes(className)) {
            classFound = true;
         }
      })
      return classFound;
   }

   function tabMenuFunc(href) {
      menu.classList.add('active')

      const hrefString = href.split('/');
      const id = hrefString[hrefString.length - 1];
      menuContents.forEach(mc => {
         if (mc.getAttribute('id') == id) {
            mc.classList.add('active');
         } else {
            mc.classList.remove('active');
         }
      })


   }

   function fixedHeaderInit() {
      console.log();
      if (window.innerWidth <= 980) {
         document.querySelector('main#content').style.paddingTop = document.querySelector('.__mobile').clientHeight + "px";
      } else {
         document.querySelector('main#content').style.paddingTop = document.querySelector('.__desktop').clientHeight + "px";

      }
   }





   //scrolled

   const upperheaderHeight = document.querySelector('.upperheader').clientHeight
   const headerNav = document.querySelector('.header__nav').clientHeight
   console.log(upperheaderHeight);
   console.log(headerNav);

   let previousPosition = window.pageYOffset || document.documentElement.scrollTop;

   window.addEventListener('scroll', (e) => {
      const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (window.scrollY == 0) {
         headerShow();

      } else {

         headerHide();
      }


      if (previousPosition > currentPosition) {
         headerShow()
      }
      previousPosition = currentPosition;
   })
   function headerShow() {
      document.querySelector('.header').parentNode.classList.remove('scrolled');
      document.querySelector('.upperheader').style.height = upperheaderHeight + 'px'
      document.querySelector('.header__nav').style.height = headerNav + 'px'
      document.querySelector('.upperheader').style.opacity = 1
      document.querySelector('.header__nav').style.opacity = 1
      document.querySelector('.header__body').style.alignItems = "start"
   }
   function headerHide() {
      document.querySelector('.header').parentNode.classList.add('scrolled');
      document.querySelector('.upperheader').style.height = 0 + 'px'
      document.querySelector('.header__nav').style.height = 0 + 'px'
      document.querySelector('.upperheader').style.opacity = 0
      document.querySelector('.header__nav').style.opacity = 0
      document.querySelector('.header__body').style.alignItems = "center"

   }


})


