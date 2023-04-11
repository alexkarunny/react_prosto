import {reducer, StateType, TOGGLE_COLLAPSED} from './Reducer';

test('test accordion reducer', () => {

    const state: StateType = {
        toggle: false
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    expect(newState.toggle).toBe(true)
})