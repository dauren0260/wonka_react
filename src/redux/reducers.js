import { combineReducers } from "redux";
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

let initWidth = 0;
function getWidth(preState=initWidth,action){
    switch(action.type){
        case WIDTH:
            action.data = document.body.clientWidth;
            console.log('hi I am width',action.data)
            return action.data
            
        default:
            return preState;
    }
}

let initMenuClose = true;
function isMenuClose(preState=initMenuClose,action){
    let {type,data} = action;

    if(data!==undefined){
        switch(type){
            case MENU_CLOSE:
                return preState = data
            default:
                return preState;
        }
    }

    switch(type){
        case MENU_CLOSE:
            return !preState
        default:
            return preState;
    }
}

let initCollapsed = true;
function isCollapsed(preState=initCollapsed,action){
    let {type,data} = action;

    if(data!==undefined){
        switch(type){
            case MENU_CLOSE:
                return preState = data
            default:
                return preState;
        }
    }

    switch(type){
        case COLLAPSED:
            return !preState
        default:
            return preState;
    }
}

let initProductDemo = 'paletImg';
function productDemoSrc(preState=initProductDemo,action){
    let {type,data} = action
    switch (type) {
        case SET_DEMO:
            return preState = data;
    
        default:
            return preState;
    }
}

let initChocoType = false;
function expandChocoType(preState=initChocoType, action){
    let {type} = action;
    switch(type){
        case OPEN_TYPE:
            return !preState;
        default:
            return preState;
    }
}

let initChocoSort = false;
function expandChocoSort(preState=initChocoSort, action){
    let {type} = action;
    switch(type){
        case OPEN_SORT:
            return !preState;
        default:
            return preState;
    }
}

let initCount = 1;
function countReducer(preState=initCount, action){
    let {type,data} = action;
    switch (type) {
        case INCREMENT:
            return preState + data

        case DECREMENT:
            if( preState <= 0 ){
                return preState = 0;
            }else{
                return preState-data
            }
        default:
            return preState
    }
}

let initCourseCount = 1;
function courseCountReducer(preState=initCourseCount, action){
    let {type,data} = action;
    switch (type) {
        case INCREMENT_COURSE:
            return preState + data

        case DECREMENT_COURSE:
            if( preState <= 0 ){
                return preState = 0;
            }else{
                return preState-data
            }
        default:
            return preState
    }
}

let initPageOn = '';
function pageOnReducer(preState=initPageOn, action){
    let {type,data} = action;
    switch (type) {
        case PAGE_TYPE:            
            return preState = data
    
        default:
            return preState
    }
}

let initDetail = {};
function showDetailReducer(preState=initDetail, action){
    let {type,data} = action;
    switch (type) {
        case SHOW_DETAIL:            
            return preState = data
    
        default:
            return preState
    }
}

let initcourseDetail = {};
function courseDetailReducer(preState=initcourseDetail, action){
    let {type,data} = action;
    switch (type) {
        case COURSE_DETAIL:            
            return data
    
        default:
            return preState
    }
}



export default combineReducers({
    getWidth,
    isMenuClose,
    isCollapsed,
    productDemoSrc,
    expandChocoType,
    expandChocoSort,
    countReducer,
    courseCountReducer,
    pageOnReducer,
    showDetailReducer,
    courseDetailReducer
})