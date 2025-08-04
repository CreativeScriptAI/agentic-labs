import { TPost } from "src/types";
import dynamic from "next/dynamic";

const _UtterancesComponent = dynamic(
  () => {
    return import("./Utterances");
  },
  { ssr: false }
);
const _CusdisComponent = dynamic(
  () => {
    return import("./Cusdis");
  },
  { ssr: false }
);

type Props = {
  data: TPost;
};

const CommentBox: React.FC<Props> = ({ data: _data }) => {
  return (
    <div>
      {/* {CONFIG.utterances.enable && <UtterancesComponent issueTerm={data.id} />}
      {CONFIG.cusdis.enable && (
        <CusdisComponent id={data.id} slug={data.slug} title={data.title} />
      )} */}
    </div>
  );
};

export default CommentBox;
