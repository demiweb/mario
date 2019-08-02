import { setTouch } from './components/setHTMLClassNames';
import sayHello from './lib/sayHello';
import setLazy from './components/setLazy';
import setSliders from './components/setSliders';
import setInputMask from './components/setInputMask';
import setSelects from './components/select/setSelects';
import toggleMenu from './components/toggleMenu';

$(function() {
  sayHello();
  setTouch();
  setLazy();
  setSliders();
  setInputMask();
  setSelects();
  toggleMenu();
});
