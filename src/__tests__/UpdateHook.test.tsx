import { act, renderHook } from "@testing-library/react";
import { useUpdate } from "../utila/UseUpdate";
describe("hooks", () => {
  it("update hook working correctly?", () => {
    const { result } = renderHook(() => useUpdate(0));
    expect(result?.current?.data).toBe(0);
    //  act(() => {
    //    result.current.decrement;
    //  });
    //  expect(result?.current?.data).toBe(1);
  });
});
