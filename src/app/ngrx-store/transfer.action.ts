import {createAction, props } from "@ngrx/store";

export const getArrayValue=createAction('[ARRAY] get value')
export const AddArrayValue=createAction('[ARRAY] add value',props<{arrValue:number}>())
export const AddArraySuccess=createAction('[ARRAY] add Success',props<{arrValue:number}>())

export const deleteArrayValue=createAction('[ARRAY] delete value',props<{position:number}>())
