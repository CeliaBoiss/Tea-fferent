import React from 'react';

import '../../../../css/Teas/TeaItemForm.css';

const TeaItemForm = () => {
    const onSubmithandler = (event) => {
        event.preventDefault();
    }

    return (
        <form className="tea-item-form" onSubmit={onSubmithandler}>
            <div className="form-quantity">
                <label htmlFor="quantity">Quantity</label>
                <input id="quantity" type="number" defaultValue="1" />
            </div>
            <div className="form-button">
                <button>Add to Cart</button>
            </div>
        </form>
    );
};

export default TeaItemForm;
