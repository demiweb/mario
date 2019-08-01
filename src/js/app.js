import { setTouch } from './components/setHTMLClassNames';
import sayHello from './lib/sayHello';
import setLazy from './components/setLazy';

$(function() {
  sayHello();
  setTouch();

  setLazy();
});
