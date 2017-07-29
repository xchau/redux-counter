'use strict';

import { expect } from 'chai';
import { INCREMENT, DECREMENT } from '../state/constants/constants';
import { counter } from '../state/reducers/counter';

describe('# Test Redux reducers', () => {
  it('should increment the counter by 1', () => {
    expect(
      counter(0, { type: INCREMENT })
    ).to.equal(1);

    expect(
      counter(1, { type: INCREMENT })
    ).to.equal(2);
  });

  it('should decrement the counter by 1', () => {
    expect(
      counter(2, { type: DECREMENT })
    ).to.equal(1);

    expect(
      counter(1, { type: DECREMENT })
    ).to.equal(0);
  });

  it('should handle undefined action type with default', () => {
    expect(
      counter(2, { type: 'GO_CRAZY' })
    ).to.equal(2);

    expect(
      counter(-1, { type: 'BAD_ACTION' })
    ).to.equal(-1);
  });
});
