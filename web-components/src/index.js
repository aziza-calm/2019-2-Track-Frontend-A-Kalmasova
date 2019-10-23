import './index.css';

import './components/FormInput';
import './components/MessageForm';
import './components/MessageCloud';
import './components/Header';

window.onscroll = function() {sticky_header()};
var header = document.getElementById("header1");
var sticky = header.offsetTop;
function sticky_header() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

