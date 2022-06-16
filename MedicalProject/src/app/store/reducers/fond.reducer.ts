import { initialFondState,  FondState } from "../state/fond.state";
import { DONATE_CHILD, DONATE_CHILD_SUCCSESS, FondActions, SET_ALL_CHILDREN, SET_CHILD_ID } from "../actions/fond.actions";

export const fondReducer = (state = initialFondState, action: FondActions): FondState => {
    switch(action.type){
        case SET_ALL_CHILDREN: {
            return {
                ...state,
                childList: [...action.childList]
            };
        }
        case SET_CHILD_ID: {
            return {
                ...state,
                childId: action.childId
            };
        }
        case DONATE_CHILD: {
            return {
                ...state,
                childList: state.childList.map((el) => {
                    if(el.id !== action.idChild){
                        return el;
                    }
                    return {
                        ...el,
                        ...action.donChild
                    };
                })
            };
        }
        case DONATE_CHILD_SUCCSESS: {
            return {
                ...state,
                childList: state.childList.map( (el) => {
                    if(el.id !== action.idChild){
                        return el;
                    }
                    return {
                        ...el,
                        ...action
                    };
                })
            };
        }
        default: {
            return state;
        }
    }
}