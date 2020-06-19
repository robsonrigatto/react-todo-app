import { FORM_ALTERADO, LIST_ALTERADO } from './actionTypes'

//Action Creator
export function alteraForm(novoForm) {
    return {
        type: FORM_ALTERADO,
        payload: novoForm
    }
}

export function alteraList(novoList) {
    return {
        type: LIST_ALTERADO,
        payload: novoList
    }
}