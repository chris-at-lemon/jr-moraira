import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  title: string;
  children: React.ReactNode;
  open: boolean;
  onClick: () => void;
};

export const AccordionItem = ({
  title,
  children,
  onClick,
  open = false,
}: Props) => {
  return (
    <article className="w-full select-none">
      <div
        onClick={onClick}
        className="flex cursor-pointer items-center justify-between"
      >
        <h4 className="text-darkPurple text-lg font-semibold md:text-xl">
          {title}
        </h4>
        {open ? (
          <FontAwesomeIcon icon={faChevronUp} className="ml-2" />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
        )}
      </div>
      {open && <div className="pt-4">{children}</div>}
    </article>
  );
};
