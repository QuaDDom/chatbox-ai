import SyncLoader from "react-spinners/SyncLoader";

interface Props {
  loading: boolean;
}

export default function Loader({ loading }: Props) {
  return (
    <div>
      <SyncLoader color="#fff" loading={loading} size={150} />
    </div>
  );
}
