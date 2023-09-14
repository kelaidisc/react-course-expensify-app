import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment';

// export const sortByDate = () => ({
//     type: 'SORT_BY_DATE'
// });

// export const sortByAmount = () => ({
//     type: 'SORT_BY_AMOUNT'
// });

test('Should generate set text filter action object with text', () => {
    var action = setTextFilter('abcd');

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'abcd'
    });
});

test('Should generate set text filter action object with default', () => {
    var action = setTextFilter();
    
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('Should generate sort by date action object', () => {
    var action = sortByDate();

    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('Should generate sort by amount action object', () => {
    var action = sortByAmount();

    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('Should generate set start date action object', () => {
    var action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    });
});

test('Should generate set end date action object', () => {
    var action = setEndDate(moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    });
});