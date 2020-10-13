import { useRouter } from "next/router";
import { useEffect } from "react";

export const useIntro = () => {
  const Router = useRouter();
  const urlPath = Router.pathname;

  try {
    const storage = window.localStorage;
    const currTimestamp = Date.now();
    const timestamp = JSON.parse(
      storage.getItem(`timestamp${urlPath}`) || "1000"
    );

    const timeLimit = 3 * 60 * 60 * 1000; // 3 hours

    const hasTimePassed = currTimestamp - timestamp > timeLimit;

    useEffect(() => {
      hasTimePassed
        ? storage.setItem(`timestamp${urlPath}`, currTimestamp.toString())
        : storage.setItem(`timestamp${urlPath}`, timestamp.toString());
    }, []);

    return hasTimePassed;
  } catch (error) {
    return true;
  }
};

export default useIntro;
