import { getAdvertisementsAction } from "./advertisements";
import { getCompaniesAction } from "./companies";
import { ThunkAction } from "./types";

let lastTime = 0;
const throttleTimeout = 1000 * 60;

export function refreshStateAction(): ThunkAction<Promise<void>> {
  const time = Date.now();
  const diff = time - lastTime;

  if (diff < throttleTimeout) {
    return () => Promise.resolve();
  } else {
    lastTime = time;
    return async (dispatch) => {
      dispatch(getAdvertisementsAction());
      dispatch(getCompaniesAction());
    };
  }
}
