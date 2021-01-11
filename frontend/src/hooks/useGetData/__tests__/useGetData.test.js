import useGetData from "../";
import { act, renderHook } from "@testing-library/react-hooks";

const headers = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8",
  },
  method: "GET",
};

describe("useGetData hook test", () => {
  test("it should request with a given url", async () => {
    global.fetch = jest.fn();
    await act(() => renderHook(() => useGetData("testurl")));

    expect(global.fetch).toBeCalledWith(
      `${process.env.MIDDLEWARE}testurl`,
      headers
    );
  });
});
