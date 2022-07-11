import Knight from "./knight";
export const Piece = ({ isKnight }) => (isKnight ? <Knight /> : null);
