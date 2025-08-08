import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCookie, setCookie } from "cookies-next";
import { useCallback, useEffect } from "react";
import { CONFIG } from "site.config";
import { queryKey } from "src/constants/queryKey";
import { SchemeType } from "src/types";

type SetScheme = (scheme: SchemeType) => void;

const useScheme = (): [SchemeType, SetScheme] => {
  const queryClient = useQueryClient();
  const followsSystemTheme = CONFIG.blog.scheme === "system";

  const { data } = useQuery<SchemeType>({
    queryKey: queryKey.scheme(),
    enabled: false,
    initialData: "light",
  });

  const setScheme = useCallback(
    (scheme: SchemeType) => {
      setCookie("scheme", scheme);

      queryClient.setQueryData(queryKey.scheme(), scheme);
    },
    [queryClient]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const cachedScheme = getCookie("scheme") as SchemeType;
    const defaultScheme: SchemeType = "light";
    setScheme(cachedScheme || defaultScheme);
  }, [data, followsSystemTheme, setScheme]);

  return [data, setScheme];
};

export default useScheme;
