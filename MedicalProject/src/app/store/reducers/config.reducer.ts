import { ConfigState, initialConfigState } from "../state/config.state";

import { SET_CONTACTS_CONTENT,SET_NEWS_CONTENT, SAVE_CHANGE_CONTACT, SAVE_CHANGE_CONTACT_SUCCSESS, SAVE_CHANGE_NEWS, SAVE_CHANGE_NEWS_SUCCSESS, ADD_NEWS_CONTENT,ADD_NEWS_CONTENT_SUCCSESS } from "../actions/config.actions";

import { ConfigActions } from "../actions/config.actions";

export const configReducer = (state = initialConfigState, action: ConfigActions): ConfigState => {
    switch(action.type){
        case SET_CONTACTS_CONTENT: {
            return {
                ...state,
                contactContent: [...action.contactContent],
            };
        }
        case SET_NEWS_CONTENT: {
            return {
                ...state,
                newsContent: [...action.newsContent],
            };
        }
        case SAVE_CHANGE_CONTACT: {
            return{
                ...state,
                contactContent: state.contactContent.map((el)=>{
                    return{
                        ...el,
                        ...action.changeContactContent
                    }
                })
            };
        }
        case SAVE_CHANGE_CONTACT_SUCCSESS: {
            return {
                ...state,
                contactContent: state.contactContent.map((el)=>{
                    return{
                        ...el,
                        ...action.changeContactContent
                    }
                })
            };
        }
        case SAVE_CHANGE_NEWS: {
            return{
                ...state,
                newsContent: state.newsContent.map((el)=>{
                    return{
                        ...el,
                        ...action.changeNewsContent
                    }
                })
            };
        }
        case SAVE_CHANGE_NEWS_SUCCSESS: {
            return {
                ...state,
                newsContent: state.newsContent.map((el)=>{
                    return{
                        ...el,
                        ...action.changeNewsContent
                    }
                })
            };
        }
        case ADD_NEWS_CONTENT: {
            return {
                ...state,
                newsContent: [...state.newsContent, action.newNewsContent]
            };
        }
        case ADD_NEWS_CONTENT_SUCCSESS: {
            return {
                ...state,
                newsContent: [...state.newsContent, action.newNewsContent]
            };
        }
        default: {
            return state;
        }
    }

}