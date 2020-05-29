import React from 'react'
import TableHead from '../TableHead/TableHead'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

const props = {
  data: ['testHeader1', 'testHeader2']
}

test('TableHead snapshot', () => {
  const component = renderer.create(<TableHead {...props}/>)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

describe('TableHead', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <TableHead {...props} />
    )
  })
  it('elements rendered: th', () => {
    expect(wrapper.find('th').length).toBe(2)
  })
})
