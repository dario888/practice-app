import { AnyAction } from "@reduxjs/toolkit";

//matcher functions
export function isPendingAction(action: AnyAction) {
  return action.type.endsWith("/pending");
}
export function isFulfilledAction(action: AnyAction) {
  return action.type.endsWith("/fulfilled");
}
export function isRejectedAction(action: AnyAction) {
  return action.type.endsWith("/rejected");
}
