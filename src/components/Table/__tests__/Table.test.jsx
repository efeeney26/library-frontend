import React from 'react'
import Table from '../Table'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import TableHead from '../TableHead/TableHead'
import TableRow from '../TableRow/TableRow'

const props = {
  tableHeaders: ['testHeader1', 'testHeader2'],
  tableData: [
    ['testData1', 'testData2'],
    ['testData3', 'testData4']
  ]
}

test('Table snapshot', () => {
  const component = renderer.create(<Table {...props}/>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

describe('Table', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <Table
        {...props}
      />
    )
  })

  it('components rendered: TableHead, TableRow', () => {
    expect(wrapper.find(TableHead).length).toBe(1)
    expect(wrapper.find(TableRow).length).toBe(1)
  })
})
