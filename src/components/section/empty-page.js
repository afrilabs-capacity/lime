export default function EmptyPage({ text, disablePluralize }) {
  return (
    <div className="py-32 text-center bg-white rounded-lg mb-5">
      {" "}
      <p>
        We found 0 {text}
        {!disablePluralize ? "(s)" : ""}
      </p>
    </div>
  );
}
