import React from 'react';
import axiosMock from 'axios'
import { unmountComponentAtNode } from 'react-dom'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import SearchBooks from '..';
import { searchBooks } from '../../../sources/search'
import { act } from 'react-dom/test-utils';

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});
afterEach(() => {
    // cleaning up the mess left behind the previous test
    axiosMock.reset();
});


it('search button responds and produces search results', async () => {

    axiosMock.get.mockResolvedValueOnce({
        data: {
            summaries: [{
                summary: 'The Book in Three Sentences: Practicing meditation and mindfulness will make you at least 10 percent happier. Being mindful doesn\u2019t change the problems in your life, but mindfulness does help you respond to your problems rather than react to them. Mindfulness helps you realize that striving for success is fine as long as you accept that the outcome is outside your control.',
                title: 'Anything You Want',
                author: 'Dan Harris',
                id: 0
            }]
        }

    })

    act(() => render(<SearchBooks />),container)
    fireEvent.click(document.querySelector('[data-testid=search-button]'));
    const results = await waitForElement(() => {
         return document.querySelector('[data-testid=results]')
    })
    expect(axiosMock.get).toHaveBeenCalledTimes(1)
    expect(results).toBeInTheDocument()


})