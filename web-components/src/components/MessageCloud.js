const template = document.createElement('template');
template.innerHTML = `
<style>
    .container {
        border: 2px solid #dedede;
        background-color: #f1f1f1;
        border-radius: 5px;
        padding: 10px;
        margin: 10px 0;
    }
  
    .darker {
        border-color: #ccc;
        background-color: #ddd;
    }
  
    .container::after {
        content: "";
        clear: both;
        display: table;
    }
  
    .container img {
        float: left;
        max-width: 60px;
        width: 100%;
        margin-right: 20px;
        border-radius: 50%;
    }
  
    .container img.right {
        float: right;
        margin-left: 20px;
        margin-right:0;
    }
  
  .time-right {
    float: right;
    color: #aaa;
  }
  
  .time-left {
    float: left;
    color: #999;
  }
</style>
<div class="container darker" id='cloud'>
    <img src="../img/помогите-найти-арт-красивые-картинки-тату-1427884.jpeg" alt="Avatar" class="right">
    <p id="text"></p>
    <span class="time-left" id="date"></span>
</div>
`;

export class MessageCloud extends HTMLElement {
    constructor () {
        super()
        this._shadowRoot = this.attachShadow({ mode: 'open' })
        this._shadowRoot.appendChild(template.content.cloneNode(true))
        this.$cloud = this._shadowRoot.getElementById('cloud');
        this.$text = this._shadowRoot.getElementById('text');
    }

    get cloud () {
        return this._shadowRoot;
    }

    get text () {
        return this.$text.innerHTML;
    }

    set text(string) {
        this.$text.innerHTML = string;
    }
}

customElements.define('message-cloud', MessageCloud);