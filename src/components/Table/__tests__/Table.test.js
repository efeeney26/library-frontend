import React from 'react'
import Table from '../Table'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import TableHead from '../TableHead'
import TableRow from '../TableRow'

test('Table snapshot', () => {
  const component = renderer.create(<Table />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('Table', () => {
  const wrapper = shallow(<Table />)
  expect(wrapper.find(TableHead).length).toBe(1)
  expect(wrapper.find(TableRow).length).toBe(1)
})
