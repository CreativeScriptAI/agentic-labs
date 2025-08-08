import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCookie, setCookie } from "cookies-next";
import { useEffect } from "react";
import { CONFIG } from "../../site.config";
import { queryKey } from "../constants/queryKey";
import { SchemeType } from "../types";

type SetScheme = (scheme: SchemeType) => void;

const useScheme = (): [SchemeType, SetScheme] => {
  const queryClient = useQueryClient();
  const followsSystemTheme = CONFIG.blog.scheme === "system";

  const { data } = useQuery({
    queryKey: queryKey.scheme(),
    queryFn: () =>
      followsSystemTheme ? "light" : (CONFIG.blog.scheme as SchemeType),
    enabled: false,
    initialData: followsSystemTheme
      ? "light"
      : (CONFIG.blog.scheme as SchemeType),
  });

  const setScheme = (scheme: SchemeType) => {
    setCookie("scheme", scheme);

    queryClient.setQueryData(queryKey.scheme(), scheme);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const cachedScheme = getCookie("scheme") as SchemeType;
    const defaultScheme = followsSystemTheme
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : (CONFIG.blog.scheme as SchemeType);
    setScheme(cachedScheme || defaultScheme);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return [data || "light", setScheme];
};

export default useScheme;
