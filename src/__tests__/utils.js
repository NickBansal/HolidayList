import { alphaSort } from '../utils'

describe('Testing all the util functions', () => {
    it('Sorting arrays by the title - alphabetically', () => {
        const data1 = [{ title: 'Bravo' }, { title: 'Charlie'},  { title: 'Alpha'}]
        const data1Answer =  [{ title: 'Alpha' }, { title: 'Bravo'},  { title: 'Charlie'}]
        expect(data1.sort(alphaSort)).toEqual(data1Answer)
    })
})