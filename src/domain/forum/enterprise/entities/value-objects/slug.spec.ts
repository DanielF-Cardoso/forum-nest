import { Slug } from './slug'

test('it should be able to create a new slug from a string', () => {
  const slug = Slug.createFromText('Any string')

  expect(slug.value).toEqual('any-string')
})
