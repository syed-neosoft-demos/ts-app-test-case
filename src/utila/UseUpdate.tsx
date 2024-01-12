import { useState } from "react";

export const useUpdate = (initialState: number) => {
  const [data, setData] = useState(initialState);
  const increment = () => setData((pre) => pre + 1);
  const decrement = () => setData((pre) => pre - 1);

  return { increment, decrement, data };
};
