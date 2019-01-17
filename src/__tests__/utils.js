import { alphaSort } from '../utils'

describe('Testing all the util functions', () => {
    it('Sorting arrays by the title - alphabetically', () => {
        const data1 = [{ title: 'A' }, { title: 'C'},  { title: 'B'}]
        const data1Answer =  [{ title: 'A' }, { title: 'B'},  { title: 'C'}]
        expect(data1.sort(alphaSort)).toEqual(data1Answer)
        
        const data3 = [{ title: 'abcc' }, { title: 'abcb'},  { title: 'abca'}]
        const data3Answer =  [{ title: 'abca' }, { title: 'abcb'},  { title: 'abcc'}]
        expect(data3.sort(alphaSort)).toEqual(data3Answer)

        // Works with all letter casing
        const data2 = [{ title: 'AAb' }, { title: 'Aaa'},  { title: 'aAC'}]
        const data2Answer =  [{ title: 'Aaa' }, { title: 'AAb'},  { title: 'aAC'}]
        expect(data2.sort(alphaSort)).toEqual(data2Answer)
    })
})