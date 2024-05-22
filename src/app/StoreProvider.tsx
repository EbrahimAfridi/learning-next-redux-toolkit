'use client'
import { add } from "@/lib/store/features/cart/cartSlice"
import { AppStore, makeStore } from "@/lib/store/store"
import { Provider } from "react-redux";
import React, { ReactNode, useRef } from "react"

const StoreProvider = ({children}: {children: ReactNode}) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    // Add initial state
    // storeRef.current.dispatch(add("testProductId"))
  }
  return (
    <Provider store={storeRef.current}>
      {children}
    </Provider>
  )
}

export default StoreProvider
