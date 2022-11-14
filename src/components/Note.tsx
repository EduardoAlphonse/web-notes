export type NoteProps = {
  id?: string;
  title: string;
  description?: string;
  tags?: string[];
};

export const Note = ({ title, description, tags }: NoteProps) => {
  return (
    <li className="relative flex flex-col gap-4 self-start bg-white pl-[22px] py-4 pr-4 rounded-[6px] overflow-hidden">
      <h2 className="text-xl font-heading font-semibold">{title}</h2>

      {description && <p className="text-sm">{description}</p>}

      <p className="text-xs text-zinc-400 text-end">14/11/2022 - 02:18AM</p>

      <footer className="flex flex-1 items-end gap-2 flex-wrap">
        {tags?.map((tag) => (
          <Tag
            key={tag}
            title={tag}
          />
        ))}
      </footer>

      <span className="absolute left-0 top-0 w-[6px] h-full bg-violet-600" />
    </li>
  );
};

type TagProps = {
  title: string;
};

const Tag = ({ title }: TagProps) => {
  return (
    <span className="px-4 py-2 rounded-lg bg-zinc-100 font-semibold text-xs lowercase">
      {title}
    </span>
  );
};
