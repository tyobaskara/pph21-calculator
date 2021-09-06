import React, { useState } from 'react'

// utils
import { formatRupiah, getAnnualTaxIncome } from '../../utils';

// styles
import './form-pph-21.styles.scss';

// types
import { 
  FormEvent,
  SelectEvent,
  SetState,
  State,
  TextEvent
} from './form-pph-21.types';

export const _onChangeAnnualIncome = (
    event: TextEvent,
    setData: SetState
  ): void => {
    const { value } = event.target;

    setData(prevState => ({
      ...prevState,
      annualIncome: value
    }));
}

export const _onChangeTaxRelief = (
    event: SelectEvent,
    setData: SetState
  ): void => {
    const { value } = event.target;

    setData(prevState => ({
      ...prevState,
      taxRelief: value
    }));
}

export const _onSubmit = (
  event: FormEvent,
  data: State,
  setData: SetState
  ) => {
    event.preventDefault();
    const { annualIncome, taxRelief } = data;

    if (annualIncome && taxRelief) {
      const { totalTaxIncome, narratives } = getAnnualTaxIncome(annualIncome, taxRelief);
  
      setData(prevState => ({
        ...prevState,
        annualTaxIncome: totalTaxIncome ? totalTaxIncome.toString() : '',
        narratives: narratives ? narratives : [''],
        showResult: true
      }));
    }
}

const FormPPH21Page: React.FC = () => {
  const [data, setData] = useState({
    annualIncome: '',
    taxRelief: 'TK0',
    annualTaxIncome: '',
    narratives: [''],
    showResult: false
  });

  return (
    <div>
      <form 
        onSubmit={event => _onSubmit(event, data, setData)}
        className='form-pph21'
      >
        <h1>PPH-21 Calculator</h1>

        <div className="form-group">
          <label htmlFor="annualIncome">Annual Income</label>
          <input 
            type='text' 
            name='annualIncome' 
            id='annualIncome' 
            onChange={event => _onChangeAnnualIncome(event, setData)}
            value={data.annualIncome}
          />
        </div>  

        <div className="form-group">
          <label htmlFor="taxRelief">Person Profile:</label>
          <select 
            id="taxRelief" 
            name="taxRelief"
            dir="rtl"
            onChange={event => _onChangeTaxRelief(event, setData)}
            value={data.taxRelief}
          >
            <option value="TK0">TK0 - Single</option>
            <option value="K0">K0 - Married with no dependant</option>
            <option value="K1">K1 - Married with 1 dependant</option>
            <option value="K2">K2 - Married with 2 dependants</option>
            <option value="K3">K3 - Married with 3 dependants</option>
          </select>
        </div>

        <div>
          <button type='submit'>Calculate</button>
        </div>
      </form>
      
      <div className="form-pph21-result">
        {data.showResult && (
          <div className="pph21-result">
            {data.narratives[0] && (
              <p><b>Annual Taxable Income</b> = {data.narratives[0]}</p>
            )}
            {data.narratives[0] && (
              <p><b>Annual tax income Description</b> = {data.narratives[1]}</p>
            )}
            {data.annualTaxIncome ? (
              <p><b>Annual tax income</b> = {formatRupiah(data.annualTaxIncome)}</p>
            ) : (
              <p><b>Annual tax income</b> = {formatRupiah('0')}</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default FormPPH21Page
