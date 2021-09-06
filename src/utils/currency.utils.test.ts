import { formatRupiah } from './currency.utils';

describe('formatRupiah', () => {
  it('should format number to rupiah currency', () => {
    const param = '50000000';
    const result = formatRupiah(param);
    
    expect(result).toEqual('Rp. 50.000.000')
  });
  it('should not format number to rupiah currency if special character exist', () => {
    const param = '50000000.00';
    const result = formatRupiah(param);

    expect(result).toEqual('')
  });
});