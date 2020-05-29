import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import TableRow from '../TableRow/TableRow'

const props = {
  data: [
    ['testData1', 'testData2'],
    ['testData3', 'testData4']
  ]
}

test('TableRow snapshot', () => {
  const component = renderer.create(<TableRow {...props}/>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

describe('TableRow', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <TableRow
        {...props}
      />
    )
  })

  it('TableHead', () => {
    expect(wrapper.find('td').length).toBe(4)
  })
})
