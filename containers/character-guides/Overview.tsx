// containers/character-guides/Overview.tsx

type Props = {
  characterName: string;
  characterImage: string;
  attribute: string;
  job: string;
};

export const Overview = ({ characterName, characterImage, attribute, job }: Props) => {
  return (
    <section className="flex items-center gap-4">
      <img
        src={characterImage}
        alt={characterName}
        className="w-20 h-20 rounded-lg object-cover"
      />

      <div>
        <h1 className="text-2xl font-bold">{characterName}</h1>
        <p className="text-sm text-gray-400">
          {job} • {attribute}
        </p>
      </div>
    </section>
  );
};
