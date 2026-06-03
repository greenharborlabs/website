type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  id?: string;
};

export function SectionHeading({ eyebrow, title, body, id }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 id={id}>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}
