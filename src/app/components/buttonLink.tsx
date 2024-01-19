import Link from "next/link";
import { Component, ReactNode } from "react";

type Props = {
  title: string, 
  path: string, 
  children: ReactNode | null
};

class ButtonLink extends Component<Props> {
  render() {
    const { title, path, children } = this.props;

    return(
      <Link href={ path } title={ title } target="_blank" className="w-2xl flex items-center justify-center p-[0.75rem] rounded-[50%] bg-5th-color hover:bg-4th-color text-secundary-color hover:text-primary-color">
        { children }
      </Link>
    );
  }
}

export default ButtonLink;
