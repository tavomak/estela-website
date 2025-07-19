const splitTitleInTwoLines = (title: string): { firstLine: string; secondLine: string } => {
  const words = title.trim().split(' ');
  const midpoint = Math.ceil(words.length / 2);
  const firstLine = words.slice(0, midpoint).join(' ');
  const secondLine = words.slice(midpoint).join(' ');

  return { firstLine, secondLine };
};

export default splitTitleInTwoLines;
