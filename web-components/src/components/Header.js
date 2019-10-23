const template = document.createElement('template')
template.innerHTML = `
    <style>
    .header {
        padding: 10px;
        background: #9273C2;
        color: white;
        font-size: 9px;
      }
    
    .header img{
        float: left;
        max-width: 60px;
        width: 100%;
        margin-right: 20px;
        border-radius: 70%;
      }
    
    .sticky {
        position: fixed;
        top: 0;
        width: 100%
      }
    </style>
    <script>
    window.onscroll = function() {sticky_header()};
    var header = document.getElementById("header");
    var sticky = header.offsetTop;
    function sticky_header() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
    </script>
    <div class="header" id="header">
        <img src="../img/2ecc42e8dae6fd93e98f97ded29d5b33.jpg" alt="Avatar" id='header_ava'>
        <h1 id='chat_name'></h1>
    </div>
`;

class HeaderChat extends HTMLElement {
    constructor () {
        super ()
        this._shadowRoot = this.attachShadow({ mode: 'open' })
        this._shadowRoot.appendChild(template.content.cloneNode(true))
        this._shadowRoot.getElementById('chat_name').innerHTML = "Martin Komitsky";
        window.onscroll = function() {sticky_header()};
        this.$header = this._shadowRoot.getElementById("header");
        this.$sticky = this.$header.offsetTop;
        this.$header.dispatchEvent(new Event('scroll'))
        this.$header.addEventListener('scroll', this.sticky_header.bind(this))
    }
    
    sticky_header() {
        if (window.pageYOffset > this.$sticky) {
            this.$header.classList.add("sticky");
        } else {
            this.$header.classList.remove("sticky");
        }
    }
}

customElements.define('header-chat', HeaderChat)