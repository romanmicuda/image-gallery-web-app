export interface SearchBarProps {
  searchImages: (searchTerm: string) => void;
}

export interface ImageFilterProps {
  applyFilter: (
    resultsType: ResultType,
    dataRangeDictionary: DataRangeKey | undefined
  ) => void;
}

export type ResultType = 10 | 15 | 20;

export type DataRangeKey = "qdr:h" | "qdr:w" | "qdr:d" | "qdr:m" | "qdr:y";
