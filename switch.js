class HTMLSwitch extends HTMLElement {
    get value() {
        return this.getAttribute('value');
    }
    set value( val ) {
        this.setAttribute('value', val == true);
    }
    constructor() {
        super();
        this.addEventListener('click', function( ev ) {
            const val = ev.target.getAttribute( 'value' ) != 'true';
            this.setAttribute('value', val);
        });
    }
    connectedCallback() {
        const defaultValue = this.getAttribute('value');
        if (!defaultValue) {
            this.setAttribute('value', false);
        }
    }
}
window.customElements.define('app-switch', HTMLSwitch);
document.addEventListener('DOMContentLoaded',function() {
    let style = document.createElement('style');
    style.innerHTML = `app-switch {
    --value-false-color: #939393;
    --value-true-color: #3498DB;
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
    width: 4.8ex;
    height: 2.4ex;
    margin: .3ex;
    border: solid .4ex var(--value-false-color);
    border-radius: 99999px;
    transition: border-color .2s ease-in-out
}

app-switch:before {
    content: '';
    display: inline-block;
    position: relative;
    left: .2ex;
    top: .2ex;
    width: 1.2ex;
    height: 1.2ex;
    background-color: var(--value-false-color);
    border-radius: 50%;
    transition: all .2s ease-in-out
}

app-switch[value='true'] {
    border-color: var(--value-true-color)
}

app-switch[value='true']:before {
    background-color: var(--value-true-color);
    left: calc(100% - 1.4ex)
}`;
    document.body.appendChild(style);
});
