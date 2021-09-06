import { 
  _onChangeAnnualIncome, 
  _onChangeTaxRelief,  
  _onSubmit
} from './form-pph-21.component';

describe('FormPPH21Page test', () => {
  describe('_onChangeAnnualIncome', () => {
    it('should set Data', () => {
      const event = {
        target: {
          value: '1000'
        }
      };
      const setData = jest.fn();

      _onChangeAnnualIncome(event, setData);

      expect(setData).toBeCalled();
    })
  });

  describe('_onChangeTaxRelief', () => {
    it('should set Data', () => {
      const event = {
        target: {
          value: '1000'
        }
      };
      const setData = jest.fn();

      _onChangeTaxRelief(event, setData);

      expect(setData).toBeCalled();
    })
  });

  describe('_onSubmit', () => {
    it('should set Data', () => {
      const event = {
        target: {
          value: '1000'
        },
        preventDefault: jest.fn()
      };
      const data = {
        annualIncome: '60000000',
        taxRelief: 'TK0'
      };
      const setData = jest.fn();

      _onSubmit(event, data, setData);

      expect(event.preventDefault).toBeCalled();
      expect(setData).toBeCalled();
    });

    it('should not set Data', () => {
      const event = {
        target: {
          value: '1000'
        },
        preventDefault: jest.fn()
      };
      const data = {
        annualIncome: '',
        taxRelief: ''
      };
      const setData = jest.fn();

      _onSubmit(event, data, setData);

      expect(event.preventDefault).toBeCalled();
      expect(setData).not.toBeCalled();
    });
  });
});