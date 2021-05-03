import {
    WIDTH,
    MENU_CLOSE,
    COLLAPSED,
    SET_DEMO,
    OPEN_TYPE,
    OPEN_SORT,
    INCREMENT,
    DECREMENT,
    PAGE_TYPE,
    SHOW_DETAIL,
    COURSE_DETAIL,
    INCREMENT_COURSE,
    DECREMENT_COURSE
} from './action-type';

export const getWidth = (widthData) => ({type: WIDTH, data:widthData})
export const menuClose = (data) => ({type: MENU_CLOSE, data})
export const collapsed = (data) => ({type: COLLAPSED,data})
export const setDemo = (data) =>({type:SET_DEMO,data})
export const openType = (data) =>({type:OPEN_TYPE,data})
export const openSort = (data) =>({type:OPEN_SORT,data})
export const increment = (data) =>({type:INCREMENT,data})
export const decrement = (data) =>({type:DECREMENT,data})
export const pageOn = (data) =>({type:PAGE_TYPE,data})
export const showDetail = (data) =>({type:SHOW_DETAIL,data})
export const courseDetail = (data) =>({type:COURSE_DETAIL,data})
export const incrementCourse = (data) =>({type:INCREMENT_COURSE,data})
export const decrementCourse = (data) =>({type:DECREMENT_COURSE,data})

