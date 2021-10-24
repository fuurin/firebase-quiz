import type { User } from "@firebase/auth"
import type { Writable } from "svelte/store"

import { writable, get } from "svelte/store"

export const currentUser: Writable<User> = writable(null)
export const setCurrentUser = (user: User) => currentUser.set(user)
export const requireLogin = (fallbackPath = '/') => {
  if (!get(currentUser)) {
    location.href = fallbackPath
  }
}
