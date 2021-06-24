import React, { useRef } from 'react';

import '../../../../css/Teas/TeaItemForm.css';

const TeaItemForm = (props) => {
    const amountInputRef = useRef();

    const onSubmithandler = (event) => {
        event.preventDefault();

        const enteredValue = +amountInputRef.current.value.trim();

        props.onAddToCart(enteredValue);
    }

    return (
        <form className="tea-item-form" onSubmit={onSubmithandler}>
            <div className="form-quantity">
                <label htmlFor="quantity">Quantity</label>
                <input ref={amountInputRef} id="quantity" type="number" defaultValue="1" />
            </div>
            <div className="form-button">
                <button>Add to Cart</button>
            </div>
        </form>
    );
};

export default TeaItemForm;
