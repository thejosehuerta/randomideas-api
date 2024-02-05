class Modal {
    constructor() {
        this._modal = document.querySelector('#modal');
        this._modalBtn = document.querySelector('#modal-btn');
        this.addEventListeners();
    }

    addEventListeners() {
        // Use bind method to make sure that the this keyword is referring to the class.
        this._modalBtn.addEventListener('click', this.open.bind(this));
        window.addEventListener('click', this.outsideClick.bind(this));
    }

    open() {
        this._modal.style.display = 'block';
    }

    close() {
        this._modal.style.display = 'none';
    }

    outsideClick(e) {
        if (e.target === this._modal) {
            this.close();
        }
    }
}
  
export default Modal;