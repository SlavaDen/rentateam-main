import useInput from 'hock/useInput';
import React, { createContext, useRef } from 'react';
import { IUseInputAttribute } from 'hock/useInput';

interface IOrderContext {
  categoriesRef: HTMLElement[],
  addToCategoriesRef: (element: HTMLElement) => void
  street: IUseInputAttribute | null,
  home: IUseInputAttribute | null
}

const orderContextDefaultValue: IOrderContext = {
  categoriesRef: [],
  addToCategoriesRef: () => { },
  street: null,
  home: null
}

const OrderContext = createContext<IOrderContext>(orderContextDefaultValue);

interface IOrderContextProvider {
  children?: React.ReactNode
}

const OrderProvider: React.FC<IOrderContextProvider> = ({ children }) => {

  const categoriesRef = useRef<HTMLElement[]>([]);

  const addToCategoriesRef = (element: HTMLElement) => {
    if (element && !categoriesRef.current.includes(element)) {
      categoriesRef.current.push(element);
    }
  }

  const street = useInput('');
  const home = useInput('');

  const value = {
    categoriesRef,
    addToCategoriesRef,
    street,
    home
  }

  return (
    <OrderContext.Provider
      value={value}
    >
      {children}
    </OrderContext.Provider>
  )
}

export { OrderContext, OrderProvider };
export default OrderProvider;