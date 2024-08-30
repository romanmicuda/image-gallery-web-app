export interface SearchBarProps {
  searchImages: (searchTerm: string) => void;
}

export interface ImageFilterProps {
  applyFilter: (
    resultsType: ResultType,
    dataRange: DataRangeType | undefined
  ) => void;
}

export type ResultType = 10 | 15 | 20;

export type DataRangeType = "qdr:h" | "qdr:w" | "qdr:d" | "qdr:m" | "qdr:y";

export interface ImageDataCard {
  title: string;
  imageUrl: string;
  source: string;
}

export interface ImageListProps {
  data: ImageDataCard[];
  loading: boolean;
  error: boolean;
}
