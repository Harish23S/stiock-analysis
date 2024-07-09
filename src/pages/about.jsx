import React, { useState } from 'react';
import Inputs from '../components/inputs';
import axios from 'axios';

function InputLogger() {
  const [inputValues, setInputValues] = useState(['']);
  const [inputPrice, setInputPrice] = useState(['']);
  const [issubmit, setLogin] = useState(true);

  const sendData = () => {
    inputValues.forEach((Element, index) => {
      axios.post('http://localhost:3000/api/add', { name: Element, inputprice: inputPrice[index] })
        .then(response => {
          console.log(response.data.message);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    })
    setLogin(false);
  };


  const handleChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const handleChangePrice = (index, value) => {
    const newInputPrice = [...inputPrice];
    newInputPrice[index] = value;
    setInputPrice(newInputPrice);
  };

  const handleButtonClick = () => {
    setInputValues([...inputValues, '']);
  };

  const handleRemoveInput = (index) => {
    const newInputValues = [...inputValues];
    const newInputPrice = [...inputPrice];
    newInputValues.splice(index, 1);
    newInputPrice.splice(index, 1);
    setInputValues(newInputValues);
    setInputPrice(newInputPrice);
  };

  return (
    <div>
      {issubmit ? (
        <div>
          {inputValues.map(({ value, price }, index) => (
            <div key={index}>
              <Inputs
                type="text"
                value={value}
                onchange={(e) => handleChange(index, e.target.value)}
                placeholder="Enter a value..."
              />
              <Inputs
                type="number"
                value={price}
                onchange={(e) => handleChangePrice(index, e.target.value)}
                placeholder="Enter a value..."
              />
              <button onClick={() => handleRemoveInput(index)}>Remove</button>
            </div>
          ))
          }
          < button onClick={handleButtonClick} > Add Input</button >
          <button onClick={sendData}>Submit</button>
        </div >
      ) : (
        <h3>Your DATA has been submitted <a href="/">Click here to portfolio</a></h3>
      )
      }
    </div>
  );
}

export default InputLogger;
