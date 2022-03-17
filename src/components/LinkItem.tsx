import Link from 'next/link';
import { ReactNode, VFC } from 'react';

type Props = {
  pageName: string;
  genre: string;
  children?: ReactNode;
};
const LinkItem: VFC<Props> = ({ pageName, genre, children }) => {
  return (
    <li>
      <Link href={`/${genre}/${pageName}`}>{children || pageName}</Link>
    </li>
  );
};

export default LinkItem;
