import { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import useScheme from "src/hooks/useScheme";
type Props = {
  id: string;
  slug: string;
  title: string;
};

const Cusdis: React.FC<Props> = ({ id: _id, slug: _slug, title: _title }) => {
  const [value, setValue] = useState(0);
  const [_scheme] = useScheme();

  const onDocumentElementChange = useCallback(() => {
    setValue((value) => value + 1);
  }, []);

  useEffect(() => {
    const changesObserver = new MutationObserver(
      (mutations: MutationRecord[]) => {
        mutations.forEach((_mutation: MutationRecord) => {
          onDocumentElementChange();
        });
      }
    );

    changesObserver.observe(document.documentElement, {
      attributeFilter: ["class"],
    });

    return () => {
      changesObserver.disconnect();
    };
  }, [onDocumentElementChange]);

  return (
    <>
      <StyledWrapper id="comments">
        {/* <ReactCusdis
          key={value}
          attrs={{
            // host: CONFIG.cusdis.config.host,
            // appId: CONFIG.cusdis.config.appid,
            pageId: id,
            pageTitle: title,
            pageUrl: `${CONFIG.link}/blog/${slug}`,
            theme: scheme,
          }}
        /> */}
      </StyledWrapper>
    </>
  );
};

export default Cusdis;

const StyledWrapper = styled.div`
  margin-top: 2.5rem;
`;
