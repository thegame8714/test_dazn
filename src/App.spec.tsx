import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, wait } from '@testing-library/react'
import App from './App'

describe('Movie DB App', () => {
  beforeAll(() => {
    window.fetch = jest.fn().mockImplementation(url => {
      if (url.indexOf('/search/movie') !== -1) {
        return Promise.resolve({
          json: () =>
            Promise.resolve({
              results: [
                {
                  id: 603,
                  original_title: 'The Matrix'
                }
              ]
            })
        })
      }

      return Promise.resolve({
        json: () => {
          Promise.resolve({ results: [] })
        }
      })
    })
  })
  afterAll(() => delete window.fetch)
  test('should return the movies that user searched for', async () => {
    const { getByTestId, findByText } = render(<App />)
    fireEvent.change(getByTestId('searchMovie'), {
      target: { value: 'Mat' }
    })
    fireEvent.click(getByTestId('getMovie'))

    const movie = await findByText('The Matrix')

    expect(movie).toBeInTheDocument()
  })
})
