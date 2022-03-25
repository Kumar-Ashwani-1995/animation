import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { PostService } from "../post.service";
import { AddArraySuccess, AddArrayValue } from "./transfer.action";

export class transferEffect {

    // addToArray$ = createEffect(()=>
    // this.action$.pipe(
    //     ofType(AddArrayValue),
    //     switchMap((action)=>{
    //         return this.postService.getPost(action.arrValue).pipe(
    //             map((arrValue) => AddArraySuccess(arrValue))
    //         );
    //     })
    // ))

    constructor(private action$:Actions,private postService:PostService) {
        
    }
}