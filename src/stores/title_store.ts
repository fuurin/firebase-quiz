import type { Writable } from "svelte/store"
import { writable } from "svelte/store"

export const title: Writable<string> = writable('')
export const setTitle = (titleToSet: string) => title.set(titleToSet)
