import moxios from "moxios";
import { testStore } from "../../utils";
import { fetchPost } from "../actions";

describe("fetchPosts action integeration test", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test("Store is updated correctly", () => {
    const expectedState = [
      {
        title: "title",
        body: "body",
      },
      {
        title: "title",
        body: "body",
      },
      {
        title: "title",
        body: "body",
      },
    ];

    const store = testStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPost()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    });
  });
});
