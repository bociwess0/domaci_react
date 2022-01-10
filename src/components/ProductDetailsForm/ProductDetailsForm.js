import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {findProduct} from '../ProductDetails/ProductDetails';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import data from '../../data';

export default function ProductDetailsForm(props) {
    const{id} = useParams();

    const radioChecked = () =>{
        const radioButtons = document.getElementsByName('flexRadioDefault');
        for(let i = 0 ; i < radioButtons.length; i++)  {
            if(radioButtons[i].checked) {
                return radioButtons[i].value;
            }
        }

    }

    const validate = () => {
        let value  = document.querySelector('#amount').value;
        let color = document.getElementById('color').value;
        if(value.match(/^[1-9][0-9]*$/) && radioChecked()) {
            alert('Data entered successfully!');
            const product = data.findProduct(id);
            data.cart.push({
                id: data.idCart++,
                brand: product.brand,
                model: product.model,
                price: product.price,
                ram: radioChecked(),
                amount: value,
                color: color,
                total: value * product.price
            });
            console.log(data.cart);
        }
        else {
            alert('Incorrect entry!')
        }
    }

    return (
        <div className='form'>
            <div className='color'>
                <label>Choose color: </label>
                <select class="form-select" aria-label="Default select example" id='color'>
                    <option selected value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Red">Red</option>
                </select>
            </div>
            <br></br>
            <div className='ram'>
                <p>Choose RAM:</p>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" value="2GB" id="flexRadioDefault1"/>
                    <label class="form-check-label" htmlFor="flexRadioDefault1">
                    2GB
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" value="4GB" id="flexRadioDefault2" />
                    <label class="form-check-label" htmlFor="flexRadioDefault2">
                        4GB
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" value="8GB" id="flexRadioDefault2" />
                    <label class="form-check-label" htmlFor="flexRadioDefault2">
                        8GB
                    </label>
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Amount:</label>
                    <input type="text" class="form-control" aria-describedby="emailHelp" id='amount'/>
                </div>
            </div>
            <div className='button'>
                <button type="button" class="btn btn-primary" onClick={validate}>Add to cart</button>
            </div>         
        </div>
    )
}
