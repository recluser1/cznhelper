const CharacterTypes = () => {
  return (
    <>
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/50">
        <img src="/images/icon-ego-void.webp" alt="Void" className="w-5 h-5" />
        <span className="text-purple-400 text-sm font-medium">Void</span>
      </div>

      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black-500/20 border border-black-500/40">
        <img
          src="/images/icon-job-psionic.webp"
          alt="Psionic"
          className="w-5 h-5"
        />
        <span className="text-black-400 text-sm font-medium">Psionic</span>
      </div>
    </>
  );
};

const CharacterArtwork = () => {
  return (
    <div className="relative w-full h-[400px] bg-gradient-to-br from-purple-500/20 to-black/30 flex items-center justify-center warp">
      <img
        src={`/images/characters/chizuru.webp`}
        alt={`chizuru full artwork`}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export { CharacterArtwork, CharacterTypes };
