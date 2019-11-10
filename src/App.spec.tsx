import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, act } from '@testing-library/react'
import App from './App'

describe('Movie DB App', () => {
  beforeEach(() => {
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
  afterEach(() => delete window.fetch)
  test('should return the movies that user searched for', async () => {
    const { getByTestId, queryByTestId } = render(<App />)

    await act(() => {
      fireEvent.change(getByTestId('searchMovie'), {
        target: { value: 'Mat' }
      })
    })

    const movie = await queryByTestId('movie-603') //add the ID of the first Matrix movie

    expect(movie).toBeInTheDocument()
  })

  test('should not return any movie', async () => {
    const { getByTestId, queryByTestId } = render(<App />)

    act(() => {
      fireEvent.change(getByTestId('searchMovie'), {
        target: { value: 'Ma' }
      })
    })

    expect(await queryByTestId('movie-603')).toBe(null)
  })
})
