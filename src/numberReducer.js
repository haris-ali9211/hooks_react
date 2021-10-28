function reducer(state, action)
{
    switch (action.type)
    {
        case 'increment':
            return state + action.value;
        case 'decrement':
            return state - action.value;
        default:
            throw new Error();
    }
}

export default reducer;
