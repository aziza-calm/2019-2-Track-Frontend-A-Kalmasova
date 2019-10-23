import {MessageCloud} from './MessageCloud.js'

const template = document.createElement('template')
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
        form-input {
            width: 95%;
        }

        input[type=submit] {
            visibility: collapse;
        }
    </style>
    <form>
        <div class="result"></div>
        <form-input name="message-text" placeholder="Nachricht"></form-input>
    </form>
`

class MessageForm extends HTMLElement {
    constructor () {
        super()
        this._shadowRoot = this.attachShadow({ mode: 'open' })
        this._shadowRoot.appendChild(template.content.cloneNode(true))
        this.$form = this._shadowRoot.querySelector('form')
        this.$input = this._shadowRoot.querySelector('form-input')
        this.$message = this._shadowRoot.querySelector('.result')

        this.$form.addEventListener('submit', this._onSubmit.bind(this))
        this.$form.addEventListener('keypress', this._onKeyPress.bind(this))
    }

    _onSubmit (event) {
        event.preventDefault()
        let messageCloud = new MessageCloud();
        messageCloud.text = this.$input.value;
        this.$message.appendChild(messageCloud.$cloud);
        this.$input.value= '';
    }

    _onKeyPress (event) {
        if (event.keyCode == 13) {
            this.$form.dispatchEvent(new Event('submit'))
        }
    }
}

customElements.define('message-form', MessageForm)
